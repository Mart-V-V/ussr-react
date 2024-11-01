<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from "react";
import Dates from "http://cms/apics/api-posts.php";
import { Link } from "react-router-dom";
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774


export const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('http://cms/apics/api-posts.php')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
<<<<<<< HEAD
    <div>
      <h1>Posts List</h1>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)}>Back to List</button>
        </div>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.ID} onClick={() => handlePostClick(post)}>
              {post.ID}: {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
=======
      <ul>
      {Dates?.map(date => (
        <li key={date.ID}>
            <Link to={`/react/post/${date.ID}`}>
                {date.post_title}
            </Link>
            {date.post_content}
        </li>
      ))}
      </ul>
  );
}
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
