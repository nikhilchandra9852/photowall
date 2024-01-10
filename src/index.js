import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import Main from './Components/Main';

import "./styles/stylesheet.css"




// const element = React.createElement("ol",null,
// tasks.map((p,index)=>React.createElement('li',{key:index},p))
// );

// const element =
//   <div>
    
//     <ol>
//       {tasks.map((task, index) => <li key={index}>{task}</li>)}
//     </ol>
//   </div>




ReactDOM.render(<Main/>,document.getElementById('root'));


