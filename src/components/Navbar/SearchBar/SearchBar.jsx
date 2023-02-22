import React, { useState, useEffect, useRef } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { motion } from 'framer-motion'
import { useWindowSize } from '../../../hooks/useWindowSize/useWindowSize'

import * as Style from './SearchBarStyles'
import { Hand1, Hand2, Necklace, Ring1, Ring2, Ring3, Ring4 } from '../../../assets/images/Index'
import { RightArrow } from '../../../assets/icons/Index';
import './SearchBar.css'

const SearchBar = ({ desktop, mobile, closeWrapper }) => {
  const [visible, isVisible] = useState(false);

  const handleVisibility = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  useEffect(() => {
    const closeQuickSearch = (e) => {
      if (e.target.parentElement.id !== "search-wrapper") {
        if (e.target.id !== 'quick-results') {
          isVisible(false);
        }
      }
    };
    document.body.addEventListener("click", closeQuickSearch);
    return () => document.body.removeEventListener("click", closeQuickSearch);
  }, []);

  const handleClick = () => {
    if (mobile) {
      closeWrapper(true);
    }
  }

  const smallCardsData = [
    {
      id: '1',
      img: Ring1,
      title: 'Joya Versace',
      gradient: 'linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%)'
    },
    {
      id: '2',
      img: Ring2,
      title: 'Cartier Trinidad',
      gradient: 'linear-gradient(230.1deg, #FFECD2 -1.7%, #FCB69F 100%)'
    },
    {
      id: '3',
      img: Ring3,
      title: 'Cartier Rosas Plata',
      gradient: 'linear-gradient(90deg, #A1C4FD 0%, #C2E9FB 100%)'
    },
    {
      id: '4',
      img: Ring4,
      title: 'Cartier Garnet Diamond',
      gradient: 'linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%)'
    },
  ]

  const tagPillsData = [
    {
      id: '1',
      title: 'Anillos',
    },
    {
      id: '2',
      title: 'Joyas',
    },
    {
      id: '3',
      title: 'Aritos',
    },
    {
      id: '4',
      title: 'Pulseras',
    },
    {
      id: '5',
      title: 'Collares',
    },
    {
      id: '6',
      title: 'Bandas',
    },
    {
      id: '7',
      title: 'Conjuntos',
    },
    {
      id: '8',
      title: 'Relojes',
    },
    {
      id: '9',
      title: 'Sellos',
    },
    {
      id: '10',
      title: 'Cadenas',
    }
  ]

  const featured = [
    {
      id: '1',
      img: Necklace,
      title: 'Bvlgari Serpenti',
      gradient: 'linear-gradient(229.23deg, #434343 0%, #000000 100%)',
    },
    {
      id: '2',
      img: Hand1,
      title: 'Chopard Perlas',
      gradient: 'linear-gradient(229.23deg, #D7D2CC 0%, #304352 100%)',
    },
    {
      id: '3',
      img: Hand2,
      title: 'L`atelier Nawbar',
      gradient: 'linear-gradient(229.23deg, #FDFCFB 0%, #E2D1C3 100%)',
    },
  ]

  const dragConstraint = useRef(null);
  const windowsize = useWindowSize();

  return (
    <Style.SearchBarWrapper
      onClick={() => isVisible(true)}
      id='search-wrapper'
      mobile={mobile}
      desktop={desktop}
    >
      <Style.SearchBarInput
        placeholder='Buscar joyas, anillos, estilos...'
        type='text'
        id='search-input'
        autoComplete='off'
        visible={visible}
        mobile={mobile}
      />
      <Style.SearchBarQuickResults 
        as={motion.div} 
        animate={
          visible
          ? 'open'
          : 'closed'
        }
        variants={handleVisibility}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        visible={visible}
        mobile={mobile}
      >
        <Style.QuickResultsWrapper id='quick-results'>
          <Style.QuickResultsColumnsWrapper id='quick-results'>
            <Style.QuickResultsColumnWrapper id='quick-results'>
              <Style.QuickResultsSectionWrapper id='quick-results'>
                <Style.QuickResultsSectionTitle id='quick-results'>
                  nuevos artículos
                </Style.QuickResultsSectionTitle>
                <Style.QuickResultsSectionContentWrapper id='quick-results'>
                  {
                    smallCardsData.map((m) => (
                      <Style.QRSectionCardsWrapper
                        size={'small'} key={m.id} onClick={handleClick}
                        as={motion.div}
                        whileTap={{
                          scale: 0.9
                        }}
                        transition={{
                          type: 'spring',
                          duration: 0.3
                        }}
                      >
                        <Style.QRSectionCard>
                          <img src={m.img} alt="Product_Image-Sample" style={{ backgroundImage: `${m.gradient}` }}  />
                        </Style.QRSectionCard>
                        <Style.QRSectionCardTitle >
                          {m.title}
                        </Style.QRSectionCardTitle>
                      </Style.QRSectionCardsWrapper>
                    ))
                  }
                </Style.QuickResultsSectionContentWrapper>
              </Style.QuickResultsSectionWrapper>
              <Style.QuickResultsSectionWrapper id='quick-results'>
                <Style.QuickResultsSectionTitle id='quick-results'>
                  por tipo
                </Style.QuickResultsSectionTitle>
                <Style.QuickResultsSectionContentWrapper id='quick-results'>
                  <Style.QRSectionTagsWrapper id='quick-results'>
                    {
                      tagPillsData.map((m) => (
                        <Style.QRSectionTagsPills 
                          key={m.id} onClick={() => handleClick()}
                          as={motion.div}
                          whileTap={{
                            scale: 0.9
                          }}
                          transition={{
                            type: 'spring',
                            duration: 0.2
                          }}
                        >
                          <p>
                            {
                              m.title
                            }
                          </p>
                        </Style.QRSectionTagsPills>
                      ))
                    }
                </Style.QRSectionTagsWrapper>
              </Style.QuickResultsSectionContentWrapper>
              </Style.QuickResultsSectionWrapper>
            </Style.QuickResultsColumnWrapper>
            <Style.QuickResultsColumnWrapper ref={dragConstraint} id='quick-results' style={{ display: windowsize.width < 1025 ? 'none' : 'flex' }} >
              <motion.div
                drag='x'
                dragConstraints={dragConstraint}
                dragElastic={0.2}
                id='quick-results'
              >
              <Style.QuickResultsSectionWrapper as={ScrollContainer} id='quick-results'>
                <Style.QuickResultsSectionTitle id='quick-results'>
                  lo mejor
                </Style.QuickResultsSectionTitle>
                <Style.QuickResultsSectionContentWrapper id='quick-results'>
                  {
                    featured.map((m) => (
                      <Style.QRSectionCardsWrapper 
                        key={m.id} size={'large'} onClick={handleClick}
                        as={motion.div}
                        whileTap={{
                          scale: 0.9
                        }}
                        transition={{
                          type: 'spring',
                          duration: 0.3
                        }}
                      >
                        <Style.QRSectionCard>
                          <img src={m.img} alt="Product_Image-Featured" style={{ backgroundImage: `${m.gradient}` }} />
                        </Style.QRSectionCard>
                        <Style.QRSectionCardTitle style={{ maxWidth: 'unset' }}>
                          {m.title}
                        </Style.QRSectionCardTitle>
                      </Style.QRSectionCardsWrapper>
                    ))
                  }
                </Style.QuickResultsSectionContentWrapper>
              </Style.QuickResultsSectionWrapper>
              </motion.div>
            </Style.QuickResultsColumnWrapper>
          </Style.QuickResultsColumnsWrapper>
        </Style.QuickResultsWrapper>
      </Style.SearchBarQuickResults>
    </Style.SearchBarWrapper>
  )
}

export default SearchBar