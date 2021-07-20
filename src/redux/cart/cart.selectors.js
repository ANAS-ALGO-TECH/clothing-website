import { createSelector } from "reselect";

// Input Selector
const selectCart = state => state.cart;

// Output Selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQUantity, cartItem) => 
        accumulatedQUantity + cartItem.quantity, 
        0)
    );


    

