import React, {useEffect, useState} from 'react';
import './App.css';
// Importing Components
import Form from "./components/form/Form";
import List from "./components/list/List";

export class Todo {
    id: number = 0;
    content: string = '';
    status: boolean = false;
}

function App() {
    // State to hold all the todos created
    const [todos, setTodos] = useState([]);
    // State to hold the input text
    const [inputText, setInputText] = useState("");
    // State to hold the filter value
    const [filter, setFilter] = useState("all")
    // State to hold the filtered todos
    const [filteredTodos, setFilteredTodos] = useState([])

    // This always comes first.
    // This method is run only once when the page is loaded.
    useEffect(() => {
        loadFromLocalStorage()
    }, [])

    // Very Powerful command!!!
    // Any update to either the 'todos' or 'filter' this method will run...
    useEffect(() => {
        updateFilterHandler()
        saveLocalTodos()
    }, [filter, todos]);


    const updateFilterHandler = () => {
        switch (filter) {
            case "completed":
                setFilteredTodos(todos.filter((value: Todo) => value.status))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((value: Todo) => !value.status))
                break;
            default:
                setFilteredTodos(todos)
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    function loadFromLocalStorage() {
        setTodos(JSON.parse(localStorage.getItem('todos') as string))
    }

    return (
        <div>
            <header>
                <h1>Karmit's Todo List</h1>
            </header>
            <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} setFilter={setFilter}/>
            <List todos={filteredTodos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
