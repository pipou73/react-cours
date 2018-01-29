import React from 'react';
import Item from './item'
import Page from './page'
const ALL_CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
function getRandomColor() {
    return ALL_CSS_COLORS[Math.floor(Math.random() * ALL_CSS_COLORS.length)]
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.state = {
            current: 'Accueil',
            items : [
                {
                    title : 'Accueil',
                    color : getRandomColor(),
                    body : `<div class="row center">
                    <h1 style="text-align:center"><em><span style="font-family:georgia,serif"><span style="font-size:26px"><strong>Bienvenue à l'association </strong></span></span></em></h1>
                    <h1 style="text-align:center"><a href="https://www.facebook.com/tribu.circus.9?fref=ts" target="_blank"><em><span style="font-family:georgia,serif"><span style="font-size:26px"><strong>Tribu Circus</strong></span></span></em></a></h1>
                    <h1 style="text-align:center"><em><span style="font-family:georgia,serif"><span style="font-size:26px"><strong>Association de jonglerie&nbsp;</strong></span></span></em></h1>
                    <p style="text-align:center"><iframe align="middle" frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/BFPJI31_OQc" width="470"></iframe></p>     
                    </div>`
                }, {
                    title : 'Atelier',
                    color : getRandomColor(),
                    body : `<div class="row center">
                    <h1 style="text-align:center">&nbsp;</h1>
                    <p style="text-align:center">&nbsp;</p>
                    <h1 style="text-align:center"><em><strong>Atelier</strong></em></h1>
                    <h1><span style="font-size:14px"><strong>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Les ateliers adulte hebdomadaires sont ouverts&nbsp;</strong></span><span style="font-size:14px"><strong>à tout ceux qui souhaitent s’initier ou &nbsp;se perfectionner en jonglerie , le tout dans la joie et la bonne hummeur !!!</strong></span></h1>
                    <p>&nbsp;</p>
                    <p style="text-align:center"><span style="font-size:14px"><strong>Activitées : massues , bolas , bâton staff , hula hoop , balles , monocycle , slackline , volley massue , diabolo , et bien d autres ...</strong></span></p>
                    <p style="text-align:center">&nbsp;</p>
                    <p style="text-align:center"><strong>horaires :</strong>&nbsp;<span style="font-size:14px">Tous les mercredi soir de 19h00 à 22h00</span></p>
                    <p style="text-align:center"><span style="background-color:rgb(255, 255, 255); color:rgb(51, 51, 51); font-family:sans-serif,arial,verdana,trebuchet ms; font-size:13px">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size:14px">Tous les jeudis soir de 20h00 à 22h30</span></span></p>
                    <p style="text-align:center">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ( sauf vacances d été et vacances de noel )</p>
                    <p style="text-align:center">&nbsp;</p>
                    <p style="text-align:center"><strong>&nbsp;Tarifs :&nbsp;1</strong>&nbsp;€ par séance ou 30 € (adhésion annuelle)</p>
                    <p style="text-align:center"><strong>Lieu :&nbsp;</strong><a href="http://www.caue74.fr/referentiel/equipement-public/culture-et-loisirs/salle-polyvalente.html" style="line-height: 1.6em;" target="_blank">Salle polyvalente</a> - <a href="https://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;authuser=0&amp;q=villy+le+pelloux&amp;aq=&amp;vps=2&amp;jsv=473a&amp;sll=46.035467,6.114849&amp;sspn=0.43187,0.891953&amp;vpsrc=0&amp;gl=fr&amp;ie=UTF8&amp;ct=clnk&amp;cd=1&amp;spell=1" style="line-height: 1.6em;" target="_blank">Villy Le Pelloux</a></p> 
                    </div>`
                }
            ]}
    }

    select(label) {
        this.setState({current: label});
    }d

    render() {
        const data = Object.keys(this.state.items);
        console.log(data);
        return <div>
            {this.state.items.map(({title, color}) => {
                   return <Item key={title.toString()} ref={title.toString()} label={title} color={color} select={this.select} current={this.state.current === title}>
                    </Item>
                }
            )}
            <Page body={this.state.items.find( item => item.title === this.state.current).body} />
        </div>
    }
}
export default App ;
