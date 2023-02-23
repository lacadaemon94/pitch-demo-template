import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
    display: flex;
    visibility: ${(props) => props.mobile ? 'visible' : props.desktop ? 'visible' : 'hidden'};
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    max-height: 49px;
    align-items: flex-start;
    justify-content: center;
    z-index: ${(props) => props.mobile ? '2' : 'unset'};
`

export const SearchBarInput = styled.input`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    justify-content: left;
    padding: clamp(8px,14px,0.75vw);
    background-color: ${(props) => props.visible ? '#581313' : '#EFCEDE'};
    border-radius: ${(props) => props.mobile ? '8px' : 'clamp(4px, 8px, 0.75vw)'};
    border: none;
    font-style: normal;
    font-size: clamp(0.75em, 1em, 1vw);
    font-weight: 500;
    color: var(--neutral-light_2);
    text-align: left;
    text-decoration: none;
    text-shadow: none;
    box-shadow: none;
    outline: none;
    appearance: none;
    transition: all 0.4s ease-out;
    z-index: 2;

    &:focus {
        border: none;
        appearance: none;
        text-shadow: none;
        box-shadow: none;
        outline: none;
    }
  
    &::placeholder {
        color: #B2889C;
    }
`

export const SearchBarQuickResults = styled.div`
    display: flex;
    visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
    position: absolute;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    padding: 2rem 0rem 2rem 2rem;
    background-color: var(--neutral-dark);
    top: 0;
    z-index: 1;
    border-radius: ${(props) => props.mobile ? '16px' : 'clamp(4px, 8px, 0.75vw)'};

    @media (max-width: 1024px) {
        padding: 2rem;
    }
`

export const QuickResultsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    padding: 2.75rem 0rem 1rem 0;
    align-items: flex-start;
    gap: 3rem;
`
export const QuickResultsColumnsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    gap: 1.5rem;
`

export const QuickResultsColumnWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    gap: 3rem;
    align-items: flex-start;
    overflow: hidden;
`
export const QuickResultsSectionWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    gap: 8px;
    align-items: flex-start;
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: -moz-scrollbars-none;
    cursor: grab;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const QuickResultsSectionTitle = styled.p`
    font-family: Alpino;
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    text-transform: uppercase;
    color: var(--neutral-light_2);
    letter-spacing: 0.04em;
`
export const QuickResultsSectionContentWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: 100%;
    align-items: flex-start;
    gap: 1rem;
`

export const QRSectionCardsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: ${(props) => props.size === 'large' ? '360px' : '100%'};
    height: ${(props) => props.size === 'large' ? '360px' : '100%'};
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;

    &:hover {
        p {
            letter-spacing: 0.04em;
        }
    }
`

export const QRSectionCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.4s ease-out;

    &:hover {
        img {
            scale: 1.1;
        }
    }

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: auto;
        transition: all 0.2s ease-out;
        background-color: var(--neutral-dark);
    }
`

export const QRSectionCardTitle =  styled.p`
    font-family: Boska;
    font-style: normal;
    color: var(--neutral-light_2);
    font-weight: 500;
    text-align: left;
    text-transform: capitalize;
    max-width: clamp(80px, 160px, 7.5vw);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.2s ease-out;

    &:hover {
        color: #EFCEDE;
    }
`

export const QRSectionTagsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    gap: 1rem;
`

export const QRSectionTagsPills = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--neutral-light_2);
    border-radius: 12px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.4s ease-out;

    &:hover {
        background-color: var(--neutral-light_2);
        
        p {
            color: var(--neutral-dark);
        }
    }

    p {
        font-family: Alpino;
        font-weight: 500;
        text-align: center;
        text-transform: capitalize;
        color: var(--neutral-light_2)
    }
`

export const QRSectionNavigatorButton = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding: 2px;
    transition: all 0.4s ease-out;
    cursor: pointer;

    &:hover {
        svg {
            color: #EFCEDE;
        }
    }

    svg {
        font-size: 1.5em;
        color: var(--neutral_light_2);
    }
`
