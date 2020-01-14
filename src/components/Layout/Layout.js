import React from "react";

import Aux from "../../hoc/Aux";

import styles from "./Layout.module.css";

const Layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop
      <main className={styles.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default Layout;
