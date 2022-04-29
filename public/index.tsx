import React from 'react'
import ReactDOM from 'react-dom'

import '../src/scss/styles.scss'
import { MainButton } from '../src/components'

const Preview = (): JSX.Element => {
  return (
    <>
      <MainButton>Button 1</MainButton>
    </>
  )
}

ReactDOM.render(<Preview />, document.getElementById('root'))
