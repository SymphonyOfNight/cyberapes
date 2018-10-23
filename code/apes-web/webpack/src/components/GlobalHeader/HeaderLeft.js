import React, { PureComponent } from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.css';
import HeaderSearch from '../HeaderSearch';

export default class HeaderLeft extends PureComponent {

  render() {
    return (
      <div className={styles.left}>
        <HeaderSearch
          placeholder="Search anything"
        />
      </div>
    );
  }
}
