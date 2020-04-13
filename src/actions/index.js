export const ACTIONS = {
    ADD_TODO: 'ADD_TODO'
}

export const addTodo = (item) => ({
    type: ACTIONS.ADD_TODO,
    item
});