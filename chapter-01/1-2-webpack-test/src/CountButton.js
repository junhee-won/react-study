import React from 'react'

const CountButton = (props) => {
  return React.createElement('button', { onClick: props.onClick }, '+1')
}
export default CountButton