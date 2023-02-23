import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OnePost = () => {

    const { postId } = useParams();
    console.log('one post', postId)

    const fetchOnePost = async(postId) => {
        console.log('post id, ', postId)
    }

    useState(() => {
        fetchOnePost;
    }, [])

    return (
        <p>this is post {postId}</p>
    )
};

export default OnePost;