import React, {useState} from "react";
import Context from "../context/Context";

const Provider = () => {

    const[value, setValue] = useState("")

    const changeValue=(event)=>{
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return <input type="text" name="txtSymbol" id="txtSymbol" placeholder="BTC" onChange={changeValue} />

}
export default Provider