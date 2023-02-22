import styled from 'styled-components';

export const MobileNavbarWrapper = styled.div`
    display: none;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    top: 0;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: var(--primary-color);
    z-index: 3;

    @media (max-width: 720px) {
        display: flex;
    }
`

export const NavigationWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: space-between;
`
export const MenuButton = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: clamp(2rem, 3rem, 8vw);
    height: clamp(2rem, 3rem, 8vw);
    background-color: 'none';
    border: 2px solid var(--neutral-light);
    border-radius: clamp(10px,16px,2.25vw);
    align-items: center;
    justify-content: center;
    padding: clamp(0px, 4px, 0.25vw);
    cursor: pointer;
    transition: all 0.4s ease-out;

    svg {
        color: var(--neutral-light);
        font-size: clamp(1.5em, 2em, 1.25vw);
    }
    &:hover {
        background-color: ${(props) => props.type === 'cta' ? 'var(--neutral-light)' : 'var(--primary-color)'};

        svg {
            color: var(--primary-color);
        }
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: 48px;
    align-items: center;
    overflow: hidden;

    svg {
        font-size: clamp(6em,8em,16vw);
        color: var(--neutral-light);
    }
`

export const MenuContentContainer = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: ${(props) => props.toggle ? '100vh' : props.searchbar ? 'fit-content' : '104px'};
    background-color: var(--primary-color);
    border-radius: ${(props) => props.toggle ? '0px' : '16px'};
    padding: ${(props) => props.searchbar ? '7rem 1.5rem 1.5rem 1.5rem' : '0'};
    overflow: ${(props) => props.toggle ? 'hidden' : 'unset'};
    z-index: 2;

    @media (max-width: 720px) {
        display: grid;
    }
`

export const MenuExtendHandle = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    flex-wrap: nowrap;
    bottom: -12px;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: end;
    transition: all 0.4s ease-out;

    svg:nth-child(1) {
        display: flex;
        position: absolute;
        bottom: 0px;
        left: -5px;
        transition: all 0.4s ease-out;
        transform: ${(props) => props.searchbar ? 'rotate(-180deg)' : 'none'}
    }
    svg:nth-child(2) {
        display: flex;
        position: absolute;
        z-index: -1;
    }
`