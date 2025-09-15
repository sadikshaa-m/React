import React from 'react'
import Card from '../component/Card'
import { FaBars, FaChessQueen } from 'react-icons/fa'

export default function Card1() {
  return (
    //props
    <div>
      <Card label={'Branding'} icons={<FaChessQueen size={30}/>}/>
      <Card label={'Content Writing'} icons={<FaBars size={30}/>}/>
    </div>
  )
}
