// ## main Component
import React,{Component} from 'react';
import List from './List';
import Title from './Title';
class Main extends Component{
    render() {
      return <div>
        <Title title = "To do"/>
        <List tasks ={['Nikhil','Chandra']}/>
        <List tasks ={['sbi','aisn']}/>
      </div>
    }
  }

export default Main;