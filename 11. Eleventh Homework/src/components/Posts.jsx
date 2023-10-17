import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostsRequest } from "../actions/postsActions";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostsReducer.posts);
  const greska = useSelector((state) => state.PostsReducer.error);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  return (
    <div id="posts">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>
              <span>Name: </span>
              {post.title}
            </p>
            <p>
              <span>Body: </span>
              {post.body}
            </p>
            <hr />
          </div>
        );
      })}
      {greska && <h1>{greska}</h1>}
    </div>
  );
};
