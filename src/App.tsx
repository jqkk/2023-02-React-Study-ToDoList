import { useState } from "react";

import { Box, Button, Flex, Input } from "@kuma-ui/core";

import { ToDoItem } from "./components/todo-item";
import { useTodo } from "./hooks/useTodo";

export const App = () => {
  const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodo([
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
