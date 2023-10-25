import { useState } from 'react';
import Login from './component/Login';
import Registration from './component/Registration';
import './App.css';

function App() {
  const[isLogin,setLogin] = useState(true);

const toggleform =()=>{
  setLogin(!isLogin);
}


  return (
    <>
  <div>{isLogin ? <Login></Login> : <Registration></Registration>}</div>
<p className='Pointer' onClick={toggleform}>
{isLogin ? 'New user? Register here.' : 'Already have an account? Login here.'}
</p>

    </>
  );
}

export default App;
