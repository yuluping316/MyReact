import React from 'react'
const data = [1, 2, 3, 4, 5, 6]
export default function Test() {
  return (
    <div className='Test'>
      {
        data.map((i) => (
          <p key={i}>{i}</p>
        ))
      }
    </div>
  )
}
