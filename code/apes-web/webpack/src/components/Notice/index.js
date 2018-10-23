import React, {PureComponent} from 'react';
import {Icon, Badge, Drawer, Collapse, List, Avatar} from 'antd';
import styles from './index.css';

export default class Notice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
      noticeCount: 15
    };
  }

  /**
   * 展开抽屉
   */
  showDrawer = () => {
    this.setState({
      drawerVisible: true
    })
  }

  /**
   * 关闭抽屉
   */
  closeDrawer = () => {
    this.setState({
      drawerVisible: false
    })
  }

  /**
   * 获取List item
   * @param item
   * @returns {*}
   */
  getListItems = (item) => {
    return (
      <List.Item className={styles.list}>
        <List.Item.Meta
          title={item.title}
          avatar={<Avatar src={item.avatar}/>}
          description={
            <div>
              <div
                title={item.desc}
                className={styles.desc}>
                {item.desc}
              </div>
              <div className={styles.time}>{item.time}</div>
            </div>
          }
        >
        </List.Item.Meta>
      </List.Item>
    )
  }

  /**
   * 获取List header
   * @param title
   * @param icon
   * @returns {*}
   */
  getListHeader=(title,icon)=>{
    return(
      <div className={styles.listHeader}>
        <Icon type={icon}/>
        <span style={{paddingLeft: '12px'}}>{title}</span>
      </div>
    )
  }

  render() {
    const {drawerVisible, noticeCount} = this.state;

    const msgSource = [
      {
        title: '曾岑 评论了你',
        avatar: './img/avatar/user1.png',
        desc: '故园东望路漫漫，双袖龙钟泪不干。马上相逢无纸笔，凭君传语报平安。',
        time: '刚刚'
      }, {
        title: '李白 回复了你',
        avatar: './img/avatar/user2.png',
        desc: '赵客缦胡缨，吴钩霜雪明。银鞍照白马，飒沓如流星。' +
          '十步杀一人，千里不留行。事了拂衣去，深藏身与名。' +
          '闲过信陵饮，脱剑膝前横。将炙啖朱亥，持觞劝侯嬴。' +
          '三杯吐然诺，五岳倒为轻。眼花耳热后，意气素霓生。' +
          '救赵挥金槌，邯郸先震惊。千秋二壮士，烜赫大梁城。' +
          '纵死侠骨香，不惭世上英。谁能书阁下，白首太玄经。',
        time: '1小时前'
      }, {
        title: '王维 评论了你',
        avatar: './img/avatar/user3.png',
        desc: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
        time: '昨天'
      }, {
        title: '苏轼 评论了你',
        avatar: './img/avatar/user4.png',
        desc: '纵使相逢应不识，尘满面，鬓如霜。',
        time: '2018-07-25'
      },
    ];

    const todoSource = [];

    return (
      <div
        className={styles.notification}
      >
        <Badge count={noticeCount}>
          <Icon type="bell" className={styles.icon} onClick={this.showDrawer}/>
        </Badge>
        <Drawer
          title={
            <div>
              <span>消息/通知/待办</span>
            </div>
          }
          placement="right"
          closable={false}
          onClose={this.closeDrawer}
          visible={drawerVisible}
          width={336}
          style={{padding: "0px"}}
        >
          <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
            <Collapse.Panel
              style={{padding:'0'}}
              key="1"
              header={this.getListHeader('消息','message')}
            >
              <List
                dataSource={msgSource}
                renderItem={item => (this.getListItems(item))}
              />
            </Collapse.Panel>
            <Collapse.Panel
              key="2"
              header={this.getListHeader('通知','bell')}
            >
              <p>1.周巧艳是猪...</p>
              <p>2.周巧艳是猪...</p>
            </Collapse.Panel>
            <Collapse.Panel
              key="3"
              header={this.getListHeader('待办','calendar')}
            >
              <List
                dataSource={todoSource}
                renderItem={item => (this.getListItems(item))}
                locale={{emptyText: '工作全部完成了'}}
              />
            </Collapse.Panel>
          </Collapse>
        </Drawer>
      </div>
    )
  }
}
