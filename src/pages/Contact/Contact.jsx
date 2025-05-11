import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css"; // Or reuse your existing styles

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me ✨
      </motion.h2>

      <motion.p
        className={styles.subtext}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        No forms. No waiting. Just say hi and let’s build something cool together 🚀
      </motion.p>

      <motion.a
        href="https://wa.me/919326004793?text=Hi%20Surabhi%2C%20I%20just%20saw%20your%20portfolio%20and%20I'd%20love%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <FaWhatsapp size={24} style={{ marginRight: "10px" }} />
        Message Me on WhatsApp
      </motion.a>
      </div>
    </div>
  );
};

export default Contact;
