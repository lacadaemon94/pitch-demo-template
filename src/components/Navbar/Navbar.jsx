import React from 'react'
import { motion } from 'framer-motion'
import MobileNavbar from './MobileNavbar/MobileNavbar'

import * as Style from './NavbarStyles'
import { HorizontalLogo, AppLogo, Cart, UserAvatar } from '../../assets/icons/Index'
import SearchBar from './SearchBar/SearchBar'


const Navbar = () => {
  
  return (
    <>
    <Style.DesktopMenuWrapper>
      <Style.LogoWrapper>
        <HorizontalLogo />
        <AppLogo />
      </Style.LogoWrapper>
      <SearchBar desktop={true} />
      <Style.MenuButtonsWrapper>
        <Style.MenuButton 
          type={'cta'}
          as={motion.div}
          whileTap={{
            scale: 0.9
          }}
          transition={{
            type: 'spring',
            duration: 0.2
          }}
        >
          <Cart />
        </Style.MenuButton>
        <Style.MenuButton
          as={motion.div}
          whileTap={{
            scale: 0.9
          }}
          transition={{
            type: 'spring',
            duration: 0.2
          }}
        >
          <UserAvatar />
        </Style.MenuButton>
      </Style.MenuButtonsWrapper>
    </Style.DesktopMenuWrapper>
    <MobileNavbar />
    </>
  )
}

export default Navbar