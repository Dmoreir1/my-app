import './App.css';
import { Message } from './Message';
import { Clicker } from './Clicker'

function App() {
  return (
    <div className="App">
       <Message> </Message>
       <Clicker> </Clicker>
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