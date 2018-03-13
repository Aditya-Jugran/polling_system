import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import HomeView from '../routes/Home/components/HomeView'
import PropTypes from 'prop-types'
import style from 'antd/dist/antd.scss'
import '../routes/Home/components/HomeView.scss'
//rename the css file to scss

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} >
          <Route path="/" component={HomeView}/>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
