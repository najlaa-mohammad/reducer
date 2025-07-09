import React, { useState } from "react";

const useInput = (initialValue) => {
  const [user, setUser] = useState(initialValue);
  const reset = () => {
    setUser(initialValue);
  };
  const attributs = {
    type: "text",
    value: user,
    onChange: (e) => setUser(e.target.value),
    
  };

  return [user, attributs, reset];
};

export default useInput;
