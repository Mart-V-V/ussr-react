import React, { useState, useEffect } from 'react';

export const Pages = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('http://cms/apics/api-pages.php')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div>
        <h1>Category List</h1>
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
