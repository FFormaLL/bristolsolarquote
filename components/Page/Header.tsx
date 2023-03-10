import Link from 'next/link'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { GlobalState } from '~/store'
import { ThemeProps } from '~/styles/theme'
import ThemeSwitch from '../ThemeSwitch'

const HeaderWrapper = styled.header(({ theme }:ThemeProps) => `
  padding: 16px;
  position: relative;

  h1 {
    display: inline-block;
  }

  .brand-logo {
    display: inline-block;
    width: 32px;
    border-radius: 50%;
    border: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
  }
  .brand-name {
    display: inline-block;
    font-size: 20px;
    padding: 0 8px;
  }
  .brand-name, .theme-switch {
    position: relative;
    top: -8px;
  }
  .theme-switch {
    top: 10px;
  }

  nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    padding: 32px;
  }

  .theme-switch {
    position: relative;
    bottom: -0.55em;
    margin-left: 1em;
  }
`)

const Divider = styled.span`
  padding: 16px;
  ::before {
    content: "|";
  }
`

const GuestAccountNav = () => {
  return (
    <>
    </>
  )
}

const UserAccountNav = ({ username }) => {
  return (
    <>
      <Link href="/me">
        <a>{ username }</a>
      </Link>
      <Divider />
      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </>
  )
}

const Header = () => {
  const user = useSelector((s:GlobalState) => s.authenticatedUser)
  return (
      <HeaderWrapper>
      <span className="theme-switch">
        <ThemeSwitch />
      </span>
      <nav>
        {
          !user
            ? <GuestAccountNav />
            : <UserAccountNav username={user.username} /> 
        }
      </nav>
      </HeaderWrapper>
  )
}

export default Header
