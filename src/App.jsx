
import './App.css';
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="App">
      <input type="email" placeholder='E-Mail:'value={email}/>
      <input type="password" placeholder='password:' value={password} />
  
    </div>
  );
}

export default App;
