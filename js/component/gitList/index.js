import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Icon, Input, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

//import GitView from './gitView';
import githubStore from '../../store/githubStore';


@observer
class GitList extends Component {

    constructor(props) {
        super(props);
    }
  
    // getList() {
    //     if(githubStore.githubList.length > 0) {
    //         return githubStore.githubList.map((item, index) => {
    //             return (
                    
    //                 <ListItem>{githubStore.githubList[{index}].full_name } </ListItem>
    //             )
    //         });
    //     } else {   
    //         return ( 
    //             <Text 
    //         style={{alignSelf: 'center', justifyContent: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 25, color: "#999"}}>
    //         Begin Your Search</Text> 
    //     )
    //      }

    // }

    render() {
        console.log(githubStore);
        return (
            <View>
                <List style={{marginLeft:15 , marginRight:20}}>
                  <ListItem><Text> {githubStore.githubList.total_count}</Text></ListItem>
                </List>
            </View>
        );
    }
}

export default GitList;