//import stuff
import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }

  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr, text:""});
  }

  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo:arr});
  }

  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return(
      <Text key={t} onPress = {()=> {this.deleteTodo(t)}}>
        {t}
      </Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style = {styles.header}>Notes App</Text>
          <TextInput
            style = {styles.inputStyle}
            onChangeText ={(text) => this.setState({text})}
            value = {this.state.text}
          />
          <Button
            title = "Add Todo"
            color ='white'
            onPress = {()=> {this.addTodo()}}>
          </Button>
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = {
  main:{
    flex:1,
    backgroundColor: '#2979ff',
  },
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 10

  },
  header:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
}

//export stuff
export default App;