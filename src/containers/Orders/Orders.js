import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios_order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ orders: fetchedOrders, loading: false })
            }).catch((error => {
                this.setState({ loading: false });
            }))
    }

    render() {
        const { orders } = this.state;
        return (<div>
            {
                orders.map((item) => <Order key={item.id} ingredients={item.ingredients} price={item.price} />)
            }
            <Order />
        </div>);
    }
}

export default withErrorHandler(Orders, axios);