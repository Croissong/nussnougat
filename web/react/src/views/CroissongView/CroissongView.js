import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class CroissongView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>Le Croissong</h1>
        <Link to='/'>Nussnougat || </Link>
        <Link to='/donkebap'>Doener macht schoener ||</Link>
        <Link to='/counter'>Counter</Link>
      </div>
    )
  }
}

export default connect()(CroissongView)
