import './App.css';
import Heading from './Components/Heading/Heading'
import ToDo from './Components/Todo/Todo'
import { Route, Routes } from 'react-router-dom';
import ToDoList from './Page/ToDoList';


function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path = '/' element = {<ToDoList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
