import './App.css';
import Dashboard from './Components/Dashboard';
import Store from './Components/Store';

function App() {
  return (
    <Store>
      <div className="App">
        <Dashboard />
      </div>
    </Store>
  );
}

export default App;
