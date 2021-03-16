import React from 'react';
import {Todo} from "../../App";

// @ts-ignore
export default function Form({setInputText, setTodos, inputText, setFilter}) {

    // Set the Input Text
    const inputTextHandler = (e: any) => {
        setInputText(e.target.value);
    }

    // Add a Todo to the Current Todo List.
    const submitTodoHandler = (e: any) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos((currentTodos: Todo[]) => {
                return [...currentTodos, {content: inputText, status: false, id: Math.random() * 1000}];
            })
            setInputText("")
        }
    }

    function updateFilterHandler(e: any) {
        setFilter(e.target.value)

    }

    return (
        <form>
            <input type="text" onChange={inputTextHandler} className="todo-input" value={inputText}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-circle"/>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={updateFilterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
