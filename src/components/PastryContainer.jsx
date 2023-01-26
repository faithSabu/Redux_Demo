import React from 'react'
import { connect } from 'react-redux'
import { buyPastry } from '../redux'

function PastryContainer(props) {
  return (
    <div>
      <h2>Number of Pastry - {props.numOfPastry} </h2>
      <button onClick={props.buyPastry}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfPastry: state.pastry.numOfPastry
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyPastry: () => dispatch(buyPastry())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PastryContainer)