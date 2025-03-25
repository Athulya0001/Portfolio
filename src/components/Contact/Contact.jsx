import React, { useContext } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { ThemeContext } from "../../Context/ThemeContext";

const Contact = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mjkyowqv");
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20 transition-colors">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Drop a message!
        </p>
      </div>

      {state.succeeded ? (
        <motion.p
          className="text-center font-semibold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Thanks for reaching out! I'll get back to you soon.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className={`mt-8 max-w-lg mx-auto p-6 shadow-md rounded-lg space-y-4 
            ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
          `}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`w-full p-3 border rounded-lg focus:outline-none 
              ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"}
            `}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`w-full p-3 border rounded-lg focus:outline-none 
              ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"}
            `}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className={`w-full p-3 border rounded-lg focus:outline-none 
              ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"}
            `}
          ></textarea>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileTap={{ scale: 0.95 }}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition
              ${darkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}
            `}
          >
            {state.submitting ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </motion.button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;