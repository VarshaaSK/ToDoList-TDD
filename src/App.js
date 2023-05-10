import './App.css';
import Heading from './Components/Heading/Heading'
import ToDoPage from './Page/ToDoPage'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path = '/' element = {<ToDoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
