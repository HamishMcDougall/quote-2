import React, { Component } from 'react';

import BenifitSelector from './BenifitSelector';


import { Button } from 'antd';

class ButtonControler extends Component {

  constructor(props) {
      super(props);
      this.state = {
          items: [],
      }
      this.handler = this.handler.bind(this);
    }

addItemLife(e){
  var itemArray = this.state.items;
  itemArray.unshift(
    {
      id: Date.now(),
      type:'Life'
    }
  );
  this.setState({
    items: itemArray
  });
  e.preventDefault();

}



addItemCI(e){
  var itemArray = this.state.items;
  itemArray.unshift(
    {
      id: Date.now(),
      type:'CI'
    }
  );
  this.setState({
    items: itemArray
  });
  e.preventDefault();

}



handler(item, e){
  if(confirm('Are you sure you would like to remove this benefit ?')){
  console.log(item.id);
  var itemId = item.id
  var findArray = this.state.items;
  var arrayAnswer = findArray.findIndex(obj => obj.id === itemId)
  console.log(itemId);
  console.log(arrayAnswer);
  var DeleteArray = this.state.items;
  DeleteArray.splice(arrayAnswer,1)
    this.setState({
      items: DeleteArray
    });
}
}


  render() {



    return (
      <div >
      <h3>Accelerated Protection Quote #1</h3><br/>
          <div>
              <Button value="large" onClick={this.addItemLife.bind(this)} >Life</Button>

              <Button value="large" onClick={this.addItemCI.bind(this)}>CI</Button>
        </div>
          <div className="BenifitsSpacer">
             <BenifitSelector handler={this.handler} entries={this.state.items}/>
         </div>
      </div>
    );
  }
}

export default ButtonControler;
