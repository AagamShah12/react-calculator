import { useCalculator, useCalculatorDispatch } from "../store/CalculatorContext";
import "./Button.css";

export function Button({ name, orange, wide }) {
    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
    ];
    const dispatch = useCalculatorDispatch();
    const state = useCalculator();
    const handleClick = () => {
        dispatch({state, buttonName: name});
    };
    return (
        <div className={className.join(" ").trim()}>
          <button onClick={handleClick}>{ name }</button>
        </div>
    );
}