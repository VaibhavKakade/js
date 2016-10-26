const uid = () => Math.random().toString(32).slice(2);

export function addTodo(text) {
    return {
        type: "ADD_TODO",
        data: {
            id: uid(),
            isDone: false,
            text: text
        }
    };
}

export function toggleTodo(id) {
    return {
        type: "TOGGLE_TODO",
        data: {
            id: id
        }
    };
}
