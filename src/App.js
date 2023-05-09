import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading'
import ToDo from './Components/Todo'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Heading/>
          <ToDo/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
