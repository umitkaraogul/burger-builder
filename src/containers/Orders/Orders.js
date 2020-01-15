import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios_order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {

        let orders = this.props.loading ? <Spinner /> :
        this.props.orders.map((item) => <Order 
                key={item.id} 
                ingredients={item.ingredients} 
                price={item.price} />);
        return (<div>
            {
                orders
            }
        </div>);
    }
}

const mapStateProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(withErrorHandler(Orders, axios));