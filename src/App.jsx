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

// import React, { useCallback } from 'react'
// import Count from './components/Count';
// import Button from './components/Button';
// import Title from './components/Title';
// import AppCoustom from './components/AppCoustom';

// const App = () => {

//   const [age, setAge, salary, setSalary] = AppCoustom();
//   // const [salary, setSalary] = useState(420);

//   const incrementAge = useCallback(() => setAge((prev) => prev + 1), []);

// // const incrementSalary = useCallback(() => {
// //   setSalary(salary + 100);
// // }, [salary]);
// const incrementSalary = useCallback(() => setSalary((prev) => prev + 100), []);
//   return (
//     <div>
//       <Title />
//       <Count text="age" count={age} />
//       <Count text="salary" count={salary} />
//       <Button onClick={incrementAge}>Increment age</Button>
//       <Button onClick={incrementSalary}>Increment salary</Button>
//       <AppCoustom />
//     </div>
//   );
// }

// export default App

//to do list:
// import React, {  useState } from "react";
// import CreateTodo from "./components/CreateTodo";
// import "./App.css";

// const initialTodos = [
//   { id: 1, title: "Learn React" },
//   { id: 2, title: "Build todos app" },
// ];

// // تحاكي API لإنشاء Todo
// const createTodo = (title) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: Date.now(), title, isPending: false });
//     }, 500);
//   });
// };

// const App = () => {

//   const [todos, setTodos] = useState(initialTodos);
// // const [optimisticToDo, setOptimisticToDo] = useOptimistic(todos);

//   // ✅ Handle add new todo
//   const handleAddTodo = async (newTodo) => {
//     setTodos((prev) => [...prev, newTodo]); // عرض المهمة مؤقتًا
//     const savedTodo = await createTodo(newTodo.title); // انتظار الرد من "السيرفر"
//     setTodos((prev) => // استبدال المؤقت بالحقيقي
//       prev.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
//     );
//   };
//   const handleDeleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };
//   const [editingId, setEditingId] = useState(null);
//   const [editingTitle, setEditingTitle] = useState("");

//   const startEdit = (todo) => {
//     setEditingId(todo.id);
//     setEditingTitle(todo.title);
//   };

//   const handleSaveEdit = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, title: editingTitle } : todo
//       )
//     );
//     setEditingId(null);
//     setEditingTitle("");
//   };

//   return (
//     <div className="container">
//       <h2>Todo List</h2>
//       <CreateTodo onAdd={handleAddTodo} />
//       {todos.map((todo) => (
//         <li key={todo.id} style={{ opacity: todo.isPending ? 0.5 : 1 }}>
//           {editingId === todo.id ? (
//             <>
//               <input
//                 type="text"
//                 value={editingTitle}
//                 onChange={(e) => setEditingTitle(e.target.value)}
//               />
//               <button onClick={() => handleSaveEdit(todo.id)}>💾</button>
//               <button onClick={() => setEditingId(null)}>❌</button>
//             </>
//           ) : (
//             <>
//               {todo.title}
//               <button onClick={() => startEdit(todo)}>✏️</button>
//               <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
//             </>
//           )}
//         </li>
//       ))}
//     </div>
//   );
// };

// export default App;

//used =>useOptimistic

// import React, { useState, useOptimistic } from "react";
// import CreateTodo from "./components/CreateTodo";

// // ✅ بيانات مبدئية
// const initialTodos = [
//   { id: 1, title: "Learn React" },
//   { id: 2, title: "Build todos app" },
// ];

// // ✅ محاكاة API لإنشاء مهمة جديدة
// const createTodo = ({ id, title, time }) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, title, time, isPending: false }); // استخدم نفس id
//     }, 5000);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState(initialTodos);

//   // ✅ استخدم useOptimistic للعرض الفوري
//   const [optimisticTodos, addOptimisticTodo] = useOptimistic(
//     todos,
//     (prevTodos, newTodo) => [...prevTodos, newTodo]
//   );

//   // ✅ عند الضغط على "إضافة"
//   const handleAddTodo = async (newTodo) => {
//     addOptimisticTodo(newTodo); // تظهر فورًا
//     const savedTodo = await createTodo(newTodo); // أرسل كامل الـ todo
//     setTodos((prev) =>
//       prev.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
//     );
//   };

//   return (
//     <div className="container">
//       <h2>Todo List</h2>
//       <CreateTodo onAdd={handleAddTodo} />
//       <ul>
//         {optimisticTodos.map((todo) => (
//           <li key={todo.id} style={{ opacity: todo.isPending ? 0.5 : 1 }}>
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import CreateTodo from "./components/CreateTodo";

// const initialTodos = [
//   { id: 1, title: "Learn React" },
//   { id: 2, title: "Build todos app" },
// ];

// // محاكاة API
// const createTodo = (title) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: Date.now(), title, isPending: false });
//     }, 500);
//   });
// };

// const App = () => {
//   const [todos, setTodos] = useState(initialTodos);
//   const listRef = useRef(null); // 🔁 هذا مرجع <ul>

//   // ✅ دالة الإضافة
//   const handleAddTodo = async (newTodo) => {
//     setTodos((prev) => [...prev, newTodo]);
//     const savedTodo = await createTodo(newTodo.title);
//     setTodos((prev) =>
//       prev.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
//     );
//   };

//   // ✅ تشغيل GSAP عند تحديث القائمة
//   useEffect(() => {
//     const listItems = listRef.current?.children;
//     if (listItems && listItems.length > 0) {
//       const lastItem = listItems[listItems.length - 1];
//       gsap.from(lastItem, {
//         y: 20,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       });
//     }
//   }, [todos]);

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>📝 Todo List</h2>
//       <CreateTodo onAdd={handleAddTodo} />
//       <ul ref={listRef}>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               opacity: todo.isPending ? 0.5 : 1,
//               padding: "8px 0",
//               fontSize: "18px",
//               transition: "all 0.3s ease",
//             }}
//           >
//             {todo.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  // ✅ أضف أو غيّر اتجاه الصفحة بناءً على اللغة
  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
    </div>
  );
};

export default App;
