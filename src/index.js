import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import TelaOne from './TelaOne';
import TelaTwo from './TelaTwo';

class App extends Component {
    render() {
        return (
            <Router>
                <Stack key={TelaOne}>
                    <Scene key="t1" component={TelaOne} title="Tela de Login" />
                    <Scene key="t2" component={TelaTwo} title="Jogo de Dados" />
                </Stack>
            </Router>
        );
    }
}
export default App;