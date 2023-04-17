import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogInPage from './view/pages/logInPage/logInPage';
import SignUpPage from './view/pages/signUpPage/signUpPage';
import ProfilePage from './view/pages/profilePage/profilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogInPage />} />
          <Route path='signUpPage' element={<SignUpPage />} /> 
          <Route path='profilePage' element={<ProfilePage />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;