const LikeButton = () => {
  const [liked, setLiked] = React.useState(false)
  const text = liked ? 'Cancle Like' : 'Like!'
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  )
}

ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root1'))
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root2'))
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root3'))