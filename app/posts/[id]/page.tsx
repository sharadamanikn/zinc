import React from 'react'


 type Post = {
    id: string;
    title: string;
    
 };
const PostPage =  async (props: {params: Promise<{id: string}>}) => {

    const { id } = await props.params;
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    if(response.ok) {
        const post: Post = await response.json();
        return <div>{post.title}</div>
  }
  return <div>Not Found</div> 
  
};

export default PostPage