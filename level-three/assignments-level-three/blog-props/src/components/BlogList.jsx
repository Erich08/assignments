import React from 'react';
import data from '../data';
import BlogPost from './BlogPost';
function BlogList() {
  const blogPosts = data.map((info) => {
    return <BlogPost key={info.title} {...info} />;
  });
  return (
    <div className='blog--container'>
      {blogPosts}
      <div className='btn-container'>
        <a class='posts-btn' href='#!'>
          Older Posts →
        </a>
      </div>
    </div>
  );
}

export default BlogList;
