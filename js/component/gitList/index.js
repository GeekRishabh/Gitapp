import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Icon, Input, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import GitView from './gitView';
import todoStore from '../../store/githubStore';


@observer
class GitList extends Component {

    constructor(props) {
        super(props);
    }

    getList() {
        if(githubStore.githubList.length > 0) {
            return githubStore.githubList.map((items, index) => {
                return (
                    <GitView store={githubStore} key={index} />
                )
            });
        } else {   
            return ( 
                <Text 
            style={{alignSelf: 'center', justifyContent: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 25, color: "#999"}}>
            Begin Your Search</Text> 
        )
         }

    }

    render() {
        return (
            <View>
                <List style={{marginLeft:15 , marginRight:20}}>
                    {this.getList()}
                </List>
            </View>
        );
    }
}

export default GitList;