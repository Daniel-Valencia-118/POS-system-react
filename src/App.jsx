import styled from "styled-components";
import { GlobalStyles } from "./index";
import {Device} from "./styles/breakpoints"

function App() {
  return (
    <Container>
      <GlobalStyles/>
      <section className="contentSidebar">sidebar</section>
      <section className="contentMenuambur">menu ambur</section>
      <section className="contentRouters"> routers </section>
    </Container>
  );

}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  
  .contentSidebar {
    display: none;
    background-color: rgba(78,45,78,0.5);
  }
  .contentMenuambur {
    position: absolute;
    background-color: rgba(78,45,78,0.5);
  }
  .contentRouters {
    background-color: rgba(78,45,78,0.5);
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }
    .contentMenuambur {
      position: none;
    }
  }
`
export default App
