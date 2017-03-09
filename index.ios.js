/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    //iOS状态栏
    StatuBarIOS,
    //AsyncStorage存储工具
    AsyncStorage,
} from 'react-native';

//导入预先设定的组件
let DiaryList = require('./DiaryList');
let DiaryReader = require('./DiaryReader');
let DiaryWriter = require('./DiaryWriter');

export default class RNDataTest extends Component {

    //在类中定义各种成员函数
    showDiaryList() {
        return (
            <DiaryList />)
            ;
    }

    showDiaryReader(){
        return(
            <DiaryReader />
        );
    }

    showDiarywriter(){
        return(
            <DiaryWriter />
        );
    }

    //组件生命周期函数，该函数在render之前执行，做渲染前的准备工作
    componentWillMount(){
        if (StatusBarIOS != null){
            StatusBarIOS.setHider(true);
        }
    }


    render() {
        // return this.showDiaryReader();
        // return this.showDiaryList();
        return this.showDiarywriter();
    }
}

//组件化的开发不需要样式表

AppRegistry.registerComponent('RNDataTest', () => RNDataTest);
