import { useRef } from 'react'
import LogoG from '../../../assets/images/logo-g.png.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoG}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo