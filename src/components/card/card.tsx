import { Flex } from "@kuma-ui/core";

import { ColorType } from "~/types";

import { Button } from "../button";

interface CardProps {
  color?: ColorType;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const Card = ({
  color = "white",
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <Flex
      width="250px"
      height="250px"
      border="1px solid black"
      flexDirection="column-reverse"
      bgColor={`colors.${color}`}
      borderRadius="8px"
    >
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </Flex>
  );
};
