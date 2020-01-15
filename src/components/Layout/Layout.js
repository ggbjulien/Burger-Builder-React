import React from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import styles from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
      <main className={styles.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default Layout;
