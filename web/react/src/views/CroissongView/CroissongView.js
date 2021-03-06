import React from 'react'
import { connect } from 'react-redux'
import CroissongGallery from 'components/croissong_gallery'
import classes from './CroissongView.scss'
import Footer from 'components/footer'
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
      <div className={classes['gallery']}>
        <CroissongGallery />
      </div>
      <hr />
      <Footer />
      </div>
    )
  }
}

export default connect()(CroissongView)
