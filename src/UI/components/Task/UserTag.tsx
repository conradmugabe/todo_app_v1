import { Avatar, Tag, TagLabel } from "@chakra-ui/react";

export default function UserTag({
  user,
}: {
  user: { src: string; name: string };
}) {
  return (
    <Tag size="lg" colorScheme="red" borderRadius="full" alignSelf="start">
      <Avatar src={user.src} size="xs" name={user.name} ml={-2} mr={1.5} />
      <TagLabel>{user.name}</TagLabel>
    </Tag>
  );
}
