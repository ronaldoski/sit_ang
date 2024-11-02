import React from 'react';

import Home from "./composant/Home";
function App() {

  const Handleclick =(index:number) =>{

    console.log(index);
  }
  return (
    <div className="App">
      <header>
      </header>
<nav>


<Home nom= {["yooooo","yo"]} onClick={Handleclick}/>


</nav>

    </div>
  );
}

export default App;
