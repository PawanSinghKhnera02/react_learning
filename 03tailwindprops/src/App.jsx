import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "kirri",
    age: 20,
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1
        className="bg-green-400 text-black p-4 rounded-xl mb-4
     "
      >
        Tailwind Css
      </h1>
      <Card username= 'pawan' btntext ="see profile"/>

      <Card username ="kirri" />
    </>
  );
}

export default App;
