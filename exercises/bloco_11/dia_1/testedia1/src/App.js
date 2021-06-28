import './App.css';

function App() {
  const hallo = <h1 className='hallo'>'Hallo Welt!'</h1>
  const hello = 'Hello World!'
  return (
    <div>
      <h1 className='App'>Hello!!!</h1>
      <p>It is me</p>
      <p>{2 + 2}</p>
      <h2>{hello}</h2>
      {hallo}
    </div>
  );
}

export default App;
