import React from 'react'
import './App.css';
function MyButton({ title, disabled }: { title: string, disabled : boolean }) {
  return (
    <button>{title}</button>
  );
}
function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a not button" disabled={true}/>
    </div>
  );
}

export default App;
