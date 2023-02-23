import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: grid;
    position: relative;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-top: 4rem;
    grid-gap: 1.5rem;
    grid-template-areas:
        '.'
        '.'
        '.';
    padding: clamp(1.5rem, 2rem, 1.66vw);
    background-color: var(--neutral-dark);

    @media (max-width: 720px) {
        grid-template-rows: 0.1fr 1fr 0.25fr;
    }
`

export const LogoRow = styled.div`
    display: grid;
    position: relative;
    width: 100%;
    justify-items: center;
    align-items: center;
    align-items: center;

    svg {
        font-size: clamp(6em,8em,16vw);
        color: var(--neutral-light_2);
    }
`

export const FooterMenuWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4fr 1fr;
    grid-gap: 3rem 1.5rem;
    grid-template-areas:
        '. . .'
        'cta cta cta';
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-gap: 1.5rem;
        grid-template-areas:
        '.'
        '.';
        align-items: center;
        justify-items: start;
        justify-content: start;
    }
`
export const FooterColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.25fr 5.75fr;
    grid-gap: 8px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-gap: 8px;
        width: 100%;
    }
`

export const FooterMenuColumnTitle = styled.div`
    font-family: Alpino;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--neutral-light_2);
    pointer-events: none;
    transition: all 0.3s ease-out;

    @media (max-width: 720px) {
        width: 100%;
        padding-bottom: 6px;
        border-bottom: 1px solid var(--neutral-light_2);
        pointer-events: all;
        cursor: pointer;
    }
`


export const FooterMenuColumnLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 6px;
    height: fit-content;

    @media (max-width: 720px) {
        height: 0px;
        overflow: hidden;
        padding-left: 8px;
    }
`

export const FooterMenuColumnLink = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    align-items: flex-start;
    gap: 1px;
    cursor: pointer;

    &:hover {
        p {
            color: var(--neutral-light);
        }
        div {
            width: 100%;
        }
    }

    p {
        font-family: Alpino;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        color: var(--neutral-light_2);
        transition: all 0.3s ease-out;
    }

    div {
        position: relative;
        width: 0%;
        height: 1px;
        background-color: var(--neutral-light);
        transition: all 0.2s ease;
    }
`

export const FooterMenuCTA = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr;
    grid-template-rows: 1fr;
    gap: 16px;
    grid-template-areas:
        '.';
    grid-area: cta;
    justify-items: center;
    align-items: center;
    width: fit-content;

    @media (max-width: 720px) {
        grid-area: unset;
        grid-template-columns: 1fr 0.1fr;
        width: 100%;
        justify-items: stretch;
    }
`

export const CTAText = styled.p`
    font-family: Boska;
    font-style: normal;
    font-weight: 500;
    color: var(--neutral-light_2);
    text-transform: capitalize;
`

export const CTAButton = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 2px solid var(--neutral-light_2);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
        background-color: var(--neutral-light_2);

        p {
            color: var(--neutral-dark);
        }
    }

    p {
        font-family: Alpino;
        font-style: normal;
        font-size: 0.875em;
        font-weight: 700;
        color: var(--neutral-light_2);
        text-transform: uppercase;
    }
`

export const FooterDisclaimerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.25fr 1fr;
    gap: 1.5rem;
    grid-template-areas:
        '.'
        '.';
    width: 100%;
    align-items: center;
    justify-items: center;
`
export const FooterDivider = styled.div`
    display: flex;
    position: relative;
    top: 0;
    width: 90%;
    height: 1px;
    background-color: var(--neutral-light_2);

    @media (max-width: 720px) {
        display: none;
    }
`
export const DisclaimerPaymentMethods = styled.div`
    display: grid;
    gap: 8px;
    height: fit-content;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;

    svg {
        font-size: clamp(1.5em, 2em, 1.5vw);
    }
`

export const DisclaimerFoot = styled.div`
    display: grid;
    align-items: center;
    grid-gap: 1.5rem;
    grid-auto-flow: row;
    width: 100%;
    justify-items: center;
    justify-content: center;
`
export const Disclaimer = styled.p`
    font-family: Alpino;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75em;
    color: var(--neutral-light);
`
export const SocialMediaWrapper = styled.div`
    display: grid;
    gap: 3rem;
    grid-auto-flow: column;
    width: 100%;
    
    svg {
        font-size: clamp(1em, 1.5em, 1.5vw);
        color: var(--neutral-light_2);
        transition: all 0.3s ease-out;
        cursor: pointer;

        &:hover {
            color: var(--neutral-light);
    }
    }
`