import React, { Component } from 'react';

import BenifitSelector from './BenifitSelector';


// setting a global variable for total price. Have to work out how to pass it back
//window.totalPrice = 22;



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
      type:'Life Cover'
    }
  );
  this.setState({
    items: itemArray,
  });
  e.preventDefault();

}



addItemCI(e){
  var itemArray = this.state.items;
  itemArray.unshift(
    {
      id: Date.now(),
      type:'Critical Illness'
    }
  );
  this.setState({
    items: itemArray
  });
  e.preventDefault();

}

addItemTPD(e){
  var itemArray = this.state.items;
  itemArray.unshift(
    {
      id: Date.now(),
      type:'Total & Permanent Disability'
    }
  );
  this.setState({
    items: itemArray
  });
  e.preventDefault();

}

addItemIP(e){
  var itemArray = this.state.items;
  itemArray.unshift(
    {
      id: Date.now(),
      type:'Income Protection'
    }
  );
  this.setState({
    items: itemArray
  });
  e.preventDefault();

}


handler(item, e){
  if(confirm('Delete this benefit ?')){
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
              <Button value="large" onClick={this.addItemLife.bind(this)}>Life Cover</Button>

              <Button value="large" onClick={this.addItemCI.bind(this)}>Critical Illness</Button>

              <Button value="large" onClick={this.addItemTPD.bind(this)}>Total & Permanent Disability</Button>

            <Button value="large" onClick={this.addItemIP.bind(this)}>Income Protection</Button>
        </div>
          <div className="BenifitsSpacer">
             <BenifitSelector handler={this.handler} entries={this.state.items}/>
         </div>
      </div>
    );
  }
}

export default ButtonControler;
