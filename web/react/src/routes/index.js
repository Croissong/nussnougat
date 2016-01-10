import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import DonkebapView from 'views/DonkebapView/DonkebapView'
import CroissongView from 'views/CroissongView/CroissongView'
import CounterView from 'views/CounterView/CounterView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='donkebap' component={DonkebapView} />
    <Route path='croissong' component={CroissongView} />
    <Route path='counter' component={CounterView} />
    <Redirect from='*' to='/404' />
  </Route>
)
