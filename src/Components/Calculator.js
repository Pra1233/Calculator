import React, {  useEffect, useState } from 'react';
import classes from './Calculator.module.css';

const Calculator = () => {

  const [toggle,setToggle]=useState(false);
 const [ans,setAns]=useState(0);
 const [fno,setFno]=useState(0);
  const [sno,setSno]=useState(0);
 const [operator,setOperator]=useState('');
 const [str,setStr]=useState('');


  const handleClick=(e)=>{
      let str=e.target.value;
    if(!isNaN(str)){ //number
      let no=Number(str);
      if(operator===''){
      setFno(fno*10+no);
      setStr(prev=>prev+str); 
      }
      else{
         setSno(sno*10+no);
        setStr(prev=>prev+str); 
      }       
    }

  else { //operator
     setOperator(str);
    setStr(prev=>prev+str); 
    // console.log(str); 
  }
  
  }

useEffect(()=>{
  console.log(fno,sno,operator);
},[fno,sno,operator])


const handleCalculate=()=>{
  setToggle(prev=>!prev);
if(operator==='*'){
  setAns(fno*sno);
}
else if(operator==="-"){
  setAns(fno-sno);
}
else if(operator==="/"){
     setAns(fno/sno);
}
else if(operator==="+"){
  setAns(fno+sno);
}

setFno(0);
setSno(0);
setOperator("");
setStr("");


}

const handleClear=()=>{
 setToggle(false);
 setAns(0);
 setFno(0);
 setSno(0);
 setOperator("");
 setStr("");
}



  return (
     <div className={classes.main}>
    <div className={classes.container}>

  <h2 className={classes.screen}>{toggle?ans:str}</h2>
  
    <div className={classes.buttons}>
      <button onClick={handleClear}>Clear</button>
        <button value="*" onClick={handleClick}>*</button>
        <button value="/" onClick={handleClick}>/</button>
       <button onClick={handleClick} value="-" >-</button> 
        <button onClick={handleClick} value="+">+</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5"  onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
       <button onClick={handleClick} value="1" >1</button>
        <button onClick={handleClick} value="2" >2</button>
        <button onClick={handleClick} value="3" >3</button>      
        <button onClick={handleClick} value="00" >00</button> 
        <button onClick={handleClick} value="0">0</button> 
       <button onClick={handleCalculate} value="=">=</button> 
    </div> 
   

    </div>
     </div>



  )
}

export default Calculator;
