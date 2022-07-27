import logo from './logo.svg';
import './App.css';
import List from "./components/list"
import { useState,useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('https://btcqpan7rg.execute-api.ap-northeast-1.amazonaws.com/dev/translate')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  return (
    <div className="App">
      <List msg="hello"/>
      <p>{message}</p>
    </div>
  );
}

export default App;
