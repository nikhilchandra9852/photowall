// ## main Component
import React,{Component} from 'react';
import Title from '../../src/Playground/Title';

import Photowall from './Photowall';
 
class Main extends Component{
    constructor(){
      super();
      this.state = {
        posts: []
      }
      this.removePhoto=this.removePhoto.bind(this);
    console.log("constructor");
    }

    removePhoto(postRemoved){
      console.log(postRemoved.description)

      this.setState((state)=>({
        posts: state.posts.filter(post=> post!==postRemoved)

      }))

    }

    // this method will call immediately after the component is inserted
    // into the dom and it will update the state to the data 
    // fetching from the backend.
    componentDidMount(){
      const data = getImagesFromDb()
      // it will set new state.
      this.setState({
        posts: data
      })

      console.log("Inside ComponentDidMount")

    } 

    // this method will call before the component is inserted into the dom.
    componentWillMount(){


    }

    // this method will call whenever the component will re render
    // or state will be updated
    componentDidUpdate(prevProps,prevState){
      alert("re-render");
      console.log(prevState.posts)
      console.log(this.state)

    }



    render() {
      console.log("Insider the render")
      return <div>
          <Title title="Photowall"/>
          <Photowall posts= {this.state.posts} onRemovePhoto = {this.removePhoto}/>
      </div>
    }
  }

  // this method will call backend api 
function getImagesFromDb(){
    return [{
      id: "0",
      description: "beautiful landscape",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg"
    }, {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
      id: "2",
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
  }

export default Main;