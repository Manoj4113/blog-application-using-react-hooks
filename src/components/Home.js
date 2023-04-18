import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import { firestore } from "../firebase";

import ReactDOM from 'react-dom/client';
function Home() {
  const [post,setPost]=useState([]);

  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot)=>{
      const posts=snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()
        };
      });
     setPost(posts);
    })
  },[])
    return (
      <div className="home">
        <h1>Tech Blog</h1>
        <div id="blog-by">
          MANOJ KUMAR PADAM

          {post.map((post,index)=>(
            <div className="post" key={`post-${index}`}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.subTitle}</p>

            </div>
          ))}
        </div>
      
      </div>
    );
  }
  
  export default Home;