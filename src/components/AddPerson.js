import React, { useRef } from "react";
import { usePeopleStore } from "../Store";

const AddPerson = () => {
  const people = usePeopleStore((state) => state.people);
  const addPerson = usePeopleStore((state) => state.addPerson);
  const inputRef = useRef();
  const addPersonBtn = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = " ";
  };
  return (
    <div className="person__container">
      <h4>Add person</h4>
      <input type="text" name="person" ref={inputRef} />
      <button onClick={addPersonBtn}>Add Person</button>
      <ul>
        {people.map((person, index) => {
          return <li key={index}>{person}</li>;
        })}
      </ul>
    </div>
  );
};

export default AddPerson;
