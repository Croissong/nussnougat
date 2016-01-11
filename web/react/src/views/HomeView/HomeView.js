import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
      <h1>Welcome to Nussnougat & Nusspli</h1>
      <hr />
      <Link to='/croissong'>Nussnougat Croissong || </Link>
      <Link to='/donkebap'>Döner macht schoener || </Link>
      <Link to='/counter'>Counter </Link>
      </div>
    )
  }
}

export default connect()(HomeView)
