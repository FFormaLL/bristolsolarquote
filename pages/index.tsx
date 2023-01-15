import styled from 'styled-components'
import Page from '~/components/Page'

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 10vh 32px;
  height: 80vh;

  h1 {
    font-size: 5vw;
    margin-bottom: 32px;
  }

  img {
    width: auto;
    height: 200px;
  }


`


const IndexPage = () => {
  
  return (
    <Page>
      <Wrapper>
        <h1>☀️Bristol Solar Quote☀️</h1>
        <h2>Contact Marcus Ferro with all your Solar and Real Estate questions!</h2>
        <h2>Phone: 774-386-1280<p>Email: Marcus.ferro3@gmail.com</p></h2>
        <center><img src="\brand\MarcusHEADSHOT.png" ></img></center>
      </Wrapper>
    </Page>
  )
}

export default IndexPage
