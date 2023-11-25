import { ToDoItem } from "./todo-item";
import { Flex, Box, Input, Button } from "@kuma-ui/core";
import { useState } from "react";
export const App = () => {
  const arr = ["Lean React", "Learn TypeScript", "Learn AI"];
  const [todos, setTodos] = useState<{
    id: number;
    text: string;
    isDone: boolean;
  }[]
  >([
    {
      id: 1,
      text: "밥먹기",
      isDone: false
    }
  ]);
  let id = 3;

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

  const addTodo = (text: string) => {
    id += 1;
    setTodos([
      ...todos,
      {
        id,
        text,
        isDone: false,
      }
    ])
  };


  return (
    <>
      <Flex flexDirection="column" gap="32px">
        <Box>
          {todos.map((todo) => (
            <ToDoItem 
            id={todo.id}
            isDone={todo.isDone}
            text={todo.text}
            key={todo.id} />
          ))}
        </Box>
        <Flex gap="16px">
          <Input placeholder="Add a new task" />
          <Button>Add</Button>
        </Flex>
      </Flex>
    </>
  );
}
