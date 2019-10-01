import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <div>Current Price <strong>{props.price.toFixed(2)}</strong></div>
        {controls.map(cntrl =>(
            <BuildControl
                key={cntrl.type}
                label={cntrl.label}
                type={cntrl.type}
                added={() => props.ingredientsAdded(cntrl.type)}
                removed={() => props.ingredientsRemoved(cntrl.type)}
                disabled={props.disabled[cntrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default BuildControls;