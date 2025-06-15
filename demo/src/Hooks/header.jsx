import React from 'react'

const Header = () => {
    
    console.log("header rendered");
  return (
    <div>
        <h2>header</h2>
    </div>
  )
}

export default React.memo(Header)