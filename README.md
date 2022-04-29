# MoneyMade-UI

Moneymade UI is a library of components developed by [moneymade.io](https://moneymade.io/)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the library

```bash
npm install @moneymade/moneymade-ui
```

or with [yarn](https://yarnpkg.com)

```bash
yarn add @moneymade/moneymade-ui
```

## Usage

### Import styles to [React](https://reactjs.org/)

```js
import '@moneymade/moneymade-ui/lib/index.css'
```

### Or to [SASS](https://sass-lang.com/)

```css
@import '~@moneymade/moneymade-ui/lib/index.css';
```

### Then import components and use them

```js
import { MainButton } from '@moneymade/moneymade-ui'
```

```jsx
const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div>{count}</dic>
      <MainButton onClick={() => setCount(count + 1)}>Add more</MainButton>
    </section>
  )
}
```

## Demo

Check [documentation](https://uikit.moneymade.io/docs/ui-kit/get-started) for more info

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
