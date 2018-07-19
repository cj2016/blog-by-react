import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/home.less';

import fugu from '../../static/images/0724_fugu_1.jpeg';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="banner"></div>
                <div className='m clearfix'>
                    <div className="left-wrap fl">
                        <ul className="article-list">
                            <li className='clearfix'>
                                <div>
                                    <span className='pic'>
                                        <img src={fugu} alt="" />
                                    </span>
                                    <h3>
                                        <Link to='/'>陌上花开，可缓缓归矣</Link>
                                    </h3>
                                    <p className='desc'>用最简单的代码，可实现瀑布流布局，没有繁琐的css，没有jq，只需要做到以下就可以实现瀑布流的效果。思路很简单，堪称是三列布局，分别用三个ul来调用，帝国cms列表模版，。。。。</p>
                                </div>
                                <div className='statistics clearfix'>
                                    <span className='tag'><i className='iconfont icon-tag'/> Html5</span>
                                    <span className='time'><i className="iconfont icon-time" />2018-08-19</span>
                                    <span className='pulse'><i className="iconfont icon-pulse" />200</span>
                                    <Link to='/' className='fr'>阅读原文</Link>
                                </div>
                            </li>
                            <li className='clearfix'>
                                <div>
                                    <h3>
                                        <Link to='/'>陌上花开，可缓缓归矣</Link>
                                    </h3>
                                    <p className='desc'>用最简单的代码，可实现瀑布流布局，没有繁琐的css，没有jq，只需要做到以下就可以实现瀑布流的效果。思路很简单，堪称是三列布局，分别用三个ul来调用，帝国cms列表模版，。。。。</p>
                                </div>
                                <div className='statistics clearfix'>
                                    <span className='tag'><i className='iconfont icon-tag'/> Html5</span>
                                    <span className='time'><i className="iconfont icon-time" />2018-08-19</span>
                                    <span className='pulse'><i className="iconfont icon-pulse" />200</span>
                                    <Link to='/' className='fr'>阅读原文</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right-wrap fr">
                        <aside className='about'>
                            <div className="avatar"></div>
                            <p>大头 - 曹静</p>
                            <p>职业：WEB前端开发程序猿</p>
                            <p>籍贯：重庆</p>
                            <p>邮箱：2479149593@qq.com</p>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
