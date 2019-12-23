import React from 'react';
import classes from './Input.css';

const input = (props) => {

    let inputELement = null;
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case "input":
            inputELement = <input
                className={inputClasses.join(' ')} {
                ...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case "textarea":
            inputELement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case "select":
            inputELement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputELement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputELement}
        </div>
    );
}
export default input;