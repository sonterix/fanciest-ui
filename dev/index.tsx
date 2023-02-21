import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import '../src/styles/index.scss'
import '../src/styles/icons.css'

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
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
  Input,
  Loader,
  Menu,
  Modal,
  P1,
  P2,
  P3,
  P4,
  Radio,
  Rating,
  Select,
  Skeleton,
  SlideModal,
  Switch,
  Textarea,
  Tooltip
} from '../src/components'
import Multiselect from '../src/components/form/Multiselect'

const Dev = (): JSX.Element => {
  const [input, setInput] = useState<{ [key: string]: string }>({})

  const [textarea, setTextarea] = useState<{ [key: string]: string }>({})

  const [select, setSelect] = useState<string>('three')

  const [multiselect, setMultiselect] = useState<string[]>([])

  const [checkbox, setCheckbox] = useState<{ [key: string]: boolean }>({})

  const [radio, setRadio] = useState<{ [key: string]: string }>({})

  const [switchValue, setSwitchValue] = useState<{ [key: string]: boolean }>({})

  const menuTriggerRef = useRef<HTMLButtonElement>(null)
  const [isMenu, setMenu] = useState<boolean>(false)
  const [menuProps, setMenuProps] = useState<{ [key: string]: string }>({})

  const [isModal, setModal] = useState<boolean>(false)

  const [isSlideModal, setSlideModal] = useState<boolean>(false)

  return (
    <section className="dev">
      <div className="dev__block">
        <h1 className="dev__block__title">Buttons</h1>

        <h2 className="dev__block__subtitle">Circle Button</h2>

        <div className="dev__block__preview">
          <CircleButton backgroundColor="danger-300">d3</CircleButton>
          <CircleButton backgroundColor="neutral-300">n3</CircleButton>
          <CircleButton backgroundColor="success-400">s4</CircleButton>
          <CircleButton backgroundColor="warning-600">w6</CircleButton>
          <CircleButton backgroundColor="secondary-300">s3</CircleButton>

          <CircleButton presetSize="sm">SM</CircleButton>
          <CircleButton presetSize="md">MD</CircleButton>

          <CircleButton layout="outlined">Out</CircleButton>

          <CircleButton textWeight={100}>T</CircleButton>
        </div>

        <h2 className="dev__block__subtitle">Button</h2>

        <div className="dev__block__preview">
          <Button>Button</Button>

          <Button backgroundColor="danger-300">danget 300</Button>
          <Button backgroundColor="neutral-300">neutral 300</Button>
          <Button backgroundColor="success-400">success 400</Button>
          <Button backgroundColor="warning-600">warning 600</Button>
          <Button backgroundColor="secondary-300">secondary 300</Button>

          <Button presetSize="sm">SM</Button>
          <Button presetSize="md">MD</Button>
          <Button presetSize="lg">LG</Button>

          <Button shape="squared">Squared</Button>

          <Button layout="outlined">Outlined</Button>

          <Button textWeight={100}>Custom Text</Button>

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
          <Font as="div">Custom 1</Font>
          <Font as="span">Custom 2</Font>
          <Font as="del" size={{ default: 10, xs: 11, sm: 12, md: 13, lg: 14, xl: 15, xxl: 16, xxxl: 17 }}>
            Custom 3
          </Font>
          <Font as="b" weight={{ default: 100, xs: 200, sm: 300, md: 400, lg: 500, xl: 600, xxl: 700, xxxl: 800 }}>
            Custom 4
          </Font>
          <Font as="i" letterSpacing={{ default: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7, xxxl: 8 }}>
            Custom 5
          </Font>
          <Font as="mark" lineHeight={{ default: 1, xs: 1.2, sm: 1.4, md: 1.6, lg: 1.8, xl: 2, xxl: 2.2, xxxl: 2.4 }}>
            Custom 6
          </Font>
        </div>
      </div>

      <div className="dev__block">
        <h1 className="dev__block__title">Appearance</h1>

        <h2 className="dev__block__subtitle">Avatar</h2>

        <div className="dev__block__preview">
          <Avatar backgroundColor="danger-300">d</Avatar>
          <Avatar backgroundColor="neutral-300">n</Avatar>
          <Avatar backgroundColor="primary-300">p</Avatar>
          <Avatar backgroundColor="secondary-300">s</Avatar>
          <Avatar backgroundColor="warning-400">w</Avatar>
          <Avatar backgroundColor="success-400">s</Avatar>

          <Avatar src="https://picsum.photos/80/80" />

          <Avatar color="success-100" radius="50%">
            50%
          </Avatar>
          <Avatar color="warning-100" radius={0}>
            0
          </Avatar>

          <Avatar color="danger-100" width={100} height={50}>
            Size
          </Avatar>

          <Avatar textSize={24} textWeight={300}>
            Txt
          </Avatar>
        </div>

        <h2 className="dev__block__subtitle">Badge</h2>

        <div className="dev__block__preview">
          <Badge backgroundColor="danger-300">danger</Badge>
          <Badge backgroundColor="neutral-300">neutral</Badge>
          <Badge backgroundColor="primary-300">primary</Badge>
          <Badge backgroundColor="secondary-300">secondary</Badge>
          <Badge backgroundColor="warning-400">warning</Badge>
          <Badge backgroundColor="success-400">success</Badge>

          <Badge color="danger-100" bgOpacity={0.4}>
            Opacity 0.6
          </Badge>
          <Badge color="success-100" bgOpacity={0.4} hoverable>
            Opacity 0.6 Hoverable
          </Badge>

          <Badge color="warning-100" onClose={() => alert('Clicked')}>
            Click me
          </Badge>

          <Badge textSize={20} textWeight={300}>
            Custom Text
          </Badge>

          <Badge shape="rounded" presetSize="sm">
            Custom Shape and Size
          </Badge>
        </div>

        <h2 className="dev__block__subtitle">Loader</h2>

        <div className="dev__block__preview">
          <Loader color="danger-300" />
          <Loader color="warning-400" />
          <Loader color="success-400" />
          <Loader color="primary-300" />
          <Loader color="neutral-300" />
          <Loader color="secondary-300" />

          <Loader color="danger-700" layout="spinline" />

          <Loader color="warning-700" layout="spindot" />

          <Loader color="success-700" layout="rolling" />

          <Loader color="primary-900" layout="dualring" />

          <Loader color="neutral-900" layout="ellipsis" />

          <Loader color="secondary-900" layout="pulse" />

          <Loader layout="magnify" />

          <Loader width={130} height={130} />

          <Loader wrapperMaxWidth={200} wrapperMaxHeight={200} />
        </div>

        <h2 className="dev__block__subtitle">Rating</h2>

        <div className="dev__block__preview">
          <Rating color="warning-400" rating={4} />
          <Rating color="success-400" rating={4} />
          <Rating color="danger-300" rating={4} />
          <Rating color="primary-300" rating={4} />
          <Rating color="neutral-300" rating={4} />
          <Rating color="secondary-300" rating={4} />

          <Rating rating={3} layout="single" />

          <Rating rating={3} layout="single" withNumber />

          <Rating rating={2} withNumber onChangeRating={rating => console.log(`Selected Rating: ${rating}`)} />

          <Rating rating={5} starSize={30} textSize="26px" withNumber />
        </div>

        <h2 className="dev__block__subtitle">Skeleton</h2>

        <div className="dev__block__preview">
          <Skeleton animation="pulse" />
          <Skeleton animation="wave" />
          <Skeleton animation="none" />

          <Skeleton width={500} height={60} />

          <Skeleton layout="circle" width={80} height={80} />
        </div>
      </div>

      <div className="dev__block">
        <h1 className="dev__block__title">Floating</h1>

        <h2 className="dev__block__subtitle">Tooltip</h2>

        <div className="dev__block__preview">
          <Tooltip content="default">Hover me</Tooltip>
          <Tooltip content="warning" backgroundColor="warning-400">
            Hover me
          </Tooltip>
          <Tooltip content="secondary" backgroundColor="secondary-400">
            Hover me
          </Tooltip>
          <Tooltip content="success" backgroundColor="success-400">
            Hover me
          </Tooltip>
          <Tooltip content="danger" backgroundColor="danger-300">
            Hover me
          </Tooltip>
          <Tooltip content="secondary" backgroundColor="secondary-400">
            Hover me
          </Tooltip>

          <Tooltip content="Hello World" textSize="18px" textWeight={600}>
            Custom text
          </Tooltip>

          <Tooltip content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quas." maxWidth={250}>
            Custom width
          </Tooltip>

          <Tooltip content="Bottom right" position="bottom-right">
            Custom Position
          </Tooltip>

          <Tooltip content="On click action" actionType="click">
            Works on click
          </Tooltip>

          <Tooltip content="With component">
            <Button>Hover me</Button>
          </Tooltip>
        </div>

        <h2 className="dev__block__subtitle">Menu</h2>

        <div className="dev__block__preview">
          <button type="button" ref={menuTriggerRef} onClick={() => setMenu(prev => !prev)}>
            Toggle menu
          </button>

          <select
            value={menuProps?.color || 'primary'}
            onChange={({ target }) => setMenuProps(prev => ({ ...prev, color: target.value }))}
          >
            <option value="primary-400">primary</option>
            <option value="secondary-400">secondary</option>
            <option value="neutral-400">neutral</option>
            <option value="success-400">success</option>
            <option value="warning-400">warning</option>
            <option value="danger-500">danger</option>
          </select>

          <select
            value={menuProps?.backgroundColor || 'secondary'}
            onChange={({ target }) => setMenuProps(prev => ({ ...prev, backgroundColor: target.value }))}
          >
            <option value="primary-400">primary</option>
            <option value="secondary-400">secondary</option>
            <option value="neutral-400">neutral</option>
            <option value="success-400">success</option>
            <option value="warning-400">warning</option>
            <option value="danger-500">danger</option>
          </select>

          <select
            value={menuProps?.position || 'bottom'}
            onChange={({ target }) => setMenuProps(prev => ({ ...prev, position: target.value }))}
          >
            <option value="top-left">top-left</option>
            <option value="top">top</option>
            <option value="top-right">top-right</option>
            <option value="right-top">right-top</option>
            <option value="right">right</option>
            <option value="right-bottom">right-bottom</option>
            <option value="bottom-left">bottom-left</option>
            <option value="bottom">bottom</option>
            <option value="bottom-right">bottom-right</option>
            <option value="left-top">left-top</option>
            <option value="left">left</option>
            <option value="left-bottom">left-bottom</option>
          </select>

          {menuTriggerRef.current && (
            <Menu anchor={menuTriggerRef.current} isOpen={isMenu} onClose={() => setMenu(false)} {...menuProps}>
              <div style={{ padding: '5px 10px' }}>Menu 1</div>
              <hr />
              <div style={{ padding: '5px 10px' }}>Menu 2</div>
              <hr />
              <div style={{ padding: '5px 10px' }}>Menu 3</div>
            </Menu>
          )}
        </div>

        <h2 className="dev__block__subtitle">Modal</h2>

        <div className="dev__block__preview">
          <button type="button" onClick={() => setModal(true)}>
            Open modal
          </button>

          <Modal
            isOpen={isModal}
            onClose={() => setModal(false)}
            maxWidth={400}
            position="center"
            shape="rounded"
            header={<h2>Header content</h2>}
            footer={<h2>Footer content</h2>}
          >
            <h1>Lorem ipsum dolor sit.</h1>
            <hr />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum vero. Quaerat commodi dicta, sunt
              omnis sit officia magnam quasi!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iste esse cupiditate aut officia
              perferendis provident maxime alias, blanditiis, veritatis vitae impedit possimus ex quae minus saepe sed
              quaerat accusantium eum, facere asperiores consequuntur sapiente quisquam? In ea unde sint eligendi ipsam
              sapiente delectus quos aliquam officia voluptas veniam repellat exercitationem soluta eveniet hic officiis
              impedit, id dicta natus eum. Eum maxime deleniti, in dolorum dolorem quibusdam iure magnam a, molestias
              pariatur sint, asperiores facere esse odit consectetur iste ea.
            </p>
          </Modal>
        </div>

        <h2 className="dev__block__subtitle">Slide modal</h2>

        <div className="dev__block__preview">
          <button type="button" onClick={() => setSlideModal(true)}>
            Open slide modal
          </button>

          <SlideModal isOpen={isSlideModal} onClose={() => setSlideModal(false)} shape="rounded">
            <h1>Lorem ipsum dolor sit.</h1>
            <hr />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum vero. Quaerat commodi dicta, sunt
              omnis sit officia magnam quasi!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iste esse cupiditate aut officia
              perferendis provident maxime alias, blanditiis, veritatis vitae impedit possimus ex quae minus saepe sed
              quaerat accusantium eum, facere asperiores consequuntur sapiente quisquam? In ea unde sint eligendi ipsam
              sapiente delectus quos aliquam officia voluptas veniam repellat exercitationem soluta eveniet hic officiis
              impedit, id dicta natus eum. Eum maxime deleniti, in dolorum dolorem quibusdam iure magnam a, molestias
              pariatur sint, asperiores facere esse odit consectetur iste ea.
            </p>
          </SlideModal>
        </div>
      </div>

      {/* <div className="dev__block">
        <h1 className="dev__block__title">Form</h1>

        <h2 className="dev__block__subtitle">Input</h2>

        <div className="dev__block__preview">
          <Input
            name="default"
            value={input?.default || ''}
            placeholder="Text me"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input name="disabled" placeholder="Disabled" disabled />

          <Input
            name="label"
            label="Cool Input, right?"
            value={input?.label || ''}
            placeholder="Label"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input
            name="layout"
            layout="outlined"
            value={input?.layout || ''}
            placeholder="Layout"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input
            name="shape"
            shape="rounded"
            value={input?.shape || ''}
            placeholder="Shape"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input
            name="presetSize"
            presetSize="sm"
            value={input?.presetSize || ''}
            placeholder="Size"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input
            name="mask"
            mask="  -  -  "
            value={input?.mask || ''}
            placeholder="Mask"
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Input
            name="beforeafter"
            value={input?.beforeafter || ''}
            placeholder="Before and After"
            before={<Icon icon="icon-email" />}
            after={<small>You</small>}
            onChange={({ target }) => setInput(prev => ({ ...prev, [target.name]: target.value }))}
          />
        </div>

        <h2 className="dev__block__subtitle">Textarea</h2>

        <div className="dev__block__preview">
          <Textarea
            name="default"
            value={textarea?.default || ''}
            placeholder="Text me"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Textarea name="disabled" placeholder="Disabled" disabled />

          <Textarea
            name="label"
            label="Cool Textarea, right?"
            value={textarea?.label || ''}
            placeholder="Label"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Textarea
            name="layout"
            layout="outlined"
            value={textarea?.layout || ''}
            placeholder="Layout"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Textarea
            name="shape"
            shape="rounded"
            value={textarea?.shape || ''}
            placeholder="Shape"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Textarea
            name="presetSize"
            presetSize="sm"
            value={textarea?.presetSize || ''}
            placeholder="Size"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Textarea
            name="resize"
            resize="none"
            value={textarea?.mask || ''}
            placeholder="Resize"
            onChange={({ target }) => setTextarea(prev => ({ ...prev, [target.name]: target.value }))}
          />
        </div>

        <h2 className="dev__block__subtitle">Select</h2>
        <div className="dev__block__preview">
          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select options={[]} disabled />

          <Select
            options={[
              { value: 'one', label: 'One big line of text is here' },
              { value: 'two', label: 'Two', disabled: true },
              { value: 'three', label: 'Three' }
            ]}
            label="Select something"
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            layout="outlined"
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            shape="rounded"
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            presetSize="sm"
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            textWeight={600}
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />

          <Select
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            color="orange"
            value={select}
            onChange={({ target: { value } }) => setSelect(String(value))}
          />
        </div>

        <h2 className="dev__block__subtitle">Multiselect</h2>
        <div className="dev__block__preview">
          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect options={[]} disabled />

          <Multiselect
            options={[
              { value: 'one', label: 'One big line of text is here' },
              { value: 'two', label: 'Two', disabled: true },
              { value: 'three', label: 'Three' }
            ]}
            label="Select something"
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            layout="outlined"
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            shape="rounded"
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            presetSize="sm"
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            textWeight={600}
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            color="orange"
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />

          <Multiselect
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' }
            ]}
            value={multiselect}
            onChange={({ target: { value } }) =>
              setMultiselect(prev => (prev.includes(value) ? prev.filter(val => val !== value) : [...prev, value]))
            }
          />
        </div>

        <h2 className="dev__block__subtitle">Checkbox</h2>

        <div className="dev__block__preview">
          <Checkbox defaultChecked color="black" />
          <Checkbox defaultChecked color="white" />
          <Checkbox defaultChecked color="yellow" />
          <Checkbox defaultChecked color="orange" />
          <Checkbox defaultChecked color="red" />
          <Checkbox defaultChecked color="rose" />
          <Checkbox defaultChecked color="green" />
          <Checkbox defaultChecked color="teal" />
          <Checkbox defaultChecked color="turquoise" />
          <Checkbox defaultChecked color="blue" />
          <Checkbox defaultChecked color="purple" />

          <Checkbox defaultChecked disabled />

          <Checkbox
            name="label1"
            label="Right label"
            defaultChecked={checkbox?.label1 || false}
            onChange={({ target }) => setCheckbox(prev => ({ ...prev, [target.name]: target.checked }))}
          />

          <Checkbox
            name="label2"
            label="Left label"
            labelPosition="left"
            defaultChecked={checkbox?.label2 || false}
            onChange={({ target }) => setCheckbox(prev => ({ ...prev, [target.name]: target.checked }))}
          />

          <Checkbox
            label="With custom input"
            customInput={
              <input
                type="checkbox"
                name="custom"
                defaultChecked={checkbox?.custom || false}
                onChange={({ target }) => setCheckbox(prev => ({ ...prev, [target.name]: target.checked }))}
              />
            }
          />
        </div>

        <h2 className="dev__block__subtitle">Radio</h2>

        <div className="dev__block__preview">
          <Radio defaultChecked color="black" />
          <Radio defaultChecked color="white" />
          <Radio defaultChecked color="yellow" />
          <Radio defaultChecked color="orange" />
          <Radio defaultChecked color="red" />
          <Radio defaultChecked color="rose" />
          <Radio defaultChecked color="green" />
          <Radio defaultChecked color="teal" />
          <Radio defaultChecked color="turquoise" />
          <Radio defaultChecked color="blue" />
          <Radio defaultChecked color="purple" />

          <Radio defaultChecked disabled />

          <Radio
            name="label"
            value="1"
            label="Right label"
            defaultChecked={radio?.label === '1' || false}
            onChange={({ target }) => setRadio(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Radio
            name="label"
            value="2"
            label="Left label"
            labelPosition="left"
            defaultChecked={radio?.label === '2' || false}
            onChange={({ target }) => setRadio(prev => ({ ...prev, [target.name]: target.value }))}
          />

          <Radio
            label="With custom input"
            customInput={
              <input
                type="checkbox"
                name="custom"
                value="1"
                defaultChecked={radio?.custom === '1' || false}
                onChange={({ target }) => setRadio(prev => ({ ...prev, [target.name]: target.value }))}
              />
            }
          />
        </div>

        <h2 className="dev__block__subtitle">Switch</h2>

        <div className="dev__block__preview">
          <Switch defaultChecked color="black" />
          <Switch defaultChecked color="white" />
          <Switch defaultChecked color="yellow" />
          <Switch defaultChecked color="orange" />
          <Switch defaultChecked color="red" />
          <Switch defaultChecked color="rose" />
          <Switch defaultChecked color="green" />
          <Switch defaultChecked color="teal" />
          <Switch defaultChecked color="turquoise" />
          <Switch defaultChecked color="blue" />
          <Switch defaultChecked color="purple" />

          <Switch defaultChecked disabled />

          <Switch
            name="label1"
            label="Right label"
            defaultChecked={switchValue?.label1 || false}
            onChange={({ target }) => setSwitchValue(prev => ({ ...prev, [target.name]: target.checked }))}
          />

          <Switch
            name="label2"
            label="Left label"
            labelPosition="left"
            defaultChecked={switchValue?.label2 || false}
            onChange={({ target }) => setSwitchValue(prev => ({ ...prev, [target.name]: target.checked }))}
          />

          <Switch
            label="With custom input"
            customInput={
              <input
                type="checkbox"
                name="custom"
                defaultChecked={switchValue?.custom || false}
                onChange={({ target }) => setSwitchValue(prev => ({ ...prev, [target.name]: target.checked }))}
              />
            }
          />
        </div>
      </div> */}

      {/* <div className="dev__block">
        <h1 className="dev__block__title">Functional</h1>

        <h2 className="dev__block__subtitle">DetectClickOutside</h2>

        <div className="dev__block__preview">
          <DetectClickOutside onClickOutside={() => console.info('Clicked outside')}>
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
          <Container style={{ border: '1px dotted #ccc' }} maxWidth={630}>
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
      </div> */}
    </section>
  )
}

ReactDOM.render(<Dev />, document.getElementById('root'))
