// lecture 18 lists and keys
// lecture 19 index as key anti pattern

import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["apple", "mango", "grapes", "apple"];

  const persons = [
    {
      id: 1,
      name: "krishna",
      age: 23,
      skill: "MERN",
    },
    {
      id: 2,
      name: "Shyam",
      age: 27,
      skill: "JAVA",
    },
    {
      id: 3,
      name: "kanha",
      age: 22,
      skill: "C++",
    },
  ];

  // const personList = persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));

  // A key is a special attribute you need to include when creating list of elements
  // keys give the elements a stable entity
  // keys help React identity which item have changed are added or removed
  // help in efficient update of the user interface

  // when to use index as key

  // the items in your list do not have a unique id
  // the list is static list and will not change
  // the list will never be reordered and filtered

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return <div>{nameList}</div>;
}

export default NameList;
