import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneDetail from './components/PhoneDetails';
import PhoneList from './components/PhoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PhoneList/>}/>
          <Route path='/phones/:id' element={<PhoneDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
