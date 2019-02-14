import React from 'react';


const ToDoList = (props) => {

    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (<li key={todo.title}>
                    <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
                    <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit' }}>{todo.title}</span>
                    <button onClick={() => props.removeTodo(index)}>Remove</button>
                </li>)
            })}
        </ul>

    )
}

export default ToDoList;

// Tästä olisi voinut tehdä supercomponentin, eli return jälkeinen <ul> -lista olis isketty omaksi komponentiksi, joka olisi kutsuttu tähän komponenttiin :)