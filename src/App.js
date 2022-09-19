import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  let count = 1;

  return (
    <div className="App">
      <div>{count}</div>
    </div>
  );
}

export default App;
