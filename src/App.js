import {useState, useEffect} from 'react';
import './App.css';


function App() {

  let [inputNumber, setInputNumber] = useState(1);
  let [answer, setAnswer] = useState(1);
  let [userInput, setUserInput] = useState("");
  let [mood, setMood] =useState("sad");

  useEffect(() => {
    console.log("Hello!");

    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber)
    }
  }, [inputNumber])



  const handleInc = () => {
    setInputNumber(inputNumber + 1);
  }

  const handleUserInput = () => {
    if (userInput == answer) {
      console.log("yes") 
    } else {
      console.log("no")
    }
  }

  const handleMood = () => {
    if (mood == "happy") {
      setMood("sad")
    } else {
      setMood("happy");
    }
  }


  return (
    <>
    <button value = {inputNumber} onClick = {handleInc}>+</button>
    <h2>{inputNumber}</h2>
    <form action="">
    <input type="text" value = {userInput} placeholder = {inputNumber} onChange = {handleUserInput}/>
    </form>
    <br/>
    <button value = {mood} onClick = {handleMood}>Click here to change mood</button>
    <h2>What is your mood: {mood}</h2>

    </>
  );
}

export default App;
