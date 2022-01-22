import './App.css'
import Context from './context/Context'
import Content from './components/Content'

function App() {
  return (
    <Context.Provider value={{symbol:'ADA'}}>
    <div className="App">
      <header className="App-header">
        <Content/>
      </header>
    </div>
    </Context.Provider>
  );
}

export default App;
