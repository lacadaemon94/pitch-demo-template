import styled from 'styled-components'

export const DesktopMenuWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    padding: 1.5rem 2rem;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    z-index: 3;

    @media (max-width: 720px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    max-height: 72px;

    svg:nth-child(1) {
        font-size: 10em;
        @media (max-width: 1440px) {
            display: none;
        }
    }
    svg:nth-child(2) {
        display: none;
        font-size: clamp(2em, 3em, 2.5vw);
        @media (max-width: 1440px) {
            display: flex;
        }
    }
`

export const MenuButtonsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    gap: 1.5rem;
`

export const MenuButton = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: clamp(2rem, 3rem, 2.5vw);
    height: clamp(2rem, 3rem, 2.5vw);
    background-color: ${(props) => props.type === 'cta' ? 'var(--primary-color)' : 'none'};
    border: ${(props) => props.type === 'cta' ? 'none' : '2px solid'};
    border-radius: clamp(4px, 12px, 0.75vw);
    border-color: ${(props) => props.type === 'cta' ? 'none' : 'var(--primary-color)'};
    align-items: center;
    justify-content: center;
    padding: clamp(0px,8px,0.25vw);
    cursor: pointer;
    transition: all 0.4s ease-out;

    svg {
        font-size: clamp(1.5em, 2.5em, 2vw);
        color: ${(props) => props.type === 'cta' ? 'var(--neutral-light)' : 'var(--primary-color)'}
    }
    &:hover {
        background-color: var(--primary-color);

        svg {
            color: var(--neutral-light)
        }
    }
`