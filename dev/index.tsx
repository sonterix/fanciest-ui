import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import '../src/styles/index.scss'
import '../src/styles/icons.css'

import {
  Button,
  ButtonLink,
  CircleButton,
  CircleButtonLink,
  Font,
  H1,
  H2,
  H3,
  H4,
  H5,
  Icon,
  P1,
  P2,
  P3,
  P4
} from '../src/components'

const Dev = (): JSX.Element => {
  return (
    <section className="dev">
      <div className="dev__block">
        <h1 className="dev__block__title">Buttons</h1>

        <h2 className="dev__block__subtitle">Components</h2>

        <div className="dev__block__preview">
          <Button>Button</Button>
          <ButtonLink href="#">Button Link</ButtonLink>
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

          <Button color="orange">{['Hello', 'World']}</Button>

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

      <div className="dev__block">
        <h1 className="dev__block__title">Typography</h1>

        <div className="dev__block__preview">
          <H1 weight={900}>Heading 1</H1>
          <H2 weight={800}>Heading 2</H2>
          <H3 weight={700}>Heading 3</H3>
          <H4 weight={600}>Heading 4</H4>
          <H5 weight={500}>Heading 5</H5>
          <P1 weight={400}>Paragraph 1</P1>
          <P2 weight={300}>Paragraph 2</P2>
          <P3 weight={200}>Paragraph 3</P3>
          <P4 weight={100}>Paragraph 4</P4>
          <Font as="div" family="main">
            Custom 1
          </Font>
          <Font as="span" family="heading">
            Custom 2
          </Font>
          <Font as="del" media={{ default: 10, xs: 11, sm: 12, md: 13, lg: 14, xl: 15, xxl: 16, xxxl: 17 }}>
            Custom 3
          </Font>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root'))
