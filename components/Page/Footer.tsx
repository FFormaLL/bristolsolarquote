import Image from 'next/image'
import styled from 'styled-components'
import packageJson from '~/package.json'

const FooterWrapper = styled.footer`
    padding: 16px;
    text-align: center;

    img {
        width: 32px;
        margin: 8px;
        background: #fff;
        border-radius: 50%;
        display: inline-block;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            
        </FooterWrapper>
    )
}

export default Footer
