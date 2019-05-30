import React, { Component } from 'react'
import { Row } from 'antd'
import './index.css'
import formatDate from './../../utils/formatDate'

export default class index extends Component {
    constructor(params){
        super(params);
        this.state={
            time:''
        }
    }
    componentWillMount(){
        setInterval ( ()=>{
            let now = new Date();
            let timer = formatDate(now);
            this.setState({
                timer
            })
        },1000)
    }
    render() {
        return (
            <div>
                <Row className='header-top'>
                    <span className='header-name'>欢迎，xxx</span>
                    <a href=''>退出</a>
                </Row>
                <Row className='header-time'>
                    {this.state.timer}
                </Row>
            </div>
        )
    }
}
