import React, { useState } from "react";

const Calculator = () => {
  const [Current, setCurrent] = useState('');
  const [Previous, setPrevious] = useState('')
  const appendValueHandler = (val)=>{
    setCurrent((prev)=> prev + `${val}`)
  }
  const AChandler = () =>{
    setCurrent('');
    setPrevious('');
  }
  const appendOperationHandler = (val)=>{
    const lastChar = Current[Current.length-1]; 
    if(lastChar=== undefined||lastChar==='+'||lastChar==='-'||lastChar==='/'||lastChar==='*')
    return
    setCurrent((prev)=> prev + `${val}`)
  }
  const equalsHandler = ()=>{
    const lastChar = Current[Current.length-1];
    if(lastChar===undefined||lastChar==='+'||lastChar==='-'||lastChar==='/'||lastChar==='*')
    return
    let result = eval(Current)+''
    if(result.length>7){
      result=result.slice(0,7);
    }
    setPrevious(Current)
    setCurrent(result)
  }
  const delHandler = ()=>{
    setCurrent(prev=>prev.slice(0,prev.length-1));
  }
  const previousHandler=()=>{
    setCurrent(Previous);
    setPrevious('')
  }
  return (
    <div className="flex justify-center align-center">
      <div className="Container" >
        <div className="Screen">
          <p className="Previous" onClick={previousHandler}>{Previous}</p>
          <p className="Current">{Current}</p>
        </div>
        <button className="gridSpan" onClick={AChandler}>AC</button>
        <button onClick={delHandler}>DEL</button>
        <button onClick={()=>appendOperationHandler('/')}className="operation">÷</button>
        <button onClick={()=>appendValueHandler(7)}>7</button>
        <button onClick={()=>appendValueHandler(8)}>8</button>
        <button onClick={()=>appendValueHandler(9)}>9</button>
        <button onClick={()=>appendOperationHandler('*')} className="operation" >x</button>
        <button onClick={()=>appendValueHandler(4)}>4</button>
        <button onClick={()=>appendValueHandler(5)}>5</button>
        <button onClick={()=>appendValueHandler(6)}>6</button>
        <button onClick={()=>appendOperationHandler('+')}className="operation">+</button>
        <button onClick={()=>appendValueHandler(1)}>1</button>
        <button onClick={()=>appendValueHandler(2)}>2</button>
        <button onClick={()=>appendValueHandler(3)}>3</button>
        <button onClick={()=>appendOperationHandler('-')}className="operation">-</button>
        <button onClick={()=>appendValueHandler('.')}className="rounded-bl-[10px]">.</button>
        <button onClick={()=>appendValueHandler(0)}>0</button>
        <button className="gridSpan equals" onClick={equalsHandler}>=</button>
      </div>
    </div>
  );
};


export default Calculator;
