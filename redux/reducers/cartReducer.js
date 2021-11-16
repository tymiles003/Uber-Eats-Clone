let defaulState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaulState, action) => {
  switch (action.type) {
    //   add to cart functionality
    case "ADD_TO_CART": {
      let newState = { ...state };
      // deep copy of the original state
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        // new state is going to be..
        newState.selectedItems = {
          //   items are ging to be whatever the state was plus the new action payload we are sending
          items: [...newState.selectedItems.items, action.payload],
          // and rest name is going to be...
          restaurantName: action.payload.restaurantName,
        };
      } else {
        // if checkbox is false
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            // filter out the item that was in the cart
            ...newState.selectedItems.items.filter(
              (item) => item.title != action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, "console log");
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
