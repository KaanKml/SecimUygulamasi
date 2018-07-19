//Kaan Kemal Kayıkcı
//17.07.2018

import React, { Component } from 'react';
import IlIlce from './il-ilce';
import Box from './Box';
import '../Style/App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Seçim Uygulaması</h1>
                <Box/>
                <IlIlce/>

            </div>
        );
    }
}

export default App;
