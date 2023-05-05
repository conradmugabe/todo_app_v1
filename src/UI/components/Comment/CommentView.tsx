import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { FaRegSmile } from "react-icons/fa";

const reactions = [
  { id: 1, name: "😂" },
  { id: 2, name: "👍" },
  { id: 3, name: "❤️" },
  { id: 4, name: "😢" },
  { id: 5, name: "🙏" },
  { id: 6, name: "😲" },
];

export default function CommentView() {
  return (
    <Flex padding={4} gap={2} flexDirection="column">
      <Flex alignItems="center" gap={2}>
        <Avatar
          size="sm"
          src="https://bit.ly/sage-adebayo"
          name="Segun Adebayo"
        />
        <Text fontWeight="bold">
          Segun Adebayo{" "}
          <Text as="span" fontWeight="light">
            5h ago
          </Text>
        </Text>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt
        cumque corporis quidem praesentium. Hic magni dicta veniam fugit ea
        officiis sequi nobis quo omnis necessitatibus dolorum est, ipsam
        corporis.
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="select reaction"
              size="xs"
              borderRadius="full"
              icon={<FaRegSmile size={16} />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <Flex gap={1}>
                {reactions.map((reaction) => (
                  <IconButton
                    aria-label=""
                    size="sm"
                    key={reaction.id}
                    borderRadius="full"
                  >
                    <Text fontSize="lg">{reaction.name}</Text>
                  </IconButton>
                ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button size="xs" variant="ghost">
          13 replies
        </Button>
      </Flex>
    </Flex>
  );
}
