import React, {PureComponent} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import styles from './index.css';
import classNames from 'classnames';

const {Sider} = Layout;

export default class SiderMenu extends PureComponent {

  /**
   * 获取菜单节点
   * @param item
   * @returns {*}
   */
  getSubMenuOrItem = item => {
    if (item.children && item.children.length > 0) {//多级菜单
      return (
        <Menu.SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon}/>
              <span>{item.name}</span>
            </span>}
        >
          {
            item.children.map(function (child) {
              debugger;
              return (
                <Menu.Item key={child.key}>
                  <Link to={child.link}>
                    {child.name}
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu.SubMenu>
      )
    } else if (item.link !== "") {//单级菜单
      return (
        <Menu.Item key={item.key}>
          <Link to={item.link}>
            <Icon type={item.icon}/>
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Icon type={item.icon}/>
          <span>{item.name}</span>
        </Menu.Item>
      )
    }
  }

  /**
   * 循环创建菜单
   * @param menuData
   * @returns {*}
   */
  getMenu = (menuData) => {
    return menuData.map(item => {
      const ItemDom = this.getSubMenuOrItem(item);
      return ItemDom;
    });
  }

  render() {
    const {menuData, collapsed} = this.props;
    const siderClass = classNames({
      [styles.sider]: true,
      [styles.sider_max]: !collapsed,
      [styles.sider_min]: collapsed
    });
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={siderClass}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src='./logo.png' alt="logo"/>
            <h1>CyperApes</h1>
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className={styles.menu}
        >
          {this.getMenu(menuData)}
        </Menu>
      </Sider>
    );
  }
}
