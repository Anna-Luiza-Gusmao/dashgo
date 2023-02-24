import { Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
    RiLogoutCircleLine
} from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function SidebarNav() {
    const router = useRouter()

    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="Geral">
                <NavLink icon={RiDashboardLine} href="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink icon={RiContactsLine} href="/users">
                    Usuários
                </NavLink>
            </NavSection>

            <NavSection title="Automação">
                <NavLink icon={RiInputMethodLine} href="/forms">
                    Formulários
                </NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">
                    Automação
                </NavLink>
            </NavSection>

            <NavSection title="Logout">
                <NavLink icon={RiLogoutCircleLine} onClick={() => router.push('/')}>
                    Sair
                </NavLink>
            </NavSection>
        </Stack>
    )
}
