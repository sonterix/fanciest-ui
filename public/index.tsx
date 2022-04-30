import React from 'react'
import ReactDOM from 'react-dom'

import '../src/scss/styles.scss'
import { Button, Icon } from '../src/components'

const Preview = (): JSX.Element => {
  return (
    <section style={{ padding: '15px', width: '100vw', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <h1 style={{ marginBottom: '15px' }}>Buttons</h1>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button color="black">A</Button>

        <Button color="white">
          <span></span>
          <span>V</span>
          <span></span>
        </Button>

        <Button color="yellow">{12}</Button>

        <Button color="orange">{null}</Button>

        <Button color="rose">Nick</Button>

        <Button color="red">
          <Icon icon="icon-chat" />
        </Button>

        <Button color="green" layout="outlined">
          <Icon icon="icon-chat" />
        </Button>

        <Button color="teal" before={<Icon icon="icon-chat" />}>
          Click me
        </Button>

        <Button color="turquoise" layout="outlined" after={<Icon icon="icon-chat" />}>
          <span>Push me</span>
          <span>Pull me</span>
        </Button>

        <Button color="blue" size="sm">
          <Icon icon="icon-chat" />
        </Button>

        <Button color="purple" size="sm" layout="outlined">
          <Icon icon="icon-chat" />
        </Button>
      </div>
    </section>
  )
}

ReactDOM.render(<Preview />, document.getElementById('root'))
