import React from 'react';
import NF from '../images/notfound.png'

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={NF} alt="404 | NotFound"
        style={{
          margin: '20px 0',
          maxWidth: '95%',
          maxHeight: '95%',
          objectFit: 'cover',
          mixBlendMode: 'darken'
        }}
      />
    </div>
  )
}

export default NotFound