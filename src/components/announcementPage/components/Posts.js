import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <a href={"/announcement/" + post.id}>
            {post.title} {new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}
          </a>
        </li>
      ))}
    </ul>
  );
};





export default Posts;