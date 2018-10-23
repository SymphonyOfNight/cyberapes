import React, {PureComponent} from 'react';
import {Layout} from 'antd';
import styles from './index.css';

const {Footer} = Layout;

export default class GlobalFooter extends PureComponent{
  render(){
    return(
      <Footer className={styles.footer}>
        cyberapes.com
      </Footer>
    )
  }
}
