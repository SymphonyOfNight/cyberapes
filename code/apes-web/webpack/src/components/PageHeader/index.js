import React, {PureComponent} from 'react';
import {Breadcrumb} from 'antd';
import styles from './index.css';

export default class PageHeader extends PureComponent {

  render(){
    return(
      <div className={styles.pageHeader}>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application</a></Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
