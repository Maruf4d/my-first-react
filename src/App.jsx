import './App.css'
import Count from './Count';
import Friends from './Friends';

function App() {
 function handleClick(){
  alert(`ami tumi`);
 }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click</button>
      <Friends></Friends>
      <Count></Count>
    </>
  )
}

export default App
