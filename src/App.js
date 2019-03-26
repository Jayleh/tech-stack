import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Header from './components/common/Header'
import LibraryList from './components/LibraryList'

import { BaseContainerView } from './styles'

const store = createStore(reducers)

const App = () => {
  return (
    <Provider store={store}>
      <BaseContainerView>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </BaseContainerView>
    </Provider>
  )
}

export default App
