/**
 * Created by sdb on 17/3/9.
 */

//在该文件中定义了一些公用的样式表

'use strict';
import React, {Component} from 'React';

import {
    StyleSheet,
    Dimensions,

} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

let textSize = totalWidth/19;
let readingUITitleHeight = textSize *6;

let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;




let MCV = StyleSheet.create({

    container:{
        top:2,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',
        borderColor:'black',
        borderWidth:1,
    },

    firstRow:{
        height:textSize*1.4+2,
        flexDirection:'row',
        width:totalWidth - 4,
        justifyContent:'space-around',
        margin:2,
    },

    longButton:{
        height:textSize *1.4,
        backgroundColor:'gray',
        width:textSize*10,
        borderRadius:8,
        textAlign:'center',
        fontSize:textSize,
    },

    middleButton:{
        height:textSize*1.4,
        backgroundColor:'gray',
        width:textSize*5,
        borderRadius:8,

    },

    //日记列表界面实现假列表的View
    diaryAbstractList:{
        flex:1,
        margin:4,
        width:totalWidth - 4,
        justifyContent:'center',
        backgroundColor:'gray',
    },

    // 输入日记正文的TextInput样式
    diaryBodyStyle:{
        flex:1,
        width:totalWidth - 8,
    },

    //短按钮样式
    smallButton:{
        height:textSize * 1.4,
        backgroundColor:'gray',
        width:textSize*3,
        borderRadius:8,
        textAlign:'center',
        fontSize:textSize,
    },

    //心情组件样式,图片组件
    moodStyle:{
        height:textSize*3.2,
        width:textSize*3.2,
        borderRadius:textSize*1.6,
    },

    //显示标题和时间组件
    subViewInReader:{
        width:totalWidth - 5 - textSize*3.2,
    },

    textInReader:{
        height:textSize *1.4,
        fontSize:textSize,
        backgroundColor:'gray',
    },

    secondRow:{
        flexDirection:'row',
        alignItems:'center',
    },

    titleInputStyle:{
        fontSize:textSize,
        backgroundColor:'grey',
        margin:4,
        borderWidth:2,
        borderColor:'black',
    },

    searchBarTextInput:{
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        height:textSize*1.4,
        width:textSize*10,
        paddingTop:0,
        paddingBottom:0,
        top:1,
        left:1,
        fontSize:14,
    }

});

module.exports = MCV;




