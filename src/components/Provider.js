import Context from "../context/Context";

class Provider extends Component{
    render(){
        return (<Context.Provider value={{symbol:'BTC'}}><b>hola</b></Context.Provider>);
    }
}

export default Provider