import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState} from "react"

function AddTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);
    const[todo, setTodo] = useState("");

    return (
        <section className={styles.addTodo}>
            <input
                onChange={event => setTodo(event.target.value)}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button 
            className={`btn btn-success ${styles.btn}`}
            onClick={() => setTodos([...todos,todo])}
            >Create</button>
        </section>
    );
}

export default AddTodo;