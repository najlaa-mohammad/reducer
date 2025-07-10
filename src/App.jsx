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
import React, { useCallback, useState } from 'react'
import Count from './components/Count';
import Button from './components/Button';
import Title from './components/Title';

const App = () => {
  const[age,setAge]=useState(22)
  const [salary, setSalary] = useState(420);
  
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

    </div>
  );
}

export default App
