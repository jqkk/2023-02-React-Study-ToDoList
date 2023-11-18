/* eslint-disable react/display-name */
import React, { useCallback, useState } from "react";

import { Box } from "@kuma-ui/core";

import { ColorType } from "~/types";

import { Card } from "../card";

type InsetsType = [string, string, string, string];

const sideBoxInsets: [InsetsType, InsetsType, InsetsType, InsetsType] = [
  ["0", "0", "auto", "auto"],
  ["auto", "auto", "0", "0"],
  ["0", "auto", "0", "auto"],
  ["auto", "0", "auto", "0"],
];

export const Playground = () => {
  const [colors, setColors] = useState<
    [
      Exclude<ColorType, "white">,
      Exclude<ColorType, "white">,
      Exclude<ColorType, "white">,
      Exclude<ColorType, "white">
    ]
  >(["red", "blue", "green", "yellow"]);
  const [selectedColor, setSelectedColor] = useState<ColorType>("white");

  const handleSaveClick = useCallback((color: Exclude<ColorType, "white">) => {
    setSelectedColor(color);
  }, []);

  const handleRotateClick = useCallback(() => {
    setColors(([first, ...rest]) => [...rest, first]);
    // // first : red
    // // rest : [blue, green, yellow]
    // // [...rest,first] => [blue, green, yellow, red]
    // const changedColors = [...colors];

    // const firstColor = changedColors.shift();
    // if (!firstColor) return;
    // changedColors.push(firstColor);
    // setColors(changedColors);
  }, []);

  return (
    <Box position="relative" width="800px" height="800px">
      {colors.map((color, index) => (
        <SideBox
          key={color}
          color={color}
          onButtonClick={handleSaveClick}
          inset={sideBoxInsets[index]}
        />
      ))}
      <Result color={selectedColor} onButtonClick={handleRotateClick} />
    </Box>
  );
};

interface ResultProps {
  color?: ColorType;
  onButtonClick?: () => void;
}

const Result = React.memo(({ color, onButtonClick }: ResultProps) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Card
        buttonText="순서바꾸기"
        color={color}
        onButtonClick={onButtonClick}
      />
    </Box>
  );
});

interface SideBoxProps {
  color: Exclude<ColorType, "white">;
  onButtonClick?: (color: Exclude<ColorType, "white">) => void;
  inset: InsetsType;
}

const SideBox = React.memo(
  ({
    color,
    onButtonClick,
    inset = ["auto", "auto", "auto", "auto"],
  }: SideBoxProps) => {
    // NOTE: React.memo는 props가 바뀌지 않으면 메모리제이션한다(해당 컴포넌트의 리렌더링을 일으키지 않는다).
    return (
      <Box
        position="absolute"
        top={inset[0]}
        left={inset[1]}
        right={inset[2]}
        bottom={inset[3]}
      >
        <Card
          color={color}
          buttonText="저장"
          onButtonClick={() => onButtonClick && onButtonClick(color)}
        />
      </Box>
    );
  }
);
