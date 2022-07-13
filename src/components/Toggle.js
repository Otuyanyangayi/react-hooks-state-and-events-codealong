import React, {useState} from "react";

function Toggle() {
  const [isOn, sateIsOn] = useState(false)

  function handleClick(){
    sateIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white"

  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
