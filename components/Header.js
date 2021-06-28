import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.image}
          src="/f.jpg"
          alt="asdada"
          width="500"
          height="400"
        />
      </div>
      <div>
        <h1>Galaxy is comign Soon</h1>
      </div>
    </div>
  );
}

export default Header;
