import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>  {/*} 11~17 이 list component. 여기서 card를 쓴다. {*/}
          <a href={"/announcement/" + post.id}>
            {post.title} <br></br>
          
          </a>
          {new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}
        </li>
      ))}
    </ul>
  );
};





export default Posts;

