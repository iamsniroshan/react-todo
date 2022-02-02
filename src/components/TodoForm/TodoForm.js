import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();

        const today = new Date();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            currentDateTime: dateFormatter(today)

        });

        console.log(input);

        setInput('');

    };

    const dateFormatter = (today) => {
        return today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate() +
            " " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                        id="button-id"
                    />
                    <button onClick={handleSubmit} className="todo-button tb-update">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                        id="new-item"
                    />
                    <button onClick={handleSubmit} className="todo-button tb-add">Add todo</button>
                </>
            )}
        </form >
    )
}

export default TodoForm;
