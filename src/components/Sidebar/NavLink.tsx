import {
    Icon,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps,
    Text,
} from "@chakra-ui/react"
import Link from "next/link"
import { ElementType } from "react"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType
    children: string
    href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    if(href == '/') {
        return (
            <Link href={href} passHref>
                <ChakraLink display="flex" color="gray.50" {...rest}>
                    <Icon as={icon} fontSize="20" />
                    <Text ml="4" fontWeight="medium">
                        {children}
                    </Text>
                </ChakraLink>
            </Link>
        )
    }
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" color="pink.400" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {children}
                </Text>
            </ChakraLink>
        </ActiveLink>
    )
}
