import React from 'react';
import {Layout, Row, Col} from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import styles from '../components/GlobalHeader/index.css';
import HeaderRight from '../components/GlobalHeader/HeaderRight';

const {Content} = Layout;


export default class HomeLayout extends React.Component {

  render() {
    return (
      <Layout style={{minHeight: "100vh"}}>
        <Layout>
          <GlobalHeader/>
          <Content style={{margin: '0px 0px 0px 0px', height: '100%'}}>
            <Row style={{backgroundColor:'#eff3ff', height: '500px'}}>
              <Col span={8}></Col>
              <Col span={8}>
              </Col>
              <Col span={8}></Col>
            </Row>
            {this.props.children}
          </Content>
          <GlobalFooter/>
        </Layout>
      </Layout>
    );
  }
}
