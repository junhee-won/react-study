const LikeButton = () => {
  const [liked, setLiked] = React.useState(false)
  const text = liked ? 'Cancle Like' : 'Like!'
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text,
  )
}

const domContainer = document.querySelector('#react-root')
ReactDOM.render(React.createElement(LikeButton), domContainer)