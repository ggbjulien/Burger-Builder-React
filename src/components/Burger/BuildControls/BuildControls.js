import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import styles from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={styles.BuildControls}>
    <p>
      Current Price :{" "}
      <span className={styles.Price}>{props.price.toFixed(2)}</span>
    </p>
    {controls.map(e => (
      <BuildControl
        key={e.label}
        label={e.label}
        add={() => props.ingredientAdd(e.type)}
        remove={() => props.ingredientRemove(e.type)}
        disabled={props.disabled[e.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      CHECKOUT
    </button>
  </div>
);

export default BuildControls;
