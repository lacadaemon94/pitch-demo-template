import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { dummyData } from '../../data/dummyData'

import './Home.css'
import * as Style from './HomeStyles'
import { Hand1, Hand2, Hand3, Necklace, Ring1, Ring2, Ring3, Ring4, Ring5, Ring6 } from '../../assets/images/Index'
import { CCard, Cart, Heart, RightArrow } from '../../assets/icons/Index'

const Home = () => {
  const [featuredcta, setFeaturedCTA] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleCounterDecrease = () => {
    if (counter > 1) {
      setCounter(count => count -1);
    }
  }
  const handleCounterIncrease = () => {
    setCounter(count => count +1);
  }

  return (
    <Style.Home>
      <Style.HomeSectionOne>
        <Style.FeaturedProduct
          as={motion.div}
          whileTap={{
            scale: 0.98
          }}
        >
          <Style.FeaturedCardHeader active={featuredcta}>
            <h5>
              destacado
            </h5>
            <motion.div
              whileTap={{
                scale: 0.8
              }}
              onClick={() => setFeaturedCTA(!featuredcta)}
            >
              <Heart />
            </motion.div>
          </Style.FeaturedCardHeader>
          <motion.img
            src={Hand2}
            alt="Featured Product"
            style={{ backgroundImage: 'linear-gradient(216.17deg, #FFCDDF 0.85%, #FFDFEA 100%)' }} 
            whileHover={{
              scale: 1.2
            }}
          />
        </Style.FeaturedProduct>
        <Style.ContentWrapper>
          <Style.NewProductsWrapper>
            <Style.NewProductsTitle>
              nuevos
            </Style.NewProductsTitle>
            <Style.NewProductsGrid>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring3} alt="New Product" style={{ backgroundImage: 'linear-gradient(90deg, #A1C4FD 0%, #C2E9FB 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring4} alt="New Product" style={{ backgroundImage: 'linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring1} alt="New Product" style={{ backgroundImage: 'linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring2} alt="New Product" style={{ backgroundImage: 'linear-gradient(230.1deg, #FFECD2 -1.7%, #FCB69F 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Hand1} alt="New Product" style={{ backgroundImage: 'linear-gradient(229.23deg, #D7D2CC 0%, #304352 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Necklace} alt="New Product" style={{ backgroundImage: 'linear-gradient(229.23deg, #434343 0%, #000000 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring5} alt="New Product" style={{ backgroundImage: 'linear-gradient(216.17deg, #FFCDDF 0.85%, #FFDFEA 100%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Ring6} alt="New Product" style={{ backgroundImage: 'linear-gradient(131.07deg, #F5F7FA 0%, #92A4C0 102.3%)' }} />
              </Style.ProductsGridCard>
              <Style.ProductsGridCard as={motion.div} whileTap={{ scale: 0.9 }} >
                <Style.SProductCardCTAs>
                  <Style.SPCardCTAButton>
                    <Heart />
                  </Style.SPCardCTAButton>
                  <Style.SPCardCTAButton type={'active'} >
                    <Cart />
                  </Style.SPCardCTAButton>
                </Style.SProductCardCTAs>
                <motion.img whileHover={{ scale: 1.2 }} src={Hand3} alt="New Product" style={{ backgroundImage: 'linear-gradient(229.23deg, #FDFCFB 0%, #E2D1C3 100%)' }} />
              </Style.ProductsGridCard>
            </Style.NewProductsGrid>
          </Style.NewProductsWrapper>
          <Style.FeaturedProductPreview>
            <Style.FeaturedProductHeader>
              <h4>
               Sello Ideal + Promesa Lunar
              </h4>
              <h5>
               ANILLOS DE BANDA + ANILLOS SERPIENTE
              </h5>
            </Style.FeaturedProductHeader>
            <Style.FeaturedProductDetailsWrapper>
              <Style.FDetails>
                <Style.FDetailsTitle>
                  descripción
                </Style.FDetailsTitle>
                <Style.FDetailsText>
                  Lorem ipsum dolor sit amet consectetur. Diam natoque purus laoreet mauris velit massa laoreet sem. Interdum odio congue egestas purus ultrices ullamcorper aliquet ante. Mattis in fermentum nisl turpis id rhoncus. Sit elementum maecenas sed praesent vulputate.
                </Style.FDetailsText>
              </Style.FDetails>
              <Style.FeaturedProductControls>
                <Style.FeaturedProductRowCTA>
                  <p>
                    Ver Detalles
                  </p>
                  <Style.FeaturedControlsCTANormal as={motion.div} whileTap={{ scale: 0.9 }}>
                    <RightArrow />
                  </Style.FeaturedControlsCTANormal>
                </Style.FeaturedProductRowCTA>
                <Style.FeaturedProductCTAsWrapper>
                  <Style.FeaturedProductRowCTA>
                    <p>
                      Cantidad
                    </p>
                    <Style.FeaturedControlsCTACounter>
                      <motion.p
                        onClick={handleCounterDecrease}
                      >
                        -
                      </motion.p>
                      <h5>
                        {
                          `${counter}`
                        }
                      </h5>
                      <p
                        onClick={handleCounterIncrease}
                      >
                        +
                      </p>
                    </Style.FeaturedControlsCTACounter>
                  </Style.FeaturedProductRowCTA>
                  <Style.FeaturedProductRowCTA>
                    <Style.FeaturedControlsCTANormal as={motion.div} whileTap={{ scale: 0.9 }} >
                      <Cart />
                    </Style.FeaturedControlsCTANormal>
                    <Style.FeaturedControlsCTANormal type={'active'} as={motion.div} whileTap={{ scale: 0.9 }} >
                      <CCard />
                    </Style.FeaturedControlsCTANormal>
                  </Style.FeaturedProductRowCTA>
                </Style.FeaturedProductCTAsWrapper>
              </Style.FeaturedProductControls>
            </Style.FeaturedProductDetailsWrapper>
          </Style.FeaturedProductPreview>
        </Style.ContentWrapper>
      </Style.HomeSectionOne>
    </Style.Home>
  )
}

export default Home