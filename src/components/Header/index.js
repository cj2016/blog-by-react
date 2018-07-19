import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../static/css/header.less'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="m clearfix">
                    <div className="logo fl">大头的园子</div>
                    <div className="nav fr">
                        <ul>
                            <li>
                                <NavLink exact to='/' activeClassName='active' >首页</NavLink>
                            </li>
                            {/* <li><Link>前端</Link></li>
                            <li><Link>乱七八糟</Link></li>
                            <li><Link>胡说</Link></li> */}
                            <li>
                                <NavLink to='/message' activeClassName='active' >留言</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}