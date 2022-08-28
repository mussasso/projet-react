import React from 'react'
import Divs from '../divs/Divs'

function Bridge({prits}) {
    const arr= [1 , 2 , 3 , 4]
  return (
    <div>
        {arr.map((e,index) => {
        return <Divs  prips={prits} key={index} {...e}  />
        
      })}
    </div>
  )
}

export default Bridge