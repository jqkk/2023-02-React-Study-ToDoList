import { Flex, Text, Button, Input } from "@kuma-ui/core";
import { useState } from "react";

interface TodoItemProps {
   id: number;
   text: string;
   isDone: boolean; 
}

export const ToDoItem = ({text, isDone}: TodoItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    // 기본, 수정 모드
    // 기본 -> 텍스트 + 버튼 3개
    // 수정 -> 인풋 + 버튼 2개
    // 할일 텍스트
    // 
    const [input, setInput] = useState("");
    // input에 담기는 값

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
                        <Button>
                            {isDone ? "수행 완료 취소" : "수행 완료"}
                        </Button>
                        <Button>삭제</Button>
                    </>
                )}
            </Flex>
        </Flex>
    );
};