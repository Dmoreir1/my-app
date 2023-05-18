import './App.css';
import { useState } from 'react';
import { Message } from './Message';
import { Clicker } from './Clicker';
import { Reset } from './Reset';

function App() {
  let [counter, setCounter] = useState(0)
  console.log(typeof(counter))

  const onHandleClick = (selection) => {
    if (selection === 'He said Yes!!!') {
      setCounter(++counter)
    } else if (selection === 'He said No!!') {
      setCounter(--counter);
    }
    else {
      setCounter(counter=0);
    }
  }
    //console.log(selection)
  return (
    <div className="App">
       <Message text = ""/>
       <Clicker onClicked={onHandleClick} />
       Counter: {counter}
       <Reset onClicked={onHandleClick}></Reset>
    </div>
  );
}

// function App() {
//   const handleClick = (direction) => {
//     console.log(direction)
//   }
//   return (
//     <div className="App">
//       <Message text = "Hey Hey wurld"/>
//       <Clicker onClicked={handleClick}/>
//     </div>
//   );
// }

export default App;