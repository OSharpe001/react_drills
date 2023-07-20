import React from 'react'

export default function Arrays() {
    const dogs = [
        { name: "Sparky", age: 5 },
        { name: "Spot", age: 5 },
        { name: "Ralph", age: 5 },
        { name: "Fido", age: 5 },
      ];

      const dogJSX = dogs.map(dog =>{
        return (
            <div>
              <h1>{dog.name}</h1>
              <h2>{dog.age}</h2>
            </div>
          );
        });

  return (
    <div>
        {dogJSX}
    </div>
  );
};

