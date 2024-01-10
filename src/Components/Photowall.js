import React,{Component} from "react";

import Photo from './Photo'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

// anchor tag,href attribute
function Photowall(props){
    return <div>
        <Link className="addIcon" to="/AddPhoto"></Link>
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}

        </div>
    </div>
}

Photowall.prototypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
    addPhotoScreen: PropTypes.func.isRequired
}



export default Photowall