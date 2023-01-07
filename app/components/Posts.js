import React from 'react';

const Posts = ({ posts, loading }) => {

    const post = posts.post
    const date = new Date(post.modified)
    const dateFormatted = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`  
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title.rendered}
        </li>
      ))}
    </ul>
    );
};

export default Posts;