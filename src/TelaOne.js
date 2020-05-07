import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

class TelaOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.textoInput}
                    placeholder="Informe o seu email" />
                <TextInput
                    style={styles.textoInput}
                    secureTextEntry={true}
                    placeholder="Informe sua senha" />
                <TouchableOpacity style={styles.botao}>
                    <Button
                        onPress={() => Actions.t2()} title='Logar e Jogar' />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    textoInput: {
        marginTop: 10,
        padding: 10,
        width: 250,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 3,

    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    botao: {
        width: 250,
        height: 42,
        marginTop: 10,
    }
});

export default TelaOne;