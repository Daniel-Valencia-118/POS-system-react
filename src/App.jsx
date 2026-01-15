import styled from "styled-components";
import { GlobalStyles, MyRoutes, Sidebar } from "./index";
import {Device} from "./styles/breakpoints"

function App() {
  return (
    <Container>
      <GlobalStyles/>
      <section className="contentSidebar"> <Sidebar/> </section>
      <section className="contentMenuhambur">menu ambur</section>
      <section className="contentRouters"> <MyRoutes/> </section>
    </Container>
  );

}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  
  .contentSidebar {
    display: none;
    background-color: rgba(74, 65, 201, 0.5);
  }
  .contentMenuhambur {
    position: absolute;
    background-color: rgba(55, 163, 51, 0.5);
  }
  .contentRouters {
    display: flex;
    background-color: rgba(175, 41, 119, 0.5);
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
    }
    .contentMenuhambur {
      display: none;
    }
    .contentRouters {
      grid-column: 1;
    }
  }
`
export default App
