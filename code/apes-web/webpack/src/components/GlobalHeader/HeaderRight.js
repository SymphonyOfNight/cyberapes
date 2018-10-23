import React, { PureComponent } from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.css';
import HeaderSearch from '../HeaderSearch';
import Notice from '../Notice';
import UserAvatar from '../UserAvatar';

const { Header } = Layout;

export default class HeaderRight extends PureComponent {

  render() {
    return (
      <div className={styles.right}>
        <Notice/>
        <UserAvatar/>
      </div>
    );
  }
}
