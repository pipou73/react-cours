import React from 'react';
import Toogle from './toogle.js'
import Modal from './modal.js'
import Msg from './message.js'

class App extends React.Component  {
    constructor(props) {
      super (props);
      this.toogle = this.toogle.bind(this);
      this.change = this.change.bind(this);
      this.state = {visible: false, message: 'hello word'};
    }

    toogle() {
        console.log('toto')
      this.setState({visible: !this.state.visible});
    }

    change(text) {
        console.log(text)
        this.setState({message: text});
    }

    render() {
     return <div>
         <Msg msg={this.state.message} change={this.change} />
         <Toogle msg="valider" click={this.toogle}/>
         <Modal content={this.state.message} visible={this.state.visible} />
     </div>
    }
}
export default App ;
