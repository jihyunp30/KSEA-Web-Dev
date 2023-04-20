import React from 'react';
import { Card } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div class="card-columns">
      {posts.map(post => (
        <Card
          key={post.id}
          className="mb-2"
        >
          <Card.Header>{new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              {/* <a href={"/announcement/" + post.id}></a> */}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  //   <ul className='list-group mb-4'>
  //   {posts.map(post => (
  //     <li key={post.id} className='list-group-item'>  {/*} 11~17 이 list component. 여기서 card를 쓴다. {*/}
  //       <a href={"/announcement/" + post.id}>
  //         {post.title} <br></br>
        
  //       </a>
  //       {new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}
  //     </li>
  //   ))}
  // </ul>
  );
};





export default Posts;

