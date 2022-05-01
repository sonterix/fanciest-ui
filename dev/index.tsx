import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import '../src/styles/index.scss'
import '../src/styles/icons.css'

import {
  Avatar,
  Badge,
  Button,
  CircleButton,
  Container,
  DetectClickOutside,
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

        <h2 className="dev__block__subtitle">Circle Button</h2>

        <div className="dev__block__preview">
          <CircleButton color="black">B</CircleButton>
          <CircleButton color="white">W</CircleButton>
          <CircleButton color="yellow">Y</CircleButton>
          <CircleButton color="orange">O</CircleButton>
          <CircleButton color="red">Re</CircleButton>
          <CircleButton color="rose">Ro</CircleButton>
          <CircleButton color="green">G</CircleButton>
          <CircleButton color="teal">Te</CircleButton>
          <CircleButton color="turquoise">Tu</CircleButton>
          <CircleButton color="blue">B</CircleButton>
          <CircleButton color="purple">P</CircleButton>

          <CircleButton color="green" size="sm">
            SM
          </CircleButton>
          <CircleButton color="green" size="md">
            MD
          </CircleButton>

          <CircleButton color="rose" layout="outlined">
            L
          </CircleButton>

          <CircleButton color="teal" textFamily="heading" textWeight={100}>
            T
          </CircleButton>
        </div>

        <h2 className="dev__block__subtitle">Button</h2>

        <div className="dev__block__preview">
          <Button color="black">Black</Button>
          <Button color="white">White</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="orange">Orange</Button>
          <Button color="red">Red</Button>
          <Button color="rose">Rose</Button>
          <Button color="green">Green</Button>
          <Button color="teal">Teal</Button>
          <Button color="turquoise">Turquoise</Button>
          <Button color="blue">Blue</Button>
          <Button color="purple">Purplr</Button>

          <Button color="yellow" size="xs">
            XS
          </Button>
          <Button color="yellow" size="sm">
            SM
          </Button>
          <Button color="yellow" size="md">
            MD
          </Button>
          <Button color="yellow" size="lg">
            LG
          </Button>

          <Button color="red" shape="squared">
            Squared
          </Button>

          <Button color="turquoise" layout="outlined">
            Outlined
          </Button>

          <Button color="purple" textFamily="heading" textWeight={100}>
            Custom Text
          </Button>

          <Button before="With" after={<Icon icon="icon-email" />}>
            before and after
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
          <Avatar color="black">B</Avatar>
          <Avatar color="white">W</Avatar>
          <Avatar color="yellow">Y</Avatar>
          <Avatar color="orange">O</Avatar>
          <Avatar color="red">Re</Avatar>
          <Avatar color="rose">Ro</Avatar>
          <Avatar color="green">G</Avatar>
          <Avatar color="teal">Te</Avatar>
          <Avatar color="turquoise">Tu</Avatar>
          <Avatar color="blue">B</Avatar>
          <Avatar color="purple">P</Avatar>

          <Avatar src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/292/apple-logo_f8ff.png" />

          <Avatar color="green" radius="50%">
            50%
          </Avatar>
          <Avatar color="green" radius={0}>
            0
          </Avatar>

          <Avatar color="black" width={100} height={50}>
            Size
          </Avatar>

          <Avatar color="red" textFamily="heading" textSize={24} textWeight={300}>
            Txt
          </Avatar>
        </div>

        <h2 className="dev__block__subtitle">Badge</h2>

        <div className="dev__block__preview">
          <Badge color="black">Black</Badge>
          <Badge color="white">White</Badge>
          <Badge color="yellow">Yellow</Badge>
          <Badge color="orange">Orange</Badge>
          <Badge color="red">Red</Badge>
          <Badge color="rose">Rose</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="teal">Teal</Badge>
          <Badge color="turquoise">Turquoise</Badge>
          <Badge color="blue">Blue</Badge>
          <Badge color="purple">Purplr</Badge>

          <Badge color="red" onClose={() => alert('Clicked')}>
            Click me
          </Badge>

          <Badge textFamily="heading" textSize={20} textWeight={300}>
            Custom Text
          </Badge>

          <Badge shape="rounded" size="sm">
            Custom Shape and Size
          </Badge>
        </div>
      </div>

      <div className="dev__block">
        <h1 className="dev__block__title">Functional</h1>

        <h2 className="dev__block__subtitle">DetectClickOutside</h2>

        <div className="dev__block__preview">
          <DetectClickOutside oneClickOutside={() => console.info('Clicked outside')}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                width: 200,
                height: 100,
                textAlign: 'center',
                border: '1px dotted #ccc'
              }}
            >
              Click outsize me and check the console
            </div>
          </DetectClickOutside>
        </div>

        <h2 className="dev__block__subtitle">Container</h2>

        <div className="dev__block__preview">
          <Container style={{ border: '1px dotted #ccc' }}>Container</Container>
          <Container style={{ border: '1px dotted #ccc' }} width={630}>
            Container with Custom Width
          </Container>
          <Container
            style={{ border: '1px dotted #ccc' }}
            spaceTop={30}
            spaceBottom={30}
            spaceLeft={50}
            spaceRight={50}
          >
            Container with Custom Spaces
          </Container>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root'))
