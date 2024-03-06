
import { useEffect, useState } from 'react';
import './App.css';
import Project1 from './project1/Project1.js';
import Project2 from './project1/Project2';
import Project3 from './project1/Project3';
function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [Email, setEmail] =useState("");
  const [address,setaddress] = useState("");

  useEffect(() => {
    setname("anitha");
    setage("26");
    setEmail("anithaeee224@gmail.com");
    setaddress("hyderabad");

  }, []);
  return (
    <>
      <Project1 name={name} age={age}/>
      <Project2 Email={Email} /> 
      <Project3 address={address}/>
      </> 
  );
}

export default App;
