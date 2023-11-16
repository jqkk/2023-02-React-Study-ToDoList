import { Flex } from "@kuma-ui/core";

import { Playground } from "~/components";

export const App = () => {
  return (
    <Flex minHeight="100vh" justifyContent="center" alignItems="center">
      <Playground />
    </Flex>
  );
};
