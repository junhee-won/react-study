const CountButton = () => {
  const [count, setCount] = React.useState(0)
  return React.createElement(
    'div',
    { style: { marginTop: '20px' } },
    React.createElement('span', null, 'Now Count: '),
    React.createElement('span', null, count),
    React.createElement('button', { onClick: () => { setCount(count + 1) } }, '+1'),
    React.createElement('button', { onClick: () => { setCount(count - 1) } }, '-1'),
  )
}

const domContainer = document.querySelector('#react-root')
ReactDOM.render(React.createElement(CountButton), domContainer)