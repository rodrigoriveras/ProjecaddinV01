import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/api/gettable/";

export default function Test() {
  const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

  function createPost() {
    axios
      .post(baseURL, {
        userId: 10,
        id: 101,
        title: "test rodri  101",
        body: "test body rodri 101"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

//   if (!post) return "No post!"

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}