/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    //iOS状态栏
    // StatuBarIOS,
    //AsyncStorage存储工具
    AsyncStorage,
} from 'react-native';

//导入预先设定的组件
let DiaryList = require('./DiaryList');
let DiaryReader = require('./DiaryReader');
let DiaryWriter = require('./DiaryWriter');

let angryMood = require('./image/angry.png');
let happyMood = require('./image/happy.png');
let peaceMood = require('./image/peace.png');
let sadMood = require('./image/sad .png');
let miseryMood = require('./image/misery.png');


export default class RNDataTest extends Component {

    //定义成员变量
    realDairyList: null;
    listIndex: null;

    //getTimeString
    getTimeString(ctime){
        let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' +
            ctime.getDay() + '日 星期' + (ctime.getDay() + 1) + ctime.getHours() + ':' +
            ctime.getMinutes();

        return timeString;
    }

    //冒泡排序算法对列表进行排序
    bubleSortDiaryList() {
        let tempObj;
        let len1 = this.realDairyList.length;
        let len2 = len1 - 1;

        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2 - i; j++) {
                if (this.realDairyList[j].index > this.realDairyList[j + 1].index) {
                    tempObj = this.realDairyList[j];
                    this.realDairyList[j] = this.realDairyList[j + 1];
                    this.realDairyList[j + 1] = this.realDairyList[j];
                }
            }
        }
    }

    //构造函数
    constructor() {
        AsyncStorage.getAllKeys().then(
            (keys) => {
                AsyncStorage.multiGet(keys).then(
                    (results) => {
                        this.realDairyList = Array();
                        for (let i = 0; i < results.length; i++) {
                            this.realDairyList[i] = JSON.parse(results[i][1]);
                        }
                        //对日记列表进行冒泡排序
                        this.bubleSortDiaryList();
                        if (j > 0) {
                            j--;
                            this.listIndex = j;

                            //获取新的日记信息，包括心情，内容，题目
                            let newMoodIcon;
                            switch (this.realDairyList[j].mood) {
                                case 2:
                                    newMoodIcon = angryMood;
                                    break;

                                case 3:
                                    newMoodIcon = sadMood;
                                    break;

                                case 4:
                                    newMoodIcon = happyMood;
                                    break;

                                case 5:
                                    newMoodIcon = miseryMood;
                                    break;

                                default:
                                    newMoodIcon = peaceMood;
                            }
                            let newtitle = this.realDairyList[j].title;
                            let newbody = this.realDairyList[j].body;


                            //使用Date对象获取时间字符串
                            let ctime = new Date(this.realDairyList[j].time);
                            // let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' +
                            //     ctime.getDay() + '日 星期' + (ctime.getDay() + 1) + ctime.getHours() + ':' +
                            //     ctime.getMinutes();
                            let timeString = this.getTimeString(ctime);


                            //设置this的State,取代setState函数，并且将最后一条数据写入状态机变量
                            this.state = {
                                diaryMood: newMoodIcon,
                                diaryTime: timeString,
                                diaryTitle: newtitle,
                                diaryBody: newbody,
                            };
                        } else {
                            this.state = {
                                diaryTime: '没有历史日记',
                                diaryTitle: '没有历史日记',
                                diaryBody: '',
                            };
                        }
                    }
                ).catch((error) => {
                    console.log('then Error' + error);
                });
            }, (error) => {
                console.log('getAllKeys Error' + error);
            });

        //由于上面的操作是异步的，不会马上得到数据，所以在这里给状态机变量赋值

        this.state = {
            uiCode: 1,
            diaryMood: peaceMood,
            diaryTime: '读取中……',
            diaryTitle: '读取中……',
            diaryBody: '读取中……',
        }
    }

    //读前一篇
    readingPreviousPressed() {
        if (this.listIndex === 0)
            return;

        this.listIndex--;
        let index = this.listIndex;
        let newMoodIcon;
        switch (this.realDairyList[index].mood) {
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon = sadMood;
                break;
            case 4:
                newMoodIcon = happyMood;
                break;
            case 5:
                newMoodIcon = peaceMood;
                break;
            default:
                newMoodIcon = peaceMood;
        }

        let newtitle = this.realDairyList[index].title;
        let newbody = this.realDairyList[index].body;
        let ctime = new Date(this.realDairyList[index].time);
        // let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' +
        //     ctime.getDay() + '日 星期' + (ctime.getDay() + 1) + ctime.getHours() + ':' +
        //     ctime.getMinutes();

        let timeString = this.getTimeString(ctime);

        //将查询到的上一篇日记的内容放入状态机变量
        this.state = {
            diaryMood: newMoodIcon,
            diaryTime: timeString,
            diaryTitle: newtitle,
            diaryBody: newbody,
        }


    }

    //读后一篇
    readingNextPressed() {
        if (this.realDairyList.length === 0)
            return;
        if (this.listIndex === (this.realDairyList.length - 1))
            return;

        this.listIndex ++ ;

        let index = this.listIndex;
        let newMoodIcon;
        switch (this.realDairyList[index].mood) {
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon = sadMood;
                break;
            case 4:
                newMoodIcon = happyMood;
                break;
            case 5:
                newMoodIcon = peaceMood;
                break;
            default:
                newMoodIcon = peaceMood;
        }

        let newtitle = this.realDairyList[index].title;
        let newbody = this.realDairyList[index].body;
        let ctime = new Date(this.realDairyList[index].time);
        // let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月' +
        //     ctime.getDay() + '日 星期' + (ctime.getDay() + 1) + ctime.getHours() + ':' +
        //     ctime.getMinutes();
        let timeString = this.getTimeString(ctime);

        //将查询到的上一篇日记的内容放入状态机变量
        this.state = {
            diaryMood: newMoodIcon,
            diaryTime: timeString,
            diaryTitle: newtitle,
            diaryBody: newbody,
        }
    }

    //返回按钮
    returnPressed(){
        this.state = {
            uiCode:1,
        };

    }

    //保存日记并返回
    saveDiaryAndReturn(newDiaryMood,newDiaryBody,newDiaryTitle){
        let ctime = new Date();
        let timeString = this.getTimeString(ctime);


        let aDiary = Object();
        aDiary.title = newDiaryTitle;
        aDiary.body = newDiaryBody;
        aDiary.mood = newDiaryMood;
        aDiary.time = ctime;
        aDiary.sectionId = ''+ ctime.getFullYear() + ' 年 ' + (ctime.getMonth() + 1) + ' 月 ';



    }


    //在类中定义各种成员函数
    showDiaryList() {
        return (
            <DiaryList />)
            ;
    }

    showDiaryReader() {
        return (
            <DiaryReader />
        );
    }

    showDiarywriter() {
        return (
            <DiaryWriter />
        );
    }

    //组件生命周期函数，该函数在render之前执行，做渲染前的准备工作
    componentWillMount() {
        // if (StatusBarIOS != null){
        //     StatusBarIOS.setHider(true);
        // }
    }


    render() {
        // return this.showDiaryReader();
        return this.showDiaryList();
        // return this.showDiarywriter();
    }
}

//组件化的开发不需要样式表

AppRegistry.registerComponent('RNDataTest', () => RNDataTest);
