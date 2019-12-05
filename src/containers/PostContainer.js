import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPost, getPost} from "../modules/posts";
import Post from "../componets/Post";

function PostContainer({postId}) {
    const { data, loading, error } = useSelector(state => state.posts.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
        return () => {
            dispatch(clearPost())
        }
    }, [postId, dispatch]);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러발생!</div>
    if (!data) return null;

    return (
        <Post post={data}/>
    )
}

export default PostContainer;