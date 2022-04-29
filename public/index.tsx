import React from 'react'
import ReactDOM from 'react-dom'

import '../src/scss/styles.scss'
import { CircleButton, Icon } from '../src/components'

const Preview = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <CircleButton color="black">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="white">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="yellow">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="orange">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="rose">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="red">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="green" layout="outlined" disabled>
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="teal" disabled>
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="turquoise" layout="outlined">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="blue" size="sm">
        <Icon icon="icon-chat" />
      </CircleButton>

      <CircleButton color="purple" size="sm" layout="outlined">
        <Icon icon="icon-chat" />
      </CircleButton>
    </div>
  )
}

ReactDOM.render(<Preview />, document.getElementById('root'))
