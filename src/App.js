import './App.css';
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home'
import Navabr from './components/Navbar';
import About from './components/About'
import NotFound from './components/NotFound'

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Navabr />}>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route path="*" element={<NotFound/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App;
