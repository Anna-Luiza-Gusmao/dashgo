import {
    Icon,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps,
    Text,
} from "@chakra-ui/react"
import { ElementType } from "react"

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType
    children: string
    href?: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ChakraLink display="flex" color="pink.400" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">
                {children}
            </Text>
        </ChakraLink>
    )
}
