import React, { Component } from 'react';

import { Menu, Icon } from 'antd';

import PolicyNav from './PolicyNav';

const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;



class LHSMenu extends Component {

  constructor(props) {
      super(props);
      this.state = {
            current: '1',
      }
    }

    handleClick(e) {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }

  render() {
    return (

<div className="bgLHSNav">
      <Menu onClick={this.handleClick}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
              theme="dark"

            >


                  <Menu.Item key="1">New Quote</Menu.Item>
                  <Menu.Item key="2">AP 2.0 Quotes</Menu.Item>

              <PolicyNav/>

              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>

            </Menu>
</div>


    );
  }
}

export default LHSMenu;
