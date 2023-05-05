import { Flex } from "@chakra-ui/react";

const attachments = [
  { id: 1, name: "Guidelines" },
  { id: 2, name: "Branding Assets" },
];

export default function TaskAttachments() {
  return (
    <Flex alignItems="center" overflowX="hidden" flexWrap="nowrap">
      {attachments.map((attachment) => (
        <Flex key={attachment.id} />
      ))}
    </Flex>
  );
}
