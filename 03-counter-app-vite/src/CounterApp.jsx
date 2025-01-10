
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp=({value})=>{

    const [count, setCount]=useState(value);
    const sumar=()=>{
        setCount(count+1);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <button onClick={sumar}> {count} </button>
        </>);
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
};


