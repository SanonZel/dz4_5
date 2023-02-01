import React from 'react'
import { useSelector } from 'react-redux'

function MyInput() {
  const { numbers } = useSelector(state => state)
  const regExp = /\d/g
  return <div style={numbers ==='Access Granted' ?{color:'green',fontSize:'24px'} :{}} className='value'>{numbers.replace(regExp,'*')}</div>
}

export default MyInput