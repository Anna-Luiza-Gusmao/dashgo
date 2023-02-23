import { Input } from '@/components/Form/Input'
import { Logo } from '@/components/Header/Logo'
import { Flex, Button, Stack } from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
      <Flex 
        as="form" 
        w="100%" 
        maxW={360} 
        bg="gray.800" 
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}