import React from 'react'

const OnePost = ({ post }) => {
  // console.log(post); dòng 12 sẽ lấy dữ liệu từ đây in ra
  return (
    <article >
      <h2 className='title'>{post.title}</h2>
      <div className="published-time">
        <i className='far fa-clock'></i>
        <span>{new Date(post.updatedAt).toDateString()}</span>
      </div>
      {/* đoạn code này có nghĩa là ảnh hưởng đến bảo mật đoạn code này, user có thể chèn đoạn của họ vào đây(KHÔNG khuyến khích dùng) */}
      <div className='content' dangerouslySetInnerHTML={{__html: post.content.html}}/>
    </article>
  )
}

export default OnePost