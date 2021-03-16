import React from 'react';
import {Todo} from "../../App";
import Item from "./Item/Item";

// @ts-ignore
export default function List({todos, setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo: Todo) => {
                    return (<Item key={todo.id} todo={todo} setTodos={setTodos}/>)
                })}
            </ul>
        </div>
    );
}
