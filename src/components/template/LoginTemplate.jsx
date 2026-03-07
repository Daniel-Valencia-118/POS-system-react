import styled from "styled-components";
import { Footer, Btnsave, Device, InputText2, Linea, Title, useAuthStore } from "../../index";
import { v } from "../../styles/variables";
import {} from "../../styles/breakpoints";

export function LoginTemplate() {
  const {loginGoogle} = useAuthStore()
  return (
    <Container>
        <div className="card">
            <Title $paddingbottom="20px"> Ingresar </Title>
            <form>
              <InputText2>
                {/* clase heredad por el padre en input text */}
                <input className="form__field" placeholder="email" type = "text"/>
              </InputText2>

              <InputText2>
                {/* clase heredad por el padre en input text */}
                <input className="form__field" placeholder="password" type = "password"/>
              </InputText2>
              <Btnsave titulo= "INGRESAR" bgcolor="#1CB0F6" color="255,255,255" width="100%"/>
            </form>
            <Linea>
              <span>0</span>
            </Linea>
            <Btnsave function = {loginGoogle} titulo="Google" bgcolor="#FFF" icono={<v.iconogoogle/>} />
        </div>
        
        <Footer/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 20px;

    @media ${Device.tablet} {
      width: 400px;
    }
  }
`
