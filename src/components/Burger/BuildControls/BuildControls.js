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
        {
            controls.map(cntrl =>
                <BuildControl
                    key={cntrl.type}
                    label={cntrl.label}
                    type={cntrl.type}
                    added={() => props.ingredientsAdded(cntrl.type)} />
            )
        }
    </div>
);

export default BuildControls;