import './App.css';
import Heading from './Components/Heading/Heading'
import ToDoPage from './Page/ToDoPage'
import User from './Components/Users/User'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path = '/' element = {<ToDoPage/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
