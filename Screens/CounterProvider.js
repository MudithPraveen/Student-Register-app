import { createContext, useState } from 'react';

export const CounterContext = createContext();

export function CounterProvider({ children }){

  const [students, setStudents] = useState([]);
  const [users,setUsers] = useState([]);

  function addStudent(rgno,name ){
    setStudents((prevStudents) => [...prevStudents,{rgno,name}]);
  }

  function addUsers(un,email,pw){
    setUsers((prevUser) => [...prevUser,{un,email,pw}]);
  }

  return (
    <CounterContext.Provider value={{ students, addStudent ,users , addUsers }}>
      {children}
    </CounterContext.Provider>
  );
}

