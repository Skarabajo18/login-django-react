// // PostList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/getposts/')
//       .then(response => setPosts(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <p>By: {post.author.username}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostList;


