import { useCalculator } from "../store/CalculatorContext";
import "./Display.css";

function Display() {
    const state = useCalculator();
    return (
        <div className="component-display">
        <div> { state.next || state.total || "0" } </div>
      </div>
    );
}

export default Display;