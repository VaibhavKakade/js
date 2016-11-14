const bootStrapList = [];

export default function(todoList = bootStrapList, actions) {
    let defaultValue = todoList;
    switch (actions.type) {
    case "ADD_TODO":
        todoList.push(actions.data);
        break;
    case "TOGGLE_TODO":
        defaultValue = todoList.map((t) => {
            if (t.id === actions) {
                t.isDone = true;
            }
            return t;
        });
        break;
    }

    return defaultValue;
}
