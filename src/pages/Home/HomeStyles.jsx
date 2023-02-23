import styled from 'styled-components';

export const Home = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    padding: clamp(1.5rem, 2rem, 1.66vw);

    @media (max-width: 720px) {
        padding: 0;
    }
`
export const HomeSectionOne = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 0.75fr 1fr;
    grid-gap: 3rem;
    grid-template-rows: 1fr;
    width: 100%;
    align-items: stretch;

    @media (max-width: 1366px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1024px) {
        grid-template-columns: 0.75fr 1fr;
    }
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 640px) {
        gap: 1rem;
    }
`

export const FeaturedProduct = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    border-radius: 1.5rem;
    box-shadow: -23px 119px 48px rgba(112, 0, 54, 0.01), -13px 67px 41px rgba(112, 0, 54, 0.05), -6px 30px 30px rgba(112, 0, 54, 0.09), -1px 7px 17px rgba(112, 0, 54, 0.1), 0px 0px 0px rgba(112, 0, 54, 0.1);
    overflow: hidden;
    cursor: pointer;

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 720px) {
        min-height: 520px;
    }
`

export const FeaturedCardHeader = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    z-index: 1;

    h5 {
        font-style: normal;
        font-family: Alpino;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: var(--primary-color);
        text-transform: uppercase;
    }

    div {
        display: flex;
        position: relative;
        flex-direction: column;
        flex-wrap: nowrap;
        width: fit-content;
        height: fit-content;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        border-radius: 50%;
        padding: 4px;
        cursor: pointer;

        &:hover {
            svg {
                color: var(--neutral-light);
            }
        }

        svg {
            transition: all 0.2s ease-out;
            font-size: clamp(0.875em, 2em, 1.66vw);
            color: ${(props) => props.active ? 'var(--neutral-light)' : 'transparent'};
        }
    }
`

export const ContentWrapper = styled.div`
    display: grid; 
    grid-template-columns: 1fr; 
    gap: 24px 0px; 
    grid-template-areas: 
    "products-grid"
    "featured-product-details";
    
    @media (max-width: 720px) {
        gap: 3rem 0;
        padding: clamp(1.5rem, 2rem, 1.66vw)
    }
`

export const NewProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    @media (max-width: 720px) {
        order: 1;
        grid-gap: 1rem;
    }
`

export const NewProductsTitle = styled.h5`
    display: grid;
    position: absolute;
    top: 2.5rem;
    width: 16px;
    height: 82px;
    font-style: normal;
    font-family: Alpino;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--primary-color);
    text-transform: uppercase;
    transform: rotate(-90deg);

    @media (max-width: 720px) {
        position: relative;
        width: fit-content;
        height: fit-content;
        transform: unset;
        top: unset;
    }
`

export const NewProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 24px 24px;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
    width: 100%;
    height: 100%;

    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 0fr;
        gap: 1rem;
        grid-template-areas:
            ". . "
            ". . "
            ". . ";
    }
`
export const ProductsGridCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: -13px 10px 7px rgba(0, 33, 77, 0.01), -7px 6px 6px rgba(0, 33, 77, 0.05), -3px 3px 4px rgba(0, 33, 77, 0.09), -1px 1px 2px rgba(0, 33, 77, 0.1), 0px 0px 0px rgba(0, 33, 77, 0.1);
    cursor: pointer;

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`

export const SProductCardCTAs = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    justify-content: space-between;
    padding: clamp(8px, 12px, 1.25vw);
    z-index: 1;
`

export const SPCardCTAButton = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.type === 'active' ? 'var(--primary-color)' : 'var(--neutral-light)'};
    border-radius: 50%;
    padding: clamp(2px, 4px, 1.25vw);
    cursor: pointer;

    &:hover {
            svg {
                color: ${(props) => props.type === 'active' ? 'var(--neutral-light)' : 'var(--primary-color)'};
            }
        }

    svg {
        font-size: clamp(1em, 1.5em, 1.5vw);
        color: ${(props) => props.type === 'active' ? 'var(--neutral-light)' : 'transparent'};

        path {
            stroke: ${(props) => props.type === 'active' ? 'unset' : 'var(--primary-color)'};
        }
    }

`

export const FeaturedProductPreview = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    @media (max-width: 720px) {
        order: 0;
    }
`

export const FeaturedProductHeader = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: flex-start;

    h4 {
        font-family: Boska;
        font-style: normal;
        font-weight: 700;
        color: var(--primary-color);
        text-transform: capitalize;

        @media (max-width: 1024px) {
            font-size: clamp(1.5em, 3em, 1.66vw);
        }
    }

    h5 {
        font-family: Alpino;
        font-style: normal;
        font-weight: 300;
        color: var(--primary-color);
        font-size: clamp(0.875em, 1.5em, 1.25vw);
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }
`

export const FeaturedProductDetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const FDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
`

export const FDetailsTitle = styled.h5`
    font-family: Alpino;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--primary-color);
`
export const FDetailsText = styled.p`
    font-family: Alpino;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: var(--primary-color);
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1024px) {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`

export const FeaturedProductControls = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
`

export const FeaturedProductRowCTA = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 8px;
    align-items: center;

    p {
        font-family: Alpino;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        text-transform: capitalize;
        min-width: fit-content;
        white-space: nowrap;
        color: var(--primary-color);

        @media (max-width: 1024px) {
            font-size: clamp(0.875em, 1em, 1.25vw);
        }
    }
`

export const FeaturedControlsCTANormal = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 2px solid var(--primary-color);
    background-color: ${(props) => props.type === 'active' ? 'var(--primary-color)' : 'var(--neutral-light)'};
    border-radius: 4px;
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.type === 'active' ? 'var(--primary-color)' : 'var(--primary-color)'};
        svg {
            color: ${(props) => props.type === 'active' ? 'var(--neutral-light)' : 'var(--neutral-light)'};
        }
    }

    svg {
        font-size: clamp(1em, 1.25em, 1.25vw);
        color: ${(props) => props.type === 'active' ? 'var(--neutral-light)' : 'var(--primary-color)'};
    }
`
export const FeaturedControlsCTACounter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    align-items: center;

    p {
        font-family: Alpino;
        font-style: normal;
        font-size: 1.25em;
        font-weight: 700;
        text-align: center;
        text-transform: capitalize;
        color: var(--primary-color);
        height: 100%;
        transition: all 0.3s ease-out;
        cursor: pointer;

        &:hover {
            background-color: var(--primary-color);
            color: var(--neutral-light);
        }

    }
    h5 {
        font-family: Alpino;
        font-style: normal;
        font-size: 1.25em;
        font-weight: 700;
        text-align: center;
        text-transform: capitalize;
        color: var(--primary-color);
        height: 100%;
        transition: all 0.3s ease-out;
    }
`

export const FeaturedProductCTAsWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 8px;
`