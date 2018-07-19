//Kaan Kemal Kayıkcı
//17.07.2018

import React, {Component} from 'react';
import '../Style/Box.css';
import resim from '../resim.png';
class Box extends Component {

    render() {
        return(
            <div>
                <h2>Partiler</h2>
                <ul className="flex-container">
                    <li className="flex-item" >
                        <img src={resim} alt="resim" className="resim"/>
                        <br/>
                        <text>A Partisi</text>
                    </li>

                    <li className="flex-item">
                        <img src={resim} alt="resim" className="resim"/>
                        <br/>
                        <text>B Partisi</text>
                    </li>

                    <li className="flex-item">
                    <img src={resim} alt="resim" className="resim"/>
                    <br/>
                    <text>C Partisi</text>
                    </li>

                    <li className="flex-item">
                    <img src={resim} alt="resim" className="resim"/>
                    <br/>
                    <text>D Partisi</text>
                    </li>

                    <li className="flex-item">
                    <img src={resim} alt="resim" className="resim"/>
                    <br/>
                    <text>E Partisi</text>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Box;
