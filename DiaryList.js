/**
 * Created by sdb on 17/3/9.
 */

//ES5规定的JavaScript执行模式，strict是严格执行模式
'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,

}from 'react-native';

let MCV = require('./MVC');
let AngryMood = require('./wade.jpg');

export default class DiaryList extends Component {

    //自行实现功能
    updateSearchKeyword(newWord) {
        console.log("updateSearchKeyword(" + newWord + ")");
    }

    render() {
        return (
            <View style={MCV.container}>
                <View style={MCV.firstRow}>
                    (Platform.OS === 'android')?
                        (<Text></Text>)
                    :
                    (<TextInput autoCapitalize="none" placeholder='输入搜索关键字' clearButtonMode="white-editing"
                               onChangeText={this.updateSearchKeyword} style={MCV.searchBarTextInput}/>
                    <TouchableOpacity>
                        <Text style={MCV.middleButton}>
                            写日记
                        </Text>

                    </TouchableOpacity>)

                </View>


                <View style={MCV.diaryAbstractList}>

                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle} source={AngryMood}/>
                    </View>

                    <View style={MCV.subViewInReader}>
                        <TouchableOpacity onPress={this.props.selectListItem}>
                            <Text style={MCV.textInReader}>
                                日记列表标题
                            </Text>
                        </TouchableOpacity>
                        <Text style={MCV.textInReader}>
                            日记列表时间
                        </Text>

                    </View>

                </View>
            </View >
        );
    }
}

module.exports = DiaryList;

