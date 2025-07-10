// import { useMemo, useState } from "react";


// function App() {
  
//   const [count, setCount] = useState(0);
//   const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  
//   const calculateSum = (nums) => {
//     console.log('calculating sum');
//     return nums.reduce((acc, current) => acc + current, 0);
//   };

//   const sum = useMemo(() => {
//     return calculateSum(numbers);
//   }, [numbers]);

//   return (
//     <div>
//       <p>Sum of numbers: {sum}</p>

//       <button onClick={() => setCount(count + 1)}>Increment ({count})</button>

//       <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
//         Add number to array
//       </button>

  
//     </div>
//   );
// }

// export default App;


import React, { useCallback } from 'react'
import Count from './components/Count';
import Button from './components/Button';
import Title from './components/Title';
import AppCoustom from './components/AppCoustom';

const App = () => {
  
  const [age, setAge, salary, setSalary] = AppCoustom();
  // const [salary, setSalary] = useState(420);
  
  const incrementAge = useCallback(() => setAge((prev) => prev + 1), []);

// const incrementSalary = useCallback(() => {
//   setSalary(salary + 100);
// }, [salary]);
const incrementSalary = useCallback(() => setSalary((prev) => prev + 100), []);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Count text="salary" count={salary} />
      <Button onClick={incrementAge}>Increment age</Button>
      <Button onClick={incrementSalary}>Increment salary</Button>
      <AppCoustom />
    </div>
  );
}

export default App

// const initialTodos=
// [
// {  id :1 ,title:'learn react'},
// {  id :2 ,title:'Build todos app'},

// ]
// import React, { useRef, useState } from 'react'

// const App = () => {
//   const[todos,setTodos]=useState(initialTodos)
//   const inputRef=useRef(null)

//   async function onSubmit(e){
//     e.preventDefault()
//     if (inputRef===null)
//       return
//     const newTodo = await createTodo(inputRef.current.value);
//     setTodos((prev)=>[...prev,newTodo])
//   }

//   return (
//     <div>
//       <h1>Todo list</h1>
//       <form onSubmit={onSubmit}>
//         <input type="text" ref={inputRef} placeholder="add new todo"></input>
//         <button type="submit">add to do</button>
//       </form>
//       <ul>{todos.map((todo=>
//         <li
//   key={todo.id}
//   style={

//     {opacity:todo.isPending?'0.5' :undefined,}
//   }

  
//         >
// {todo.title}
//         </li>
//         ))}
//       </ul>
//       <CreateTodo/>
//     </div>
//   );
// }

// export default App
