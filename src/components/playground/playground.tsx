import { Box } from "@kuma-ui/core";

import { Card } from "../card";

export const Playground = () => {
  return (
    <Box position="relative" width="800px" height="800px">
      <Box position="absolute" top="0" left="0">
        <Card />
      </Box>
      <Box position="absolute" top="0" right="0">
        <Card />
      </Box>
      <Box position="absolute" bottom="0" right="0">
        <Card />
      </Box>
      <Box position="absolute" bottom="0" left="0">
        <Card />
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Card />
      </Box>
    </Box>
  );
};
