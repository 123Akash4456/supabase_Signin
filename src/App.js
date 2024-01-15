import React from 'react';
import  Signin from './Signin';
//import  Signup from'./Signup'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import  './index.css'

function App() {
 // const [token, setToken] = useState(false)

  // if(token){
  //   sessionStorage.setItem('token',JSON.stringify(token))
  // }

  // useEffect(() => {
  //   if(sessionStorage.getItem('token')){
  //     let data = JSON.parse(sessionStorage.getItem('token'))
  //     setToken(data)
  //   }
    
  // }, [])
  

 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path={'/signup'} element={ <Signup />} /> */}
        <Route path={'/'} element={ <Signin/>} />
       

      </Routes>

      </BrowserRouter>
      
     
      
    </div>
  )
}
export default App;
