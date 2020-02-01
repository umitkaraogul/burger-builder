import React, { } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

const Checkout = props => {

    const checkoutCancelledHandler = () => props.history.goBack();
    const checkoutContinuedHandler = () =>  props.history.replace('/checkout/contact-data');
    
    let summary = <Redirect to="/" />;

    if (props.ingredients) {
        const purchaseRedirect = props.purchased ? <Redirect to="/" /> : null;

        summary = (
            <div>
                {purchaseRedirect}
                <CheckoutSummary
                    ingredients={props.ingredients}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler} />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        )
    }
    return (
        <div>
            {summary}
        </div>
    );
}


const mapStateProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateProps)(Checkout);
