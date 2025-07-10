import React, { useState } from "react";

const AppCoustom = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(420);

  return [age, setAge, salary, setSalary];
};

export default AppCoustom;
