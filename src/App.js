
import { useEffect, useState } from 'react';
import './App.css';
import Project1 from './project1/Project1.js';
import Project2 from './project1/Project2';
function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [Email, setEmail] =useState("");

  useEffect(() => {
    setname("anitha");
    setage("26");
    setEmail("anithaeee224@gmail.com");

  }, []);
  return (
    <>
      <Project1 name={name} age={age}/>
      <Project2 Email={Email} /> 
      </> 
  );
}

export default App;
