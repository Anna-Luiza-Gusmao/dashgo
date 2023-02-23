import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { SearchBox } from "./SearchBox"

export function Header() {
  return (
    <Flex
      as="header"
      maxW={1480}
      w="100%"
      mx="auto"
      mt="4"
      px="6"
      h="20"
      align="center"
    >
      <Logo />
      <SearchBox />
    </Flex>
  )
}