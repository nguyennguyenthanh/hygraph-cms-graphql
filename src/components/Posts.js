import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {

  return (
    <div className='posts-container'>
      {
        posts?.map(post => (
          <div key={post.id} className="posts-box">
            <div className="posts-img">
              <Link to={`/article/${post.slug}`}>
                <img src={post.coverPhoto.url} alt="" />
              </Link>

              <div className="categories">
                {
                  post.categories?.map(category => (
                    <Link key={category.id} to={`/posts/${category.slug}`} className='category' style={{ background: category.color.css }}>
                      {category.name}
                    </Link>
                  ))
                }
              </div>
            </div>

            <div className="posts-text">
              <div className="category-time">
                {
                  post.categories?.map(category => (
                    <Link key={category.id} to={`/posts/${category.slug}`} style={{ color: category.color.css }}>
                      {category.name}
                    </Link>
                  ))
                }
                <span className='published-time'>
                  {new Date(post.updatedAt).toDateString()}
                </span>
              </div>
              <Link to={`/article/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>

              <p className='excerpt'>{post.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Posts