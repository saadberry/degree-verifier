import Header from './components/Header';
import Admin from './components/Admin';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThirdwebProvider } from '@thirdweb-dev/react'

// import Main from './components/Main';
import Check from './components/Check';
import './App.css';
import AddRecord from './components/AddRecord';
import FileUpload from './components/Fileupload';
import GetStudents from './components/GetStudents'

function App() {
  return (
    <>
    <ThirdwebProvider>
    <Router>
    <div className="container">
      
    <Header />
    
    <Routes>
      <Route path='/' element={<Check />}> </Route>
      
          <Route path='/admin' element={<Admin />}> </Route>
      
     
      <Route path='/addRecord' element={<AddRecord />}> </Route>
      <Route path='/api' element={<FileUpload/>}></Route>
      <Route path='/users' element={<GetStudents/>}></Route>
    </Routes>
    
    
    </div>
    </Router>
    </ThirdwebProvider>
    
    
    {/* <h1>VeriFy</h1> */}
    </>
  );
}

export default App;
