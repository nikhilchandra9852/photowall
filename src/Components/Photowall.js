import React,{Component} from "react";

import Photo from './Photo'

import PropTypes from 'prop-types'


function Photowall(props){
    return <div className="photoGrid">
            {props.posts.map((post,index)=> <Photo key={index} post={post} onRemovePhoto = {props.onRemovePhoto}/>)}

        </div>
}

Photowall.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}



export default Photowall