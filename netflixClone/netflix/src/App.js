import './App.scss';
import{BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Header from './pages/Home/Header/Header';
function App() {
  return (
  
      <BrowserRouter> 
        <Header/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route ></Route>
        </Routes>
      </BrowserRouter>
     
  
  );
}

export default App;
