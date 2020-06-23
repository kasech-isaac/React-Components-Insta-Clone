//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"

const PostsPage = (p) => {
// set up state for your data
  const [data, setData] = useState(dummyData);
  console.log(data)


  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
     
     {data.map(p=>(
    
       <Post key={p.username} post={p} banana="high"/>
     ))}
    </div>
  );
};

export default PostsPage;
