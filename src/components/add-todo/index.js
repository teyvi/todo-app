import styles from "./index.module.css";
import { useState } from "react"

function AddTodo() {
    const [todo, setTodo] = useState("");

    const saveTodos = async() => {
        const response = await fetch('http://localhost:4000/todos', {
            method:'POST',
            body: JSON.stringify({
                title:todo
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        console.log(data)

        // //save all todos
        // setTodos([...todos, todo]);
        //wipe the input box
        setTodo("");
    }

    return (
        <section className={styles.addTodo}>
            <input
                value={todo}
                onKeyDown={event => event.key == 'Enter' && saveTodos()}
                onChange={event => setTodo(event.target.value)}
                className={styles.addTodoInput}
                placeholder="Start typing..." />
            <button
                className={`btn btn-success ${styles.btn}`}
                onClick={() => saveTodos()}
            >Create</button>
        </section>
    );
}

export default AddTodo;