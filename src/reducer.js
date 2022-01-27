export const initialState = {
  basket: [],
  user: null,
};

//Changing String to Int

export function StringToIntPrice(price) {
  var stringPrice = '';

  for (var s of price) {
    if (s !== ',') stringPrice += s;
  }
  var finalPrice = parseInt(stringPrice);
  return finalPrice.toFixed(2);
}

//Selector

export const getBasketTotal = (basket) => {
  var amount = 0;
  for (var item of basket) {
    amount += parseFloat(StringToIntPrice(item.price));
    console.log(amount + ' ' + item.price);
  }

  return Number(amount).toFixed(2);
};

const reducer = (state, action) => {
  switch (action.type) {
    // Adding Items to Basket

    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    // Removing Item from Basket

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.id}) as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    // Setting User

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
