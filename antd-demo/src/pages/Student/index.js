import React, { Component } from 'react'
import studentList from './../../studenData'
import { Table } from 'antd'
import axios from 'axios'
export default class index extends Component {
    componentWillMount(){
        axios.get()
        .then((res)=>{
            this.setState({
                dataSource: res.data.data.projects
            })
        })
    }
    render() {
        const dataSource = studentList;
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '联系方式',
              dataIndex: 'phone',
              key: 'phone',
            },
          ];
          
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
                This is student page
            </div>
        )
    }
}
