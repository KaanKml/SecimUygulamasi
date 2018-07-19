//Kaan Kemal Kayıkcı
//17.07.2018

import React, {Component} from 'react';
import '../Style/il-ilce.css';
import AnyChart from 'C:/Users/Kaan Kemal KAYIKCI/IdeaProjects/React/lifecycle/node_modules/anychart-react'

class IlIlce extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            ank:[
                {
                    name: 'Ankara Genel',
                    oyA:0,
                    oyB:0,
                    oyC:0,
                    oyD:0,
                    oyE:0
                },

                {
                    name: "Beypazarı",
                    oyA: 2,
                    oyB: 3,
                    oyC: 6,
                    oyD: 1,
                    oyE: 7,
                },
                {
                    name: "Çankaya",
                    oyA: 4,
                    oyB: 5,
                    oyC: 1,
                    oyD: 3,
                    oyE: 9,
                },
                {
                    name: "Kalecik",
                    oyA: 1,
                    oyB: 2,
                    oyC: 6,
                    oyD: 2,
                    oyE: 3,
                },
                {
                    name: "Keçiören",
                    oyA: 1,
                    oyB: 8,
                    oyC: 7,
                    oyD: 3,
                    oyE: 4,
                },
                {
                    name: "Polatlı",
                    oyA: 2,
                    oyB: 6,
                    oyC: 5,
                    oyD: 9,
                    oyE: 1,
                }],
            ist:[
                {
                    name: 'İstanbul Genel',
                    oyA: 0,
                    oyB: 0,
                    oyC: 0,
                    oyD: 0,
                    oyE: 0,
                },
                {
                    name: "Adalar",
                    oyA: 4,
                    oyB: 6,
                    oyC: 8,
                    oyD: 1,
                    oyE: 2,
                },
                {
                    name: "Beşiktaş",
                    oyA: 3,
                    oyB: 3,
                    oyC: 9,
                    oyD: 7,
                    oyE: 6,
                },
                {
                    name: "Kadıköy",
                    oyA: 1,
                    oyB: 2,
                    oyC: 5,
                    oyD: 8,
                    oyE: 9,
                },
                {
                    name: "Sarıyer",
                    oyA: 1,
                    oyB: 1,
                    oyC: 5,
                    oyD: 4,
                    oyE: 6,
                },
                {
                    name: "Üsküdar",
                    oyA: 1,
                    oyB: 2,
                    oyC: 3,
                    oyD: 4,
                    oyE: 5,
                },
                {
                    name: "Zeytinburnu",
                    oyA: 8,
                    oyB: 7,
                    oyC: 4,
                    oyD: 2,
                    oyE: 1,
                }],
            izmr: [
                {
                    name: 'İzmir Genel',
                    oyA: 0,
                    oyB: 0,
                    oyC: 0,
                    oyD: 0,
                    oyE: 0,
                },
                {
                    name: "Bergama",
                    oyA: 2,
                    oyB: 4,
                    oyC: 5,
                    oyD: 6,
                    oyE: 2
                },
                {
                    name: "Bornova",
                    oyA: 4,
                    oyB: 7,
                    oyC: 5,
                    oyD: 7,
                    oyE: 2
                },
                {
                    name: "Çeşme",
                    oyA: 3,
                    oyB: 1,
                    oyC: 2,
                    oyD: 4,
                    oyE: 8
                },
                {
                    name: "Karşıyaka",
                    oyA: 4,
                    oyB: 5,
                    oyC: 3,
                    oyD: 7,
                    oyE: 9
                },
                {
                    name: "Konak",
                    oyA: 9,
                    oyB: 5,
                    oyC: 3,
                    oyD: 1,
                    oyE: 1
                },
                {
                    name: "Menemen",
                    oyA: 2,
                    oyB: 3,
                    oyC: 2,
                    oyD: 8,
                    oyE: 6
                }],
            kstmn: [
                {
                    name: 'Kastamonu Genel',
                    oyA: 0,
                    oyB: 0,
                    oyC: 0,
                    oyD: 0,
                    oyE: 0,
                },
                {
                    name: "Azdavay",
                    oyA: 2,
                    oyB: 3,
                    oyC: 1,
                    oyD: 4,
                    oyE: 6
                },
                {
                    name: "Daday",
                    oyA: 3,
                    oyB: 7,
                    oyC: 4,
                    oyD: 0,
                    oyE: 2
                },
                {
                    name: "İhsangazi",
                    oyA: 8,
                    oyB: 2,
                    oyC: 9,
                    oyD: 1,
                    oyE: 3
                },
                {
                    name: "İnebolu",
                    oyA: 5,
                    oyB: 1,
                    oyC: 5,
                    oyD: 4,
                    oyE: 7
                },
                {
                    name: "Şenpazar",
                    oyA: 2,
                    oyB: 8,
                    oyC: 6,
                    oyD: 1,
                    oyE: 4
                }],
            skrya: [
                {
                    name: 'Sakarya Genel',
                    oyA: 0,
                    oyB: 0,
                    oyC: 0,
                    oyD: 0,
                    oyE: 0,
                },
                {
                    name: "Adapazarı",
                    oyA: 5,
                    oyB: 7,
                    oyC: 1,
                    oyD: 9,
                    oyE: 3
                },
                {
                    name: "Karasu",
                    oyA: 4,
                    oyB: 6,
                    oyC: 1,
                    oyD: 5,
                    oyE: 9
                },
                {
                    name: "Sapanca",
                    oyA: 9,
                    oyB: 4,
                    oyC: 6,
                    oyD: 8,
                    oyE: 6
                },
                {
                    name: "Serdivan",
                    oyA: 2,
                    oyB: 6,
                    oyC: 4,
                    oyD: 7,
                    oyE: 5
                }],
            Turkiye:[
                {
                    name: "Türkiye Genel",
                    oyA: 0,
                    oyB: 0,
                    oyC: 0,
                    oyD: 0,
                    oyE: 0

                }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIlce = this.handleChangeIlce.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.oyDagilimi=this.oyDagilimi.bind(this);
    }
    oyDagilimi(){

        for(let i = 1; i<this.state.ank.length; i++) {
            //Ankara Genel Oy Dagilimi
            this.state.ank[0].oyA+=this.state.ank[i].oyA;
            this.state.ank[0].oyB+=this.state.ank[i].oyB;
            this.state.ank[0].oyC+=this.state.ank[i].oyC;
            this.state.ank[0].oyD+=this.state.ank[i].oyD;
            this.state.ank[0].oyE+=this.state.ank[i].oyE;
        }

        for(let i = 1; i<this.state.ist.length; i++) {
            //Ankara Genel Oy Dagilimi
            this.state.ist[0].oyA+=this.state.ist[i].oyA;
            this.state.ist[0].oyB+=this.state.ist[i].oyB;
            this.state.ist[0].oyC+=this.state.ist[i].oyC;
            this.state.ist[0].oyD+=this.state.ist[i].oyD;
            this.state.ist[0].oyE+=this.state.ist[i].oyE;

        }
        for(let i = 1; i<this.state.izmr.length; i++) {
            //Ankara Genel Oy Dagilimi
            this.state.izmr[0].oyA+=this.state.izmr[i].oyA;
            this.state.izmr[0].oyB+=this.state.izmr[i].oyB;
            this.state.izmr[0].oyC+=this.state.izmr[i].oyC;
            this.state.izmr[0].oyD+=this.state.izmr[i].oyD;
            this.state.izmr[0].oyE+=this.state.izmr[i].oyE;

        }
        for(let i = 1; i<this.state.kstmn.length; i++) {
            //Ankara Genel Oy Dagilimi
            this.state.kstmn[0].oyA+=this.state.kstmn[i].oyA;
            this.state.kstmn[0].oyB+=this.state.kstmn[i].oyB;
            this.state.kstmn[0].oyC+=this.state.kstmn[i].oyC;
            this.state.kstmn[0].oyD+=this.state.kstmn[i].oyD;
            this.state.kstmn[0].oyE+=this.state.kstmn[i].oyE;
        }
        for(let i = 1; i<this.state.skrya.length; i++) {
            //Ankara Genel Oy Dagilimi
            this.state.skrya[0].oyA+=this.state.skrya[i].oyA;
            this.state.skrya[0].oyB+=this.state.skrya[i].oyB;
            this.state.skrya[0].oyC+=this.state.skrya[i].oyC;
            this.state.skrya[0].oyD+=this.state.skrya[i].oyD;
            this.state.skrya[0].oyE+=this.state.skrya[i].oyE;
        }

        //Türkiye Genel oyların toplanma işlemi
        this.state.Turkiye[0].oyA=this.state.ank[0].oyA + this.state.ist[0].oyA + this.state.izmr[0].oyA + this.state.kstmn[0].oyA + this.state.skrya[0].oyA;
        this.state.Turkiye[0].oyB=this.state.ank[0].oyB + this.state.ist[0].oyB + this.state.izmr[0].oyB + this.state.kstmn[0].oyB + this.state.skrya[0].oyB;
        this.state.Turkiye[0].oyC=this.state.ank[0].oyC + this.state.ist[0].oyC + this.state.izmr[0].oyC + this.state.kstmn[0].oyC + this.state.skrya[0].oyC;
        this.state.Turkiye[0].oyD=this.state.ank[0].oyD + this.state.ist[0].oyD + this.state.izmr[0].oyD + this.state.kstmn[0].oyD + this.state.skrya[0].oyD;
        this.state.Turkiye[0].oyE=this.state.ank[0].oyE + this.state.ist[0].oyE + this.state.izmr[0].oyE + this.state.kstmn[0].oyE + this.state.skrya[0].oyE;
    }

    handleChange(event) {

        this.setState({name: event.target.value});
        const select_ilce = document.getElementById("ilce");
        select_ilce.options.length=0;

        if (event.target.value === "Ankara"){
            for(let i = 0; i<this.state.ank.length; i++) {
                //Ankara ilçeleri için yeni bir option oluştuyorum.
                select_ilce.options[select_ilce.options.length] = new Option(this.state.ank[i].name);
            }
            //Ankara seçildiği zaman Ankara Genel set ediliyor.

            this.setState({value: this.state.ank[0].value});
            this.setState({oyA: this.state.ank[0].oyA});
            this.setState({oyB: this.state.ank[0].oyB});
            this.setState({oyC: this.state.ank[0].oyC});
            this.setState({oyD: this.state.ank[0].oyD});
            this.setState({oyE: this.state.ank[0].oyE});

        }

        if (event.target.value === "İstanbul"){
            for(let i = 0; i<this.state.ist.length; i++) {
                //İstanbul ilçeleri için yeni bir option oluştuyorum.
                select_ilce.options[select_ilce.options.length] = new Option(this.state.ist[i].name);
            }
            //İstanbul seçildiği zaman İstanbul Genel set ediliyor.
            this.setState({value: this.state.ist[0].value});
            this.setState({oyA:this.state.ist[0].oyA});
            this.setState({oyB:this.state.ist[0].oyB});
            this.setState({oyC:this.state.ist[0].oyC});
            this.setState({oyD:this.state.ist[0].oyD});
            this.setState({oyE:this.state.ist[0].oyE});
        }
        if (event.target.value === "İzmir") {
            for (let i = 0; i < this.state.izmr.length; i++) {
                //İzmir ilçeleri için yeni bir option oluştuyorum.
                select_ilce.options[select_ilce.options.length] = new Option(this.state.izmr[i].name);

            }
            //İzmir seçildiği zaman İzmir Genel set ediliyor.
            this.setState({value: this.state.izmr[0].value});
            this.setState({oyA:this.state.izmr[0].oyA});
            this.setState({oyB:this.state.izmr[0].oyB});
            this.setState({oyC:this.state.izmr[0].oyC});
            this.setState({oyD:this.state.izmr[0].oyD});
            this.setState({oyE:this.state.izmr[0].oyE});
        }

        if (event.target.value === "Kastamonu"){
            for(let i = 0; i<this.state.kstmn.length; i++) {
                //Kastamonu ilçeleri için yeni bir option oluştuyorum.
                select_ilce.options[select_ilce.options.length] = new Option(this.state.kstmn[i].name);
            }
            //Kastamonu seçildiği zaman Kastamonu Genel set ediliyor.
            this.setState({value: this.state.kstmn[0].value});
            this.setState({oyA: this.state.kstmn[0].oyA});
            this.setState({oyB: this.state.kstmn[0].oyB});
            this.setState({oyC: this.state.kstmn[0].oyC});
            this.setState({oyD: this.state.kstmn[0].oyD});
            this.setState({oyE: this.state.kstmn[0].oyE});
        }

        if (event.target.value === "Sakarya") {
            for (let i = 0; i < this.state.skrya.length; i++) {
                //Sakarya ilçeleri için yeni bir option oluştuyorum.
                select_ilce.options[select_ilce.options.length] = new Option(this.state.skrya[i].name);
            }
            //Sakarya seçildiği zaman Sakarya Genel set ediliyor.
                this.setState({value: this.state.skrya[0].value});
                this.setState({oyA: this.state.skrya[0].oyA});
                this.setState({oyB: this.state.skrya[0].oyB});
                this.setState({oyC: this.state.skrya[0].oyC});
                this.setState({oyD: this.state.skrya[0].oyD});
                this.setState({oyE: this.state.skrya[0].oyE});

        }
    }
    handleChangeIlce(e){
        this.setState({value: e.target.value});
            //Ankara İlce oylarının set edilmesi.
        for(let i=0;i<this.state.ank.length;i++) {
            if (e.target.value === this.state.ank[i].name) {
                this.setState({oyA: this.state.ank[i].oyA});
                this.setState({oyB: this.state.ank[i].oyB});
                this.setState({oyC: this.state.ank[i].oyC});
                this.setState({oyD: this.state.ank[i].oyD});
                this.setState({oyE: this.state.ank[i].oyE});
            }
        }
            //İstanbul İlce oylarının set edilmesi.
        for(let i=0;i<this.state.ist.length;i++) {
            if (e.target.value === this.state.ist[i].name) {
                this.setState({oyA: this.state.ist[i].oyA});
                this.setState({oyB: this.state.ist[i].oyB});
                this.setState({oyC: this.state.ist[i].oyC});
                this.setState({oyD: this.state.ist[i].oyD});
                this.setState({oyE: this.state.ist[i].oyE});
            }
        }
              //Kastamonu İlce oylarının set edilmesi.
        for(let i=0;i<this.state.kstmn.length;i++) {
            if(e.target.value===this.state.kstmn[i].name){
                this.setState({oyA:this.state.kstmn[i].oyA});
                this.setState({oyB:this.state.kstmn[i].oyB});
                this.setState({oyC:this.state.kstmn[i].oyC});
                this.setState({oyD:this.state.kstmn[i].oyD});
                this.setState({oyE:this.state.kstmn[i].oyE});
            }
        }
        //Izmir Ilce oylarının set edilmesi.
        for(let i=0;i<this.state.izmr.length;i++) {
            if(e.target.value===this.state.izmr[i].name){
                this.setState({oyA: this.state.izmr[i].oyA});
                this.setState({oyB: this.state.izmr[i].oyB});
                this.setState({oyC: this.state.izmr[i].oyC});
                this.setState({oyD: this.state.izmr[i].oyD});
                this.setState({oyE: this.state.izmr[i].oyE});
            }

        }
        //Sakarya İlce oylarının set edilmesi.
        for(let i=0;i<this.state.skrya.length;i++) {
            if (e.target.value === this.state.skrya[i].name) {
                this.setState({oyA:this.state.skrya[i].oyA});
                this.setState({oyB:this.state.skrya[i].oyB});
                this.setState({oyC:this.state.skrya[i].oyC});
                this.setState({oyD:this.state.skrya[i].oyD});
                this.setState({oyE:this.state.skrya[i].oyE});
            }
        }
    }
    handleClick(event){
        //Türkiye Genel oyların set işlemi.
        this.setState({value: this.state.Turkiye[0].name});
        this.setState({oyA: this.state.Turkiye[0].oyA});
        this.setState({oyB: this.state.Turkiye[0].oyB});
        this.setState({oyC: this.state.Turkiye[0].oyC});
        this.setState({oyD: this.state.Turkiye[0].oyD});
        this.setState({oyE: this.state.Turkiye[0].oyE});

        event.preventDefault();
    }

    componentDidMount() {
        this.oyDagilimi();
    }

    render() {
        return (
            <div>
                <form>
                    <table>
                        <tr>
                            İl:
                                <label>
                                    <select id="il"  value={this.value} onChange={this.handleChange} >
                                        <option selected="selected">Lütfen Seçiniz</option>
                                        <option value="Ankara">Ankara</option>
                                        <option value="İstanbul">İstanbul</option>
                                        <option value="İzmir">İzmir</option>
                                        <option value="Kastamonu">Kastamonu</option>
                                        <option value="Sakarya">Sakarya</option>
                                    </select>

                                </label>
                            <td>&emsp;</td>
                            İlçe:
                                <label>
                                    <select id="ilce"   onChange={this.handleChangeIlce}>
                                        <option value="Genel">Önce İl Seciniz</option>
                                    </select>
                                </label>
                        </tr>
                    </table>
                <button  onClick={this.handleClick}>Türkiye Genel Seçim Sonuçları </button>
                    <h3>{this.state.name} Oy Dağılımı</h3>
                </form>
                <AnyChart
                    id="columnChart"
                    width={800}
                    height={200}
                    type="column"
                    title={this.state.value}
                    legend="true"
                    data={[
                        [
                            "A Partisi", this.state.oyA,

                        ],[
                            "B Partisi",this.state.oyB,

                        ],[
                            "C Partisi",this.state.oyC,

                        ],[
                            "D Partisi", this.state.oyD,

                        ],[
                           "E Partisi", this.state.oyE,
                         ]
                    ]}
                    />
                <AnyChart
                    id="pieChart"
                    width={800}
                    height={300}
                    type="pie"
                    data={[
                        {
                            name:"A Partisi",
                            value:this.state.oyA,

                        },{
                            name:"B Partisi",
                            value:this.state.oyB,

                        },{
                            name:"C Partisi",
                            value:this.state.oyC,

                        },{
                            name:"D Partisi",
                            value:this.state.oyD,

                        },{
                            name:"E Partisi",
                            value:this.state.oyE,

                        }
                        ]}
                    title= "Oy Dağılım Yüzdeleri"
                />
            </div>
        );
    }
}
export default IlIlce;
