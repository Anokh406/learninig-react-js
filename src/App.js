import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState}from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
function App() {
  const [alert, setAlert]  = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
}
  const [Mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title="Textutils-Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      document.title="Textutils-Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar  aboutText="About us" Mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    <Routes>
      <Route path='/' render={() => <Navigate to="/home" />} />
      <Route path="/home" element={<Home  Mode={Mode}/>} />
      <Route path="/about" element={<About Mode={Mode} showAlert={showAlert}/>} />
      <Route path="/textForm" element={<TextForm showAlert={showAlert} heading="Try TextUtils-word counter,character counter,remove extra spaces" Mode={Mode}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
 