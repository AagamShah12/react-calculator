import './App.css';
import { ButtonPanel } from './components/ButtonPanel';
import Display from './components/Display';
import { CalculatorProvider } from './store/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <div className="component-app">
        <Display />
        <ButtonPanel />
      </div>
    </CalculatorProvider>
  );
}

export default App;
