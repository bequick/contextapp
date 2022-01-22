import React, {useContext} from "react"
import Context from "../context/Context"

const Content = () => {
    const context = useContext(Context)
    console.log(context)
    return <b>{context.symbol}</b>
}

export default Content