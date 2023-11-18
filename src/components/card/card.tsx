import { Flex } from "@kuma-ui/core";

import { Button } from "../button";

export const Card = () => {
  return (
    <Flex
      width="250px"
      height="250px"
      border="1px solid black"
      flexDirection="column-reverse"
      bgColor="white"
      borderRadius="8px"
    >
      <Button>클릭</Button>
    </Flex>
  );
};
