import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPost, getPost} from "../modules/posts";
import Post from "../componets/Post";
import {reducerUtils} from "../lib/asyncUtils";

function PostContainer({postId}) {
    const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩중...</div>
    if (error) return <div>에러발생!</div>
    if (!data) return null;

    return (
        <Post post={data}/>
    )
}

export default PostContainer;