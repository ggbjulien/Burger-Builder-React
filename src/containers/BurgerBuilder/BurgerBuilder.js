import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.65,
  bacon: 1.0,
  cheese: 0.5,
  meat: 1.5
};

export default props => {
  const [purchasableState, setPurchasableState] = useState(false);
  const [purchasingState, setPurchasingState] = useState(false);
  const [burgerState, setBurgerState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 1
  });

  const purchaseCancelHandler = () => {
    setPurchasingState(false);
  };

  const purchasingHandler = () => {
    setPurchasingState(true);
  };

  const updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasableState(sum > 0);
  };

  const addIngredientHandler = type => {
    const oldCount = burgerState.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...burgerState.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSum = INGREDIENT_PRICES[type];
    const oldPrice = burgerState.totalPrice;
    const newPrice = oldPrice + priceSum;
    setBurgerState({ totalPrice: newPrice, ingredients: updatedIngredients });
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = type => {
    const oldCount = burgerState.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...burgerState.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduct = INGREDIENT_PRICES[type];
    const oldPrice = burgerState.totalPrice;
    const newPrice = oldPrice - priceDeduct;
    setBurgerState({ totalPrice: newPrice, ingredients: updatedIngredients });
    updatePurchaseState(updatedIngredients);
  };

  const disabledBtn = {
    ...burgerState.ingredients
  };
  for (let key in disabledBtn) {
    disabledBtn[key] = disabledBtn[key] <= 0;
  }

  return (
    <Aux>
      <Modal show={purchasingState} modalClosed={purchaseCancelHandler}>
        <OrderSummary ingredients={burgerState.ingredients} />
      </Modal>

      <Burger ingredients={burgerState.ingredients} />
      <BuildControls
        ingredientAdd={addIngredientHandler}
        ingredientRemove={removeIngredientHandler}
        disabled={disabledBtn}
        price={burgerState.totalPrice}
        purchasable={purchasableState}
        ordered={purchasingHandler}
      />
    </Aux>
  );
};
