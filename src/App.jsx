
import { Provider } from 'react-redux'
import './App.css'
import Calculator from './components/calculator/Calculator'
import store from './redux/Store'
import React from 'react'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calculator/>
      </Provider>
    </div>
  )
}

export default App
