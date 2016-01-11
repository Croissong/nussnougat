import React from 'react'
import { connect } from 'react-redux'
import Footer from 'components/footer'
import styles from './DonkebapView.scss'
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class DonkebapView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
      <h1>Ich esse gerne türkisch Pizza</h1>
      <Footer className={styles['footer']} Name/>
      </div>
    )
  }
}

export default connect()(DonkebapView)
