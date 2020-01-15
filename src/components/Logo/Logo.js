import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";

import styles from "./Logo.module.css";

const Logo = props => (
  <div className={styles.Logo}>
    <img src={BurgerLogo} alt="Burger-Logo" />
  </div>
);

export default Logo;
