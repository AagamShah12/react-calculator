import { createContext, useContext, useReducer } from "react";
import calculate from "../logic/calculate";

const CalculatorContext = createContext(null);
const CalculatorDispatchContext = createContext(null);

export function CalculatorProvider( { children } ) {

    const [state, dispatch] = useReducer(calcReducer, initState);

    return (
        <CalculatorContext.Provider value={state}>
          <CalculatorDispatchContext.Provider value={dispatch}>
            {children}
          </CalculatorDispatchContext.Provider>
        </CalculatorContext.Provider>
    );
}

export function useCalculator() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatchContext);
}

function calcReducer(state, action) {
    return calculate(action.state, action.buttonName);
}

const initState = {
    total: null,
    next: null,
    operation: null,
};