  import './App.css';
  import Header from './Header/Header';
  import Main from './pages/Main';
  import Aboutus from './pages/Aboutus';
  import Blog from './pages/Blog';
  import { BrowserRouter,Routes ,Route } from 'react-router-dom';
  function App() {
    return (
<BrowserRouter>
<div className="bg-black text-white">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path = "/about" element={ <Aboutus/>}/>
        <Route path = "/blog" element={ <Blog/>}/>
      </Routes>
</BrowserRouter>
    );
  }

  export default App;
