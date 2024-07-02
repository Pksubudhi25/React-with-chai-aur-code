# Reducers
 A **reducer** in Redux is a function that determines how the state of an application changes in response to actions sent to the store. It's a central concept in Redux and is used to manage the state of your application in a predictable way.

 

# Redux Toolkit Slice

A **slice** in Redux Toolkit is a way to organize a piece of the state and the logic to manage that state in a single, easy-to-use module. It combines the reducer logic and the actions for a specific feature into one place, making it easier to manage and maintain.

## Key Components of a Slice

1. **State**: The part of the state that this slice is responsible for.
2. **Initial State**: The default values for this part of the state.
3. **Reducers**: Functions that define how the state should change in response to actions.
4. **Actions**: These are generated automatically by Redux Toolkit based on the reducer functions.

## Creating a Slice

You use the `createSlice` function from Redux Toolkit to create a slice. Here's a step-by-step explanation with an example.

### Example: Counter Slice

1. **Import `createSlice`**:
    ```javascript
    import { createSlice } from '@reduxjs/toolkit';
    ```

2. **Define Initial State**:
    ```javascript
    const initialState = { value: 0 };
    ```

3. **Create the Slice**:
    ```javascript
    const counterSlice = createSlice({
      name: 'counter',  // Name of the slice
      initialState,     // Initial state for this slice
      reducers: {
        increment: (state) => {
          state.value += 1;
        },
        decrement: (state) => {
          state.value -= 1;
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload;
        },
      },
    });
    ```

4. **Export Actions and Reducer**:
    ```javascript
    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;
    ```

## Explanation

- **name**: A name for the slice, which is used to identify the slice's actions and state in the Redux store.
- **initialState**: The initial state value for this slice of state.
- **reducers**: An object where each key is the name of a reducer function. These functions define how the state should change in response to actions. The state parameter is a draft state (using Immer), allowing you to write "mutating" code that updates the state directly.

## Using the Slice

In your React component, you can use the actions and the state managed by the slice.

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;
```
"
 Dispatch reducer ko use karke store ke andar value change karta hai "