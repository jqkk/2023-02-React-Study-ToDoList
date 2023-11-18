import { Button as KumaButton } from "@kuma-ui/core";

export const Button = (
  props: React.ComponentPropsWithRef<typeof KumaButton>
) => {
  return (
    <KumaButton
      borderRadius="8px"
      border="none"
      height="48px"
      fontSize="18px"
      outline="none"
      bgColor="colors.indigo"
      color="white"
      _hover={{
        bgColor: "colors.gray",
      }}
      {...props}
    ></KumaButton>
  );
};
