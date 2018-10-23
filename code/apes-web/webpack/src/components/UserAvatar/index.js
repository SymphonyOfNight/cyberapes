import React, { PureComponent } from 'react';
import { Avatar, Dropdown, Icon, Menu, Spin } from 'antd';
import styles from './index.css';

export default class UserAvatar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'wangjie',
        avatar: './assets/avatar/user.png',
      },
    };
  }

  /**
   * 用户头像下拉选单
   * @returns {*}
   */
  getUserDropdown = () => {
    return(
      <Menu style={{ width: '150px', marginRight: '12px' }}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            <Icon type="user" style={{ paddingRight: '6px' }}/>
            个人中心
          </a>
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            <Icon type="setting" style={{ paddingRight: '6px' }}/>
            设置
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            <Icon type="logout" style={{ paddingRight: '6px' }}/>
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    const userDropdown = this.getUserDropdown();

    return (
      <Dropdown
        overlay={userDropdown}
        placement="bottomCenter"
        className={styles.user}>
        <div>
          {
            this.state.user != null ?
              <Avatar
                icon="user"
                src={this.state.user.avatar}
                dot='true'
              />
              :
              <span>注册/登录</span>
          }
        </div>
      </Dropdown>
    );
  }
}
