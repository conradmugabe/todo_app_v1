import { Flex, Tag, TagProps } from "@chakra-ui/react";

const tags = [
  { id: 1, value: "design", colorScheme: "teal" },
  { id: 2, value: "development", colorScheme: "blue" },
  { id: 3, value: "backlog", colorScheme: "pink" },
  { id: 4, value: "recruitment", colorScheme: "purple" },
  { id: 5, value: "backlog", colorScheme: "yellow" },
];

export default function TaskTags(props: TagProps) {
  return (
    <Flex gap={1} flexWrap="nowrap" overflowX="hidden">
      {tags.map((tag) => (
        <Tag
          size="sm"
          key={tag.id}
          variant="solid"
          borderRadius="full"
          colorScheme={tag.colorScheme}
          flex="0 0 auto"
          {...props}
        >
          {tag.value}
        </Tag>
      ))}
    </Flex>
  );
}
