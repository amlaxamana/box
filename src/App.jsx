import React from 'react';
import './App.css'; 

// Child Components
function Header(props) {
  return (
    <header className="header-container">
      <h1>{props.Surname}</h1>
    </header>
  );
}

function Box(props) {
  
  return (
    <div className="box-container">
      {props.subjectCode}
    </div>
  );
}

// PARENT 
export default function App() {
  const info = {
    Surname: "Laxamana",
    courseCode: "CPEITEL"
  };

  return (
    <div className="App">
      <Header Surname={info.Surname} />
      <Box subjectCode={info.courseCode} />
    </div>
  );
}
