import styled from "styled-components";
import { Title } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <section className = "contentCard">
        <div className="card">
            <Title> Ingresar </Title>
            <form>
              
            </form>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
