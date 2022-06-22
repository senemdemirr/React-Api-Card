import './App.css';
import Users from './components/Users';
import Todos from './components/Todos';
import Posts from './components/Posts';
import Home from './components/Home';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="users" element={ <Users />}/>
            <Route exact path="todos" element={ <Todos />}/>
            <Route exact path="posts" element={ <Posts />}/>
            <Route exact path="comments" element={ <Comments />}/>
          </Routes>
          
        </Router>
      
    </div>
  );
}

export default App;
