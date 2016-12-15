import React, { Component } from 'react';
import { Image, Text, View, ScrollView ,StyleSheet,AppRegistry ,TouchableHighlight,TextInput} from 'react-native';
import { Container, Header, Title, Content, Button, InputGroup, Input, Footer, FooterTab, Badge } from 'native-base';
import {observer} from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import githubStore from './js/store/githubStore';

@observer
export default class Gitapp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      searchString:''
    };
  }

    sendString(){
   githubStore.fetchData(this.state.searchString);
   console.log(githubStore.githubList);
   this.setState({
    searchString : ' '
   })

  }

  render() {
    return (
      
        <Container>
            <Header>
                <Button onPress={this.props.onPress} transparent>
                    <Icon name="home" style={{color: "green" ,fontSize:25}}/>
                </Button>
                <Title style={{color: 'green'}}>GitHub API Search</Title>
            </Header>
            <Content>
                <TouchableHighlight>
                      <View style={{flexDirection: 'row'}}>
                <TextInput 
                  style={{width:150,margin:10, alignItems:'stretch', borderWidth:1}} 
                  onChangeText={(text) => this.setState({searchString: text})}
                  value={this.state.searchString}
                  onSubmitEditing={() => this.sendString()}
                  blurOnSubmit={false}
                />
            <Button primary 
            onPress={() => this.sendString()}
            style={{marginTop:10 ,marginBottom:10 ,marginLeft:70 ,padding:5,justifyContent:'flex-end'}}>
                Search GitHub
            </Button>
            </View>
                   </TouchableHighlight>
                <View style={{borderBottomColor: "#aaa", borderBottomWidth: 1, marginTop: 20}} />
               

            </Content>
            <Footer>
                
            </Footer>
        </Container>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('Gitapp', () => Gitapp);
