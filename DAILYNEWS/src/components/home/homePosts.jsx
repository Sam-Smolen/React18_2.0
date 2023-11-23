import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/thunks/thunks";
import { Button } from "react-bootstrap";


const HomePosts = () =>{
    const homePosts = useSelector((state)=>state.posts)
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchPosts({page:1,order:"desc",limit:6}))
    },[])

    const loadMorePosts = () => {
        const page = homePosts.articles.page + 1
        dispatch(fetchPosts({page,order:"desc",limit:6}))
    }


    return(
        <>
        {!homePosts.articles.end && !homePosts.articles.loading ? 
        <Button variant="outline-dark" onClick={()=>{loadMorePosts()}}>
        Load more posts
       </Button>
        :null}
           
        </>
    )
}

export default HomePosts;