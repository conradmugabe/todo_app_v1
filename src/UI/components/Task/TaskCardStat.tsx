import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface TaskCardStatProps {
  Icon: IconType;
  count: number;
  tooltipLabel?: string;
}

export default function TaskCardStat({
  Icon,
  count,
  tooltipLabel,
}: TaskCardStatProps) {
  if (count <= 0) return null;

  const label = tooltipLabel && `${count} ${tooltipLabel}`;

  return (
    <Tooltip label={label}>
      <Flex alignItems="center" gap={1}>
        <Icon size={20} />
        <Text fontSize="sm">{count}</Text>
      </Flex>
    </Tooltip>
  );
}
