import { useState } from "react";

import { Button, Flex, Input, Text } from "@kuma-ui/core";

interface TodoItemProps {
  id: number;
  text: string;
  isDone: boolean;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

export const ToDoItem = ({
  id,
  text,
  isDone,
  toggleTodo,
  removeTodo,
  editTodo,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  // 기본 모드, 수정 모드
  // 기본 모드 -> 텍스트 + 버튼 3개
  // 수정 모드 -> 인풋 + 버튼 2개

  const [input, setInput] = useState("");
  // 수정 모드에서 사용할 인풋

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Flex gap="16px">
      {isEditing ? (
        <Input value={input} onChange={handleChangeInput} />
      ) : (
        <Text marginY={0} textDecoration={isDone ? "line-through" : "initial"}>
          {text}
        </Text>
      )}
      <Flex gap="8px">
        {isEditing ? (
          <>
            <Button
              onClick={() => {
                setIsEditing(false);
                editTodo(id, input);
              }}
            >
              완료
            </Button>
            <Button
              onClick={() => {
                setInput(""); // 인풋 초기화
                setIsEditing(false); // 기본 모드로 돌아감
              }}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setInput(text);
                setIsEditing(true);
              }}
            >
              수정
            </Button>
            <Button
              onClick={() => {
                toggleTodo(id);
              }}
            >
              {isDone ? "수행 완료 취소" : "수행 완료"}
            </Button>
            <Button
              onClick={() => {
                removeTodo(id);
              }}
            >
              삭제
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
