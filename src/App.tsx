import { useState } from 'react';
import './App.css'
import RegisterForm from './components/login/LoginForm';
import NavBar1 from './components/Navbar';
import UserDetails from './components/UserDetails';
function App() {

  const companyName = "code";
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    fullName: "",
  })


  return (
    <>
      <NavBar1 companyName={companyName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      {isLoggedIn ? (
        <UserDetails user={userData}/>
      ) :
      <RegisterForm setIsLoggedIn={setIsLoggedIn}
      userData={userData}
      setUserData={setUserData}/>}
    </>
  )
}

export default App
