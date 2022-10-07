import './App.css';
import Calendar from './components/Calendar';

function App() {
  const connect = ()=>{
    alert('connect');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar View</h1>
        <div id="slogan" >Schedule out your vacation!</div>
    
       <button onClick={connect}>Home Page</button>
      <Calendar></Calendar>
      </header>
    </div>
  );
}

export default App;