import React, { useState } from 'react'
import { motion } from 'framer-motion'

import * as Style from './FooterStyles'
import './Footer.css'
import { AliPay, ApplePay, FaceBook, GPay, Instagram, MasterCard, MobileLogo, PayPal, Telegram, Twitter, VisaPay, WhatsApp } from '../../assets/icons/Index'

const Footer = () => {
  const [accordion, setAccordion] = useState(null);

  return (
    <Style.FooterContainer>
      <Style.LogoRow>
        <MobileLogo />
      </Style.LogoRow>
      <Style.FooterMenuWrapper>
        <Style.FooterColumn>
          <Style.FooterMenuColumnTitle
            as={motion.div}
            onClick={() => setAccordion(accordion === 'menu' ? null : 'menu')}
            style={{
              color: accordion === 'menu'
              ? 'var(--neutral-light)'
              : 'var(--neutral-light_2)'
            }}
            whileHover={{
              color: 'var(--neutral-light)'
            }}
          >
            menu
          </Style.FooterMenuColumnTitle>
          <Style.FooterMenuColumnLinksWrapper
            as={motion.div}
            layout
            style={{
              height: accordion === 'menu'
              ? 'fit-content'
              : '0px'
            }}
          >
            <Style.FooterMenuColumnLink>
              <p>
                Inicio
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                Tienda
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                Ordenes
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                Cuenta
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                Soporte
              </p>
              <div />
            </Style.FooterMenuColumnLink>
          </Style.FooterMenuColumnLinksWrapper>
        </Style.FooterColumn>
        <Style.FooterColumn>
          <Style.FooterMenuColumnTitle
            as={motion.div}
            onClick={() => setAccordion(accordion === 'nosotros' ? null : 'nosotros')}
            style={{
              color: accordion === 'nosotros'
              ? 'var(--neutral-light)'
              : 'var(--neutral-light_2)'
            }}
            whileHover={{
              color: 'var(--neutral-light)'
            }}
          >
            nosotros
          </Style.FooterMenuColumnTitle>
          <Style.FooterMenuColumnLinksWrapper
            as={motion.div}
            layout
            style={{
              height: accordion === 'nosotros'
              ? 'fit-content'
              : '0px'
            }}
          >
            <Style.FooterMenuColumnLink>
              <p>
                ¿quienes somos?
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                carreras
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                mision y valores
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                afiliados
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                prensa
              </p>
              <div />
            </Style.FooterMenuColumnLink>
          </Style.FooterMenuColumnLinksWrapper>
        </Style.FooterColumn>
        <Style.FooterColumn>
          <Style.FooterMenuColumnTitle
            as={motion.div}
            onClick={() => setAccordion(accordion === 'legal' ? null : 'legal')}
            style={{
              color: accordion === 'legal'
              ? 'var(--neutral-light)'
              : 'var(--neutral-light_2)'
            }}
            whileHover={{
              color: 'var(--neutral-light)'
            }}
          >
            legal
          </Style.FooterMenuColumnTitle>
          <Style.FooterMenuColumnLinksWrapper
            as={motion.div}
            layout
            style={{
              height: accordion === 'legal'
              ? 'fit-content'
              : '0px'
            }}
          >
            <Style.FooterMenuColumnLink>
              <p>
                terminos y condiciones
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                condiciones de venta
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                politica de reembolsos
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                politica de privacidad
              </p>
              <div />
            </Style.FooterMenuColumnLink>
            <Style.FooterMenuColumnLink>
              <p>
                politica de cookies
              </p>
              <div />
            </Style.FooterMenuColumnLink>
          </Style.FooterMenuColumnLinksWrapper>
        </Style.FooterColumn>
          <Style.FooterMenuCTA>
            <Style.CTAText>
              Suscríbete a nuestro boletín -{'>'}
            </Style.CTAText>
            <Style.CTAButton>
              <p>
                suscribir
              </p>
            </Style.CTAButton>
          </Style.FooterMenuCTA>
      </Style.FooterMenuWrapper>
      <Style.FooterDisclaimerWrapper>
        <Style.FooterDivider />
        <Style.DisclaimerPaymentMethods>
          <VisaPay />
          <GPay />
          <ApplePay />
          <PayPal />
          <AliPay />
          <MasterCard />
        </Style.DisclaimerPaymentMethods>
        <Style.DisclaimerFoot>
          <Style.Disclaimer>
            © 2023 Exit El Salvador - Todos los derechos reservados.
          </Style.Disclaimer>
          <Style.SocialMediaWrapper>
            <FaceBook />
            <Instagram />
            <Twitter />
            <WhatsApp />
            <Telegram />
          </Style.SocialMediaWrapper>
        </Style.DisclaimerFoot>
      </Style.FooterDisclaimerWrapper>
    </Style.FooterContainer>
  )
}

export default Footer