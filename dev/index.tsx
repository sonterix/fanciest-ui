import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import '../src/styles/index.scss'
import '../src/styles/icons.css'

import { Button, ButtonLink, CircleButton, CircleButtonLink, Icon } from '../src/components'

const Dev = (): JSX.Element => {
  return (
    <section className="dev">
      <div className="dev__block">
        <h1 className="dev__block__title">Buttons</h1>

        <h2 className="dev__block__subtitle">Components</h2>

        <div className="dev__block__preview">
          <Button>Button</Button>
          <ButtonLink href="#">ButtonLink</ButtonLink>
          <CircleButton>
            <Icon icon="icon-email" />
          </CircleButton>
          <CircleButtonLink href="#">N</CircleButtonLink>
        </div>

        <h2 className="dev__block__subtitle">Props</h2>

        <div className="dev__block__preview">
          <Button color="black">Click me</Button>

          <Button color="white">
            <span>t</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
          </Button>

          <CircleButton color="yellow">{12}</CircleButton>

          <Button color="orange">{null}</Button>

          <ButtonLink href="#" color="rose">
            Nick
          </ButtonLink>

          <CircleButton color="red">
            <Icon icon="icon-chat" />
          </CircleButton>

          <CircleButton color="green" layout="outlined">
            <Icon icon="icon-chat" />
          </CircleButton>

          <Button color="teal" before={<Icon icon="icon-chat" />}>
            Click me
          </Button>

          <Button color="turquoise" layout="outlined" after={<Icon icon="icon-chat" />}>
            <span>Push me</span>
            <span>Pull me</span>
          </Button>

          <CircleButtonLink href="#" color="blue" size="sm">
            <Icon icon="icon-chat" />
          </CircleButtonLink>

          <Button color="purple" size="sm" layout="outlined">
            <Icon icon="icon-chat" />
          </Button>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root'))
