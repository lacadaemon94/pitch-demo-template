import React, { useEffect } from 'react'
import { motion, useCycle, } from 'framer-motion'

import * as Style from './MNavbarStyles'
import './MobileNavbar.css'
import { Cart, MenuHandle, MenuHandleBG, MobileLogo } from '../../../assets/icons/Index'
import SearchBar from '../SearchBar/SearchBar'

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="var(--neutral-light)"
    strokeLinecap={'round'}
    {...props}
    />
)

const MobileNavbar = () => {
  const [toggle, setToggle] = useCycle(false, true);
  const [searchbar, setSearchBar] = useCycle(false, true)

  return (
    <>
      <Style.MobileNavbarWrapper>
          <Style.NavigationWrapper>
            <Style.MenuButton
              as={motion.div}
              whileTap={{
                scale: 0.8
              }}
              type={'cta'}
            >
              <Cart />
            </Style.MenuButton>
            <Style.LogoWrapper>
              <MobileLogo />
            </Style.LogoWrapper>
            <Style.MenuButton
              as={motion.div}
              onClick={() => setToggle()}
              animate={
                toggle ? "open" : "closed"
              }
              style={{
                padding: '6px'
              }}
            >
              <svg width="24" height="24" viewBox="-2 -2 24 24">
                <Path
                  variants={{
                    closed: {
                      d: "M 0 0 L 16 0"
                    },
                    open: {
                      d: "M 3 16.5 L 17 2.5"
                    }
                  }}
                />
                <Path
                    d="M 8 10 L 24 10"
                  variants={{
                    closed: {
                      opacity: 1
                    },
                    open: {
                      opacity: 0
                    }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <Path
                  variants={{
                    closed: {
                      d: "M 0 20 L 16 20"
                    },
                    open: {
                      d: "M 3 2.5 L 17 16.346"
                    }
                  }}
                />
              </svg>
            </Style.MenuButton>
          </Style.NavigationWrapper>
      </Style.MobileNavbarWrapper>
      <Style.MenuContentContainer
        as={motion.div}
        layout
        toggle={toggle}
        searchbar={searchbar}
      >
        <SearchBar
          mobile={searchbar}
          closeWrapper={(Boolean) => setSearchBar(Boolean)}
        />
        <Style.MenuExtendHandle
          onClick={() => setSearchBar()}
          searchbar={searchbar}
        >
          <MenuHandle />
          <MenuHandleBG />
        </Style.MenuExtendHandle>
      </Style.MenuContentContainer>
    </>
  )
}

export default MobileNavbar