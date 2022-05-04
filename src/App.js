import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
