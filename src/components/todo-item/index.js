
    function TodoItem({index, todo}){
        

            return (
                <li className="list-group-item">
                     <input 
                        className="form-check-input me-1"
                        type="checkbox" 
                        id={index}/>
                    <label 
                    className="form-check-label" 
                    htmlFor={index}
                    >{todo}</label>
                    <button className="btn btn-danger"
                    >

                        Delete
                    </button>
                </li>
            );

}
    

export default TodoItem