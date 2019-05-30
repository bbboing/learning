import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuList from './../../menuconfig.js'
import { Link } from 'react-router-dom'
import './index.css'
const {SubMenu} = Menu;
export default class NavLeft extends Component {
    createMenu = (menuList)=> {
        let list = menuList.map((elem)=>{
            if(elem.children){
                return (
                        <SubMenu key={elem.title} title={<span><Icon type={elem.icon}/>{elem.title}</span>}>
                            {this.createMenu(elem.children)}
                        </SubMenu>
                )
            }else{
                return (
                        <Menu.Item key={elem.title}>
                            <Link to={elem.path}>
                                <Icon type={elem.icon}/>{elem.title}
                            </Link>
                        </Menu.Item>
                )
            }
            
        })
        return list;
    }
    componentWillMount = ()=> {
        this.setState({
            list: this.createMenu(menuList)
        })
            
    }
    render() {
        return (
            <div>
                <div className='logobox'>
                    <img src="/imgs/logo.png"/>
                </div>
                <Menu theme='dark' mode="inline">
                    {this.state.list}
                </Menu>
            </div>
            
        )
    }
}
