import React from 'react';
import "./index.css";


function App() {
  let curDate=new Date();
//new Date(2020,5,5,19) testing
let curHours=curDate.getHours();
let greeting = "";
const myStyle={

};

if(curHours >= 1 && curHours <12){
    greeting='Good Morning';
    myStyle.color="green";
}
else if (curHours >=12 && curHours <16){
    greeting='Good Afternoon';
    myStyle.color="Orange";
}
else
{
    greeting='Good Night';
    myStyle.color="Black";

    
}
  return (
   <>
    <div>
     <h1> 
HELLO ,<span style={myStyle} > {greeting} </span>
         </h1>
</div>
</>
    
  );
}

export default App;
