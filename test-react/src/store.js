import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
//用于创建store 第一个参数是reducer(接收旧状态返回新状态) 第二个参数是初始化状态
let initialState = {
    num:0
}
let store = createStore(reducer, initialState);

export default store;