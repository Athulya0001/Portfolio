"use client";
import React, { useEffect, useRef, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

const Particles = ({
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mousePos = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef(null);
  const resizeTimeout = useRef(null);

  const rgb = hexToRgb(color);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();

    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(initCanvas, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (rafID.current != null) cancelAnimationFrame(rafID.current);
      clearTimeout(resizeTimeout.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  useEffect(() => {
    onMouseMove();
  }, [mousePos.x, mousePos.y]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const onMouseMove = () => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const { w, h } = canvasSize.current;
    const x = mousePos.x - rect.left - w / 2;
    const y = mousePos.y - rect.top - h / 2;
    if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
      mouse.current = { x, y };
    }
  };

  const initCanvas = () => {
    if (!containerRef.current || !canvasRef.current || !context.current) return;

    canvasSize.current.w = containerRef.current.offsetWidth;
    canvasSize.current.h = containerRef.current.offsetHeight;

    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    context.current.setTransform(1, 0, 0, 1, 0, 0);
    context.current.scale(dpr, dpr);

    circles.current = [];
    for (let i = 0; i < quantity; i++) {
      const circle = createCircle();
      drawCircle(circle);
    }
  };

  const createCircle = () => {
    const x = Math.random() * canvasSize.current.w;
    const y = Math.random() * canvasSize.current.h;
    const pSize = Math.random() * 2 + size;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    return {
      x, y,
      translateX: 0,
      translateY: 0,
      size: pSize,
      alpha: 0,
      targetAlpha,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    };
  };

  const drawCircle = (circle, update = false) => {
    const ctx = context.current;
    if (!ctx) return;
    const { x, y, translateX, translateY, size, alpha } = circle;

    ctx.translate(translateX, translateY);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${rgb.join(",")}, ${alpha})`;
    ctx.fill();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!update) circles.current.push(circle);
  };

  const clearContext = () => {
    context.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
  };

  const remapValue = (v, a1, a2, b1, b2) => {
    const r = ((v - a1) * (b2 - b1)) / (a2 - a1) + b1;
    return r > 0 ? r : 0;
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const edges = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = Math.min(...edges);
      const remapped = remapValue(closestEdge, 0, 20, 0, 1);
      circle.alpha = remapped > 1
        ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
        : circle.targetAlpha * parseFloat(remapped.toFixed(2));

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = createCircle();
        drawCircle(newCircle);
      }
    });

    rafID.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Particles;