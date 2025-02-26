import { useState } from 'react' //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [value, setvalue] = useState(10);

let addvalue = () =>{
  setvalue(value+1);
  if(value == 20){
    setvalue(value = 20);
    alert("above 20 isnt allowed");
  }
  console.log("clicked", value)
}

let decvalue = () => {
  setvalue(value-1);

  if (value == 0) {
    // value = 0;
    alert('negative isnt allowed');
    setvalue(value = 0);
  }
  console.log("clicked", value);
}

  return (
    <>
        <h1>Hello pawan</h1>
        <h2>counter value: {value}</h2>
        <button onClick={addvalue} >Add value {value}</button>
        <br /> <br />
        <button onClick={decvalue}>Dec value {value}</button>
        <p>footer: {value}</p>
    </>
  )

}
export default App
