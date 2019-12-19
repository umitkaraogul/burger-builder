import React, { Component } from 'react';

import classes from './ContactData.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios_order';



class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    onChangeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState((prevState) => { return { [key]: value } });
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Umit',
                addresss: {
                    street: 'Test Street',
                    zipCode: '41365',
                    country: 'UK'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false, });

            });

    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" onChange={this.onChangeHandler} />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" onChange={this.onChangeHandler} />
            <input className={classes.Input} type="text" name="street" placeholder="Street" onChange={this.onChangeHandler} />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" onChange={this.onChangeHandler} />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;