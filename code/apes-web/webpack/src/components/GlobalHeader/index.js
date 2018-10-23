import React, { PureComponent } from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import styles from './index.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Notice from '../Notice';
import UserAvatar from '../UserAvatar';

const { Header } = Layout;

export default class GlobalHeader extends PureComponent {

  render() {
    return (
      <Header className={styles.head}>
        <Row>
          <Col span={6}>
            <div className={styles.log}>cyberapes</div>
          </Col>
          <Col span={12}>
          </Col>
          <Col span={6}>
            <Col span={12}>
              <Notice/>
            </Col>
            <Col span={12}>
              <UserAvatar/>
            </Col>
          </Col>
        </Row>
      </Header>
    );
  }
}
