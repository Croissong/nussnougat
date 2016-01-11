import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
    render () {
      return (
	<div className='footer'>
	<hr />
        <Link to='/'>{LINK_DESC['/']}</Link>
	<Link to='/donkebap'>{LINK_DESC['/donkebap']}</Link>
	<Link to='/counter'>{LINK_DESC['/counter']}</Link>
	</div>
      )
    }
}

const LINK_DESC = {
  '/': 'Nussnougat',
  '/croissong': 'Nussnougat Croissong',
  '/donkebap': 'Doener macht schoener',
  '/counter': 'Counter'
}
