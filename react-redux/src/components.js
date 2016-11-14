import React from "react";

class Todo extends React.Component {
    render() {
        let todo = this.props.todo;

        if(todo.isDone) {
            return (<strike>{todo.text}</strike>);
        } else {
            return (<span>{todo.text}</span>);
        }
    }
}
class TodoList extends React.Component {
    render() {
        let todoList = this.props.todoList;

        return (
            <div className="todo">
                <input type="text"/>
                <ul>
                    {
                        todoList.map(t=>(
                            <li key={t.id}>
                                <Todo todo={t}></Todo>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// export Todo;
export default TodoList;
