import React, {PureComponent} from 'react';
import {Icon, AutoComplete} from 'antd';
import classNames from 'classnames';
import styles from './index.css';

export default class HeaderSearch extends PureComponent {
  /**
   * 变量
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      searchValue: ""
    };
  }

  /**
   * 事件:切换输入框是否打开
   */
  toggleSearchOpen = () => {
    if (this.state.searchValue === null || this.state.searchValue === "") {
      this.setState({
        searchOpen: !this.state.searchOpen
      })
    }
  }

  /**
   * 全局搜索框值改变事件
   * @param value
   */
  onChangeInput = (value) => {
    this.setState({
      searchValue: value
    });
  }

  render() {
    const {placeholder, ...restProps} = this.props;

    const inputClass = classNames({
      [styles.input]: true,
      [styles.show]: this.state.searchOpen
    });

    return (
      <div className={styles.search}>
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          autoFocus="true"
          className={inputClass}
          placeholder={placeholder}
          onChange={this.onChangeInput}
        />
        <Icon
          type="search"
          key="Icon"
          onClick={this.toggleSearchOpen}
        />
      </div>
    )
  }
}
