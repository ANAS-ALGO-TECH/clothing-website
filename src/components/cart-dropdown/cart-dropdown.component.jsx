import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";


import {selectCartItems} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";


const CartDropDown = ({cartItem , history, dispatch}) => (
    <div className="cart-dropdown">
    <div className="cart-items">
    {
        cartItem.length ?
        cartItem.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
        )) :
        <span className="empty-message"> Your Cart is Empty!</span>
        
        }

    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
    </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));