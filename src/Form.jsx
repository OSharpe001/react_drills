import React from 'react';
import { useState } from "react";

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        age: 0
    });

    const handleChange = (e) => {
        setForm({
            ...form,
           [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("This is the info that was just submitted", form);
    };

  return (
    <div>
        <form action="">
            <label style={{display: "block", margin: "20px auto 10px"}} htmlFor="form-name">Please Enter Your Name</label>
            <input
                id="form-name"
                type="text"
                value={form.name}
                name="name"
                placeholder="enter name"
                onChange={handleChange}
            />
            <label style={{display: "block", margin: "20px auto 10px"}} htmlFor="form-age">Please Enter Your Age</label>
            <input
                id="form-age"
                type="number"
                value={form.age}
                name="age"
                placeholder="enter age"
                onChange={handleChange}
            />
            <button onClick={handleSubmit} type="submit">Submit Form</button>
        </form>
    </div>
  );
};