import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    /* Hero section container with background overlay */
    <div className={styles.heroSection}>
      {/* Overlay to add a semi-transparent layer over the background image */}
      <div className={styles.overlay}></div>
      {/* Content within the hero section */}
      <div className={styles.content}>
        {/* Heading in the hero section */}
        <h1>FIND THE BEST SCHOOL FOR YOUR CHILD</h1>
      </div>
    </div>
  );
};

export default HeroSection;
