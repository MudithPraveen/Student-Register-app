import { createContext, useState } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (rgno,name ) => {
    setStudents((prevStudents) => [...prevStudents,{rgno,name}]);
  };

  return (
    <CounterContext.Provider value={{ students, addStudent }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider };
