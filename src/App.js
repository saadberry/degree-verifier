import logo from './logo.svg';
import './App.css';
import * as IPFS from 'ipfs-core'


 function App() {

  async function test(){
    const ipfs = await IPFS.create()
    const { cid } = await ipfs.add('Hello world')
    console.info(cid)
   
  }
  test();
  return (

// QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
