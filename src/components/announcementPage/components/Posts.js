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
          <Card.Body>
            <h4 class="card-title">{post.title}</h4>
            <Card.Text>

            <div class="row">
              <div class="col-10 text-truncate">
                {post.text}
              </div>
            </div>

              
              {/* <a href={"/announcement/" + post.id}></a> */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{new Date(post.time.seconds * 1000).toISOString().substring(0, 10)}</small>
          </Card.Footer>
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

