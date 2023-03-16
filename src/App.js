import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import MyForm from './components/MyForm';
import StateManager from './components/StateManager';
import LifecycleMethods from './components/LifecycleMethods';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Counter />
        
          <MyForm />
          <StateManager />
          <LifecycleMethods />
        </p>
      </header>
    </div>
  );
}

export default App;
