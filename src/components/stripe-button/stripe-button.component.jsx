

import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JGe2EDAFvuPbeFFiILjcDydCpdwJMAs2eUA28xGjZKQTwooI8smE8faZVCRXQIdHxjFgYEryDgi7FiqmTNt3KAd00C5xcge0A";

   const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckOut
            label="Pay Now"
            name="Clothing E-commerce Website"
            billingAddress
            shippingAddress
            image="../../assets/Stripe-button-icon.svg"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckOutButton;