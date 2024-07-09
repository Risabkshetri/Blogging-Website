import logo from '../assets/logo.png'

function Logo({width = '100px', height = '50px'}) {
  return (
    <img 
      width={width}
      height= {height}
      src={logo}
   />
  )
}

export default Logo