import './index.css'

const Message = props => {
  const {isLogin} = props

  return isLogin ? (
    <h1 className="heading">Welcome User</h1>
  ) : (
    <h1 className="heading">Please Login</h1>
  )
}

export default Message
