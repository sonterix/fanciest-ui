import React from 'react'
import ReactDOM from 'react-dom'

import '../src/scss/styles.scss'
import { CircleLink, Icon } from '../src/components'

const Preview = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <CircleLink href="#" color="black">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="white">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="yellow">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="orange">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="rose">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="red">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="green" layout="outlined">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="teal">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="turquoise" layout="outlined">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="blue" size="sm">
        <Icon icon="icon-chat" />
      </CircleLink>

      <CircleLink href="#" color="purple" size="sm" layout="outlined">
        <Icon icon="icon-chat" />
      </CircleLink>
    </div>
  )
}

ReactDOM.render(<Preview />, document.getElementById('root'))
