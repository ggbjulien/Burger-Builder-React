import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

export default props => {
  const [burgerState, setBurgerState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  });

  return (
    <Aux>
      <Burger ingredients={burgerState.ingredients} />
      <div>Build Controls</div>
    </Aux>
  );
};
