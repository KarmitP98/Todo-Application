import React from "react";
import {Todo} from "../../../App";

// @ts-ignore
export default function Item({todo, setTodos}) {

    const deleteTodoHandler = () => {
        setTodos((currentTodos: Todo[]) => {
            return currentTodos.filter(value => value.id !== todo.id);
        })
    }

    const completeTodoHandler = () => {
        todo.status = !todo.status
        setTodos((currentTodos: Todo[]) => {
            return currentTodos.map(value => value.id === todo.id ? todo : value);
        })

    }

    return (
        <>
            <div className={`todo ${todo.status ? "completed" : ""}`}>
                <li className="todo-item">{todo.content}</li>
                <button className="complete-btn" onClick={completeTodoHandler}><i className="fas fa-check"/></button>
                <button className="trash-btn" onClick={deleteTodoHandler}><i className="fas fa-trash"/></button>
            </div>
        </>
    )
}
