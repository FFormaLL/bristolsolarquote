import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatcher, useMedia } from '~/hooks'
import { ColorScheme, GlobalState } from '~/store'
import { ThemeProps } from '~/styles/theme'
import Page from '~/components/Page'

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 10vh 32px;
  height: 80vh;

  h1 {
    font-size: 64px;
    margin-bottom: 32px;
  }
`

const Card = styled.div(({ theme }:ThemeProps) => `
  cursor: pointer;
  display: inline-block;
  width: 30%;
  min-width: 300px;
  margin: 0.5em;
  height: 256px;
  line-height: 256px;
  border: 1px solid ${theme.colors.fgLight};
  border-radius: 0.5em;
  background: rgba(0, 0, 0, 0.15);
`)

const IndexPage = () => {
  const { isMobile, isTablet } = useMedia()
  const globalState = useSelector((s:GlobalState) => s)
  const { setJwt, setUser, switchColorScheme } = useDispatcher()
  const toggleUserSim = () => {
    if (globalState.authenticatedUser) {
      setJwt(null)
      setUser(null)
    } else {
      setJwt('<jwt>')
      setUser({
        email: 'dev@example.com',
        username: 'JustAnotherDev'
      })
    }
  }
  return (
    <Page title="Home">
      <Wrapper>
        <h1>☀️Bristol Solar Quote☀️</h1>
        <h2>Contact Marcus Ferro with all your Solar and Real Estate questions!</h2>
        <h2>Phone: 774-386-1280<p>Email: Marcus.ferro3@gmail.com</p></h2>
      </Wrapper>
    </Page>
  )
}

export default IndexPage
