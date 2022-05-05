import React, { useState } from "react";
import ReactDOM from "react-dom";
import CountButton from './CountButton'

const Container = () => {
  const [count, setCount] = useState(0)
  return React.createElement(
    'div',
    { style: { marginTop: '20px' } },
    React.createElement('span', null, 'Now Count: '),
    React.createElement('span', null, count),
    React.createElement(CountButton, { onClick: () => setCount(count + 1) }),
    React.createElement(CountButton, { onClick: () => setCount(count + 1) }),
  )
}

const domContainer = document.querySelector('#react-root')
ReactDOM.render(React.createElement(Container), domContainer)