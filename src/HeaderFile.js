import React from 'react'

const HeaderFile = ({title}) => {
    
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

HeaderFile.defaultProps = {
    title: "Default Title"
}

export default HeaderFile


