import React, { useState } from "react";

const useAppData = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(420);

  return [age, setAge, salary, setSalary];
};

export default useAppData;
