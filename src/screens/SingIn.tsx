import {useState} from "react"
import { Alert } from "react-native"
import auth from "@react-native-firebase/auth"
import { VStack, Heading, Icon, useTheme } from "native-base"
import Logo from "../assets/logo_primary.svg"
import { Envelope, Key} from "phosphor-react-native"

import { Input } from "../components/Input"
import { Button } from "../components/Button"


export function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {colors} = useTheme()

    function handleSingIn(){
        if(!email || !password){
           return Alert.alert('Entrar', "Informe e-mail e senha")
        }
    }

    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={20}>

            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={4}>
                Acesse sua conta 
            </Heading>

            <Input 
            placeholder="E-mail"
            mb={4}
            InputLeftElement={
            <Icon as={<Envelope color={colors.gray[300] } />} 
            ml={6}/>}
            onChangeText={setEmail}
            
            />

            <Input 
            mb={8}
            placeholder="Senha"
            InputLeftElement={<Icon as={<Key color={colors.gray[300] }/>} 
            ml={6}/>}
            secureTextEntry 
            onChangeText={setPassword}
            />

            <Button 
            title="Entrar"
            w="full"
            onPress={handleSingIn}
            />
            
        </VStack>        
    )
}

