import React, { useState } from 'react'
import styles from './index.less'
export default function Test(props) {
  const { name, age } = props
  const [data,setData]=useState(['a','b'])
  const handleData=()=>{
    setData([...data,'c'])
  }
  return (
    <div className={styles.Test} onClick={handleData}>
      {name + age}
      {
        data.map((i,index) => (
          <i key={index}>{i}</i>
        ))
      }
    </div>
  )
}
