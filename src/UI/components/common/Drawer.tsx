import { PropsWithChildren } from "react";

import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps as ChakraDrawerProps,
} from "@chakra-ui/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  label?: string;
}

export default function Drawer({
  isOpen,
  onClose,
  children,
  label,
  ...rest
}: DrawerProps & PropsWithChildren & ChakraDrawerProps) {
  return (
    <ChakraDrawer
      placement="right"
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton colorScheme="red" borderRadius="full" />
        <DrawerHeader>{label}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}
