import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState<boolean>(false)
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.container}>
            <View style={style.content}>
                <Text style={style.title} variant="headlineMedium">{isSignUp ? 'Create Account' : 'Welcome Back'}</Text>
                <TextInput
                    mode="outlined"
                    label="Email"
                    placeholder="Enter You Email"
                    style={style.input}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    placeholder="Enter You Password"
                    secureTextEntry
                    style={style.input}
                    right={<TextInput.Icon icon="eye" />}
                />
                <Button style={style.button} mode="contained">{isSignUp ? 'Sign Up' : "Sign In"}</Button>
                <Button onPress={() => {
                    setIsSignUp((pre) => !pre)
                }}>{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"} </Button>

            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        marginBottom: 24
    },
    input: {
        marginBottom: 16
    },
    button: {
        marginBottom: 24,
        textAlign: 'center'
    }
})
