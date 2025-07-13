import React, { useRef } from "react";

const CreateTodo = ({ onAdd }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current?.value.trim();
    if (!title) return;

    const newTodo = {
      id: Date.now(),
      title,
      isPending: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    onAdd(newTodo); // نرسل المهمة إلى الأب
    inputRef.current.value = ""; // نفرغ الحقل
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Add new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
