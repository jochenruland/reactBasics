import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import MyForm from './components/MyForm';
import StateManager from './components/StateManager';
import LifecycleMethods from './components/LifecycleMethods';
import OnlyEvenNumbersRender from './components/LifecycleMethods2';
import {BeOrNotToBe, HannieUndNannie, OneTwoThree, ConditionalStyleChanger} from './components/ConditionalRendering';
import MyToDoList from './components/DynamicRendering';

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
          <OnlyEvenNumbersRender />
          <BeOrNotToBe />
          <HannieUndNannie />
          <OneTwoThree />
          <ConditionalStyleChanger /><br/>
          <MyToDoList />
        </p>
      </header>
    </div>
  );
}

export default App;
