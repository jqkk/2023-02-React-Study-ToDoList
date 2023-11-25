import { useState } from "react";

let id = 3;

export const useTodo = (
  initialState: {
    id: number;
    text: string;
    isDone: boolean;
  }[]
) => {
  const [todos, setTodos] = useState<
    {
      id: number;
      text: string;
      isDone: boolean;
    }[]
  >(initialState);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text,
          };
        }
        return todo;
      })
    );
  };

  const addTodo = (text: string) => {
    id += 1;
    setTodos([
      ...todos,
      {
        id,
        text,
        isDone: false,
      },
    ]);
  };

  return {
    todos,
    toggleTodo,
    removeTodo,
    editTodo,
    addTodo,
  };
};
