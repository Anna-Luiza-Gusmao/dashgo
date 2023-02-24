import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { IconsNav } from "./IconsNav"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      { isWideVersion &&  <SearchBox /> }
      <Flex align="center" ml="auto">
        <IconsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}