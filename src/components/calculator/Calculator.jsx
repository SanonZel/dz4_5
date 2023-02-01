import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../../redux/actions'
import Button from '../ui/Button'
import MyInput from '../ui/MyInput'

function Calculator() {
  const { btnArr } = useSelector(state => state)
    const dispatch=useDispatch()
    const handleClick=({target})=>{
        dispatch(getValue(target.innerText))
    }
  return (
    <div>
        <MyInput/>
      <div className="calcButtons">
        {btnArr.map(item => (
          <Button key={item} onClick={handleClick}>{item}</Button>
        ))}
      </div>
    </div>
  )
}

export default Calculator
