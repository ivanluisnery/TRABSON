import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native';

const dado1 = require('../images/dado1.JPG');
const dado2 = require('../images/dado2.JPG');
const dado3 = require('../images/dado3.JPG');
const dado4 = require('../images/dado4.JPG');
const dado5 = require('../images/dado5.JPG');
const dado6 = require('../images/dado6.JPG');

const styles = StyleSheet.create({
    ImagemDado: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
});



export default class Resultado extends Component {
    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }
    componentWillMount() {
        const dadoAleatorio = Math.floor(Math.random() * 6);
        let jogadado = "";

        if (dadoAleatorio === 1) {
            jogadado = 'dado1';
        } else if (dadoAleatorio === 2) {
            jogadado = 'dado2'
        } else if (dadoAleatorio === 3) {
            jogadado = 'dado3'
        } else if (dadoAleatorio === 4) {
            jogadado = 'dado4'
        } else if (dadoAleatorio === 5) {
            jogadado = 'dado5'
        } else {
            jogadado = 'dado6'
        } this.setState({ resultado: jogadado });
    }

    render() {

        if (this.state.resultado == 'dado1') {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado1} />
                </View>
            );
        } else if (this.state.resultado == 'dado2') {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado2} />
                </View>
            );

        } else if (this.state.resultado == 'dado3') {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado3} />
                </View>
            );
        } else if (this.state.resultado == 'dado4') {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado4} />
                </View>
            );
        } else if (this.state.resultado == 'dado5') {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado5} />
                </View>
            );
        } else {
            return (
                <View>
                    <Image style={styles.ImagemDado}
                        source={dado6} />
                </View>);

        }

    }
}






