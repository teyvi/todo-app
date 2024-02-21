import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react"

function AddTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);
    const [todo, setTodo] = useState("");

    const saveTodos = () => {
        //save all todos
        setTodos([...todos, todo]);
        //wipe the input box
        setTodo("");
    }

    return (
        <section className={styles.addTodo}>
            <input
                value={todo}
                onKeyDown={event => event.key == 'Enter' && saveTodos([...todos, todo])}
                onChange={event => setTodo(event.target.value)}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button
                className={`btn btn-success ${styles.btn}`}
                onClick={() => saveTodos([...todos, todo])}
            >Create</button>
        </section>
    );
}

export default AddTodo;