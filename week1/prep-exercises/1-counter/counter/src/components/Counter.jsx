import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'

function Counter() {
    const [count, setCount] = useState(0);
    const incrementCounterByOne = () => setCount(count + 1);
    const decrementCounterByOne = () => setCount(count > 0 ? count - 1 : 0);
    const incrementCounterByTwo = () => setCount(count + 2);
    const decrementCounterByTwo = () => setCount(count > 1 ? count - 2 : 0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    return (
        <div>
            <Count count={count}/>
            <div>
                <Button event={incrementCounterByOne} text="Add 1!"/>
                <Button event={decrementCounterByOne} text="Subtract 1!"/>
                <Button event={incrementCounterByTwo} text="Add 2!"/>
                <Button event={decrementCounterByTwo} text="Subtract 2!"/>
            </div>
            <p>{feedback}</p>
        </div>
    )
}

export default Counter;
