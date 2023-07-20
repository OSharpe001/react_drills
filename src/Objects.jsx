import React from 'react'

export default function Objects() {

    const zuko = {
        firstName: "Zuko",
        age: 3,
        email: "abc@123.com"
    };

    return Object.keys(zuko).map((key, index) => {
        return (
            <h2>
                {key}: {zuko[key]}
            </h2>
          );
    });
};
