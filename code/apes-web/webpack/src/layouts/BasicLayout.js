import React from 'react';
import {Layout} from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const {Content} = Layout;


export default class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed,
    })
  }

  render() {
    return (
      <Layout style={{minHeight: "100vh"}}>
        <Layout>
          <GlobalHeader/>
          <Content style={{margin: '24px 24px 0px', height: '100%'}}>
              {this.props.children}
          </Content>
          <GlobalFooter/>
        </Layout>
      </Layout>
    );
  }
}
