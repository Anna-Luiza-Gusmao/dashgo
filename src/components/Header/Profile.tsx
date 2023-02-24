import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Anna Gusmão</Text>
                        <Text color="gray.300" fontSize="small">
                            annagusmao@email.com
                        </Text>
                    </Box>
                )
            }

            <Avatar
                size="md"
                name="Anna Gusmão"
            />
        </Flex>
    );
}
