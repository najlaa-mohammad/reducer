import { useState } from "react";

const initialValue = { FirstName: "", LastName: "", age: 1 };

export const useForm = () => {
  const [user, setUser] = useState(initialValue);

  const reset = () => {
    setUser(initialValue);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!user.FirstName && !user.LastName) {
      // return user.LastName;
      console.log("cccc");
      alert(`FirstName  and LastName is empty`);
    } else {
      reset();
      alert(`hello  ${user.FirstName} ${user.LastName}, my age is ${user.age}`);
    }
  };

  return [handelSubmit, user, setUser];
};

export default useForm;
