import React from "react";
import Login from "./Login"
import Register from "./Register";


const userIsRegisterd =false;



function App() {
  return (
    <div className="container">
   {userIsRegisterd=== false? <Register/> :<Login/>}
    </div>
  );
}

export default App;
