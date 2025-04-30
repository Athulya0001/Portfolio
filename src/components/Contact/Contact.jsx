import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";
import { Globe } from "../3D/Globe";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkyowqv");
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-20 transition-colors"
    >
      <div className="text-center mb-12">
        <span
          className={`uppercase text-lg font-bold px-4 py-2 mb-15 rounded-md ${
            !darkMode
              ? "text-blue-300 bg-blue-900"
              : "text-blue-500 bg-blue-100"
          }`}
          id="about"
        >
          Contact Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Drop a message!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          {state.succeeded ? (
            <motion.p
              className="text-center font-semibold mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Thanks for reaching out! I'll get back to you soon.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`p-6 shadow-md rounded-lg space-y-4
              ${!darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
            `}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={`w-full p-3 border rounded-lg focus:outline-none 
                  ${
                    !darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300"
                  }
                `}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={`w-full p-3 border rounded-lg focus:outline-none 
                  ${
                    !darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300"
                  }
                `}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className={`w-full p-3 border rounded-lg focus:outline-none 
                  ${
                    !darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300"
                  }
                `}
              ></textarea>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition
                  ${
                    !darkMode
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }
                `}
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          className="w-full max-w-[400px] h-[400px] relative"
        >
          <Globe />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
