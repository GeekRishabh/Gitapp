import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView ,Alert} from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import todoStore from '../../../store/githubStore';

@observer
export default class GitView extends Component {

    
    toggleTodo() {
        console.log(this.props.todo.completed, 'oooooo');
        // Alert.alert('Are you sure to mark the item ');
        todoStore.toggleTodo(this.props.todo.id);
    }

    deleteTodo() {
        // Alert.alert('Are you sure to delete the item');
        todoStore.deleteTodo(this.props.todo.id);
    }   

    render() {
        return (
            <ListItem>
                
               
               
            </ListItem>
        );
    }
}
