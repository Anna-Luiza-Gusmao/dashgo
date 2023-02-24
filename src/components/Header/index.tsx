import { useSidebarDrawer } from "@/context/SidebarDrawerContext"
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { IconsNav } from "./IconsNav"
import { Logo } from "./Logo"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  const { onOpen } = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      
      <Logo />
      { isWideVersion &&  <SearchBox /> }
      <Flex align="center" ml="auto">
        <IconsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}