import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import '../src/styles/index.scss'
import '../src/styles/icons.css'

import { Avatar, Button, CircleButton, Font, H1, H2, H3, H4, H5, Icon, P1, P2, P3, P4 } from '../src/components'

const Dev = (): JSX.Element => {
  return (
    <section className="dev">
      <div className="dev__block">
        <h1 className="dev__block__title">Buttons</h1>

        <h2 className="dev__block__subtitle">Components</h2>

        <div className="dev__block__preview">
          <Button>Button</Button>
          <Button href="#">Button Link</Button>
          <CircleButton>
            <Icon icon="icon-email" />
          </CircleButton>
          <CircleButton href="#">L</CircleButton>
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

          <CircleButton color="yellow" textWeight={800}>
            {12}
          </CircleButton>

          <Button color="orange" textFamily="heading">
            {['Hello', 'World']}
          </Button>

          <Button href="#" color="rose" textWeight={100}>
            Nick
          </Button>

          <CircleButton color="red">
            <Icon icon="icon-chat" />
          </CircleButton>

          <CircleButton color="green" layout="outlined">
            <Icon icon="icon-chat" />
          </CircleButton>

          <Button color="teal" before={<Icon icon="icon-chat" />}>
            Click me
          </Button>

          <Button color="turquoise" layout="outlined" textWeight={300} after={<Icon icon="icon-chat" />}>
            <span>Push me</span>
            <span>Pull me</span>
          </Button>

          <CircleButton href="#" color="blue" size="sm">
            <Icon icon="icon-chat" />
          </CircleButton>

          <Button color="purple" size="sm" layout="outlined">
            <Icon icon="icon-chat" />
          </Button>

          <Button type="reset" disabled>
            Disbled
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

      <div className="dev__block">
        <h1 className="dev__block__title">Appearance</h1>

        <h2 className="dev__block__subtitle">Avatar</h2>

        <div className="dev__block__preview">
          <Avatar
            width={100}
            height={100}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/292/apple-logo_f8ff.png"
          />
          <Avatar color="black">H</Avatar>
          <Avatar color="white">e</Avatar>
          <Avatar color="yellow">l</Avatar>
          <Avatar color="orange">l</Avatar>
          <Avatar color="red">o</Avatar>
          <Avatar color="rose">-</Avatar>
          <Avatar color="green">W</Avatar>
          <Avatar color="teal">o</Avatar>
          <Avatar color="turquoise">r</Avatar>
          <Avatar color="blue">l</Avatar>
          <Avatar color="purple">d</Avatar>
          <Avatar color="black" width={100} height={50}>
            Test
          </Avatar>
          <Avatar color="red" width={100} height={100} textFamily="heading" textSize={24}>
            Test 2
          </Avatar>
          <Avatar color="green" width={80} height={80} textWeight={300} radius="50%">
            Test 3
          </Avatar>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root'))
