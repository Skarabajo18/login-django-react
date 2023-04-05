import React, { useState } from 'react';



function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    PostForm(title, content);
  };

    return (
      <div>
       <h1>Create Post</h1>
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="title">Title:</label>
           <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
         </div>
         <div>
           <label htmlFor="content">Content:</label>
           <textarea id="content" value={content} onChange={e => setContent(e.target.value)} />
         </div>
         <button type="submit">Create Post</button>
       </form>
     </div>
    )
  };

  export default PostForm;










