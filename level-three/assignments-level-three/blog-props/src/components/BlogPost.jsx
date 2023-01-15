import React from 'react';

function BlogPost({ author, date, subTitle, title }) {
  return (
    <div className='blog--post'>
      <a href='#'>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </a>
      <p>
        Posted by <a href=''>{author}</a> on {date}
      </p>
      <div className='hr'></div>
    </div>
  );
}

export default BlogPost;
