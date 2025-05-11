import React, { useEffect } from "react";
import styles from "./Blob.module.css";

const Blob = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 150, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <div id="blob" className={styles.blob}></div>;
};

export default Blob;
