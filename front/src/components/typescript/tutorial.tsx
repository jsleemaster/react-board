import * as React from 'react';

interface CounterProps {
    startNumber : number;
}

const Counter: React.FunctionComponent<CounterProps> = (props) => {
    return (
        <>
        <h1>{props.startNumber}</h1>
        </>
    )
};

export default Counter;
