import { Button } from "@chakra-ui/react"

interface PaginationItemsProps {
    number: number
    isCurrent?: boolean
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemsProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default",
                }}
            >
                {number}
            </Button>
        )
    } else {
        return (
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                bgColor="gray.700"
                _hover={{
                    bgColor: "gray.500",
                }}
            >
                {number}
            </Button>
        )
    }
}