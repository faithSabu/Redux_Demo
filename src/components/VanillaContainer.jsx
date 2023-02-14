import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyVanilla } from '../redux/vanilla/vanillaActions'

function VanillaContainer() {
    const numOfVanilla = useSelector(state=>state.vanilla.numOfVanilla)
    const dispatch = useDispatch()
  return (
    <div>
        <h2 onClick={()=>console.log(numOfVanilla)}>Number of Vanilla - {numOfVanilla}</h2>
        <button onClick={()=>dispatch(buyVanilla())}>Buy Vanilla</button>
    </div>
  )
}

export default VanillaContainer