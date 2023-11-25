import { useState } from "react";

import { Box, Button, Flex, Input } from "@kuma-ui/core";

import { ToDoItem } from "./components/todo-item";

let id = 3;

export const App = () => {
  const [todos, setTodos] = useState<
    {
      id: number;
      text: string;
      isDone: boolean;
    }[]
  >([
    {
      id: 1,
      text: "밥먹기",
      isDone: false,
    },
    {
      id: 2,
      text: "공부하기",
      isDone: false,
    },
    {
      id: 3,
      text: "잠자기",
      isDone: false,
    },
  ]);
  const [input, setInput] = useState("");

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

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Flex flexDirection="column" gap="32px">
      <Box>
        {todos.map((todo) => (
          <ToDoItem
            id={todo.id}
            isDone={todo.isDone}
            text={todo.text}
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </Box>
      <Flex gap="16px">
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={handleChangeInput}
        />
        <Button
          onClick={() => {
            addTodo(input);
            setInput("");
          }}
        >
          Add
        </Button>
      </Flex>
    </Flex>
  );
};
