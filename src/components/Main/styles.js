import { styled } from "styled-components";

export const StyleContainer = styled.div`
  max-width: 68rem;

  margin: 0 auto 30rem;

  background-color: var(--color-white);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  border-radius: 1rem;

  padding: 2rem 3rem;
`;

export const StyleMidiaSocias = styled.div`
  text-align: right;

  svg{
    color: var(--color-black2);
    font-size: 2.8rem;
    margin-left: 8px;    
  }
`;


export const StyleTitle = styled.div`
  text-align: center;
  padding: 5rem 0 2rem 0;

  h1{
    font-size: 3rem;
    color: var(--color-black);
  }
`;


export const StyleSearch = styled.div`

  border-bottom: 3px solid var(--color-gray1);

  h2{
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--color-black);
  }

  input{
    border: none;
    border-radius: 3px;
    box-sizing: border-box;

    color: var(--color-black2);
    background-color: var(--color-gray1);
    font-weight: bold;

    font-size: 1.5rem;
    font-weight: bold;

    width: 100%;

    margin-bottom: 2.4rem;

    padding: 8px 10px;
        
    outline: none;
  }
`;


export const StyleWrapperTodo = styled.div`

  h2{
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 2rem;
    color: var(--color-black);
    padding-bottom: 10px;
  }

  svg{
    color: var(--color-blue);
  }
`;


/* Style das tarefas */
export const StyleTodo = styled.div`
   
`;


/* Style content*/
export const StyleContent = styled.div`
  background-color: var(--color-gray1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: start;
  

  margin-bottom: 1rem;

  padding: 2rem 1rem;
`;


/* Style dos paragrafos */
export const StyleParagraph = styled.p`
  color: ${({ cor }) => cor ? cor : "#17a2b8"};

  font-size: 1.8rem; 
  font-weight: bold;
  
  margin-bottom: 1rem;
  
`;


/* Style dos botões tarefa Concluida */
export const StyleButton = styled.button`

  color: ${({ cor }) => cor ? cor : "#bf4f74"};
  cursor: pointer;

  font-size: 1.5rem;
  font-weight: bold;

  border: 2px solid var(--color-blue);
  border-radius: 5px;
  background-color: transparent;

  transition:all 0.2s;
  padding: 5px 10px;

  margin-bottom: 10px;

  &:hover{
    opacity: 0.7;
  }

  &:active{
    background-color: var(--color-blue);
    color: var(--color-white);
  }

`;


/* Style dos botões Delete */
export const StyleButtonDelete = styled(StyleButton)`
  border: 2px solid var(--color-red);

  margin-left: 5px;

  &:active{
    background-color: var(--color-red);
    color: var(--color-white);
  }
`;


/* Style do formulario */
export const StyleFormWrapper = styled.div`

  border-bottom: 3px solid var(--color-gray1);
  margin-bottom: 20px;

  h2{
    font-size: 2.4rem;
    color: var(--color-black);
    padding: 2rem 0;
  }
  
`;

export const StyleForm = styled.form.attrs(() => ({
  addtarefa: "",
}))`

  padding-bottom: 1.5rem;

  input, select{    
    border: 1px solid ${props => props.erro ? '#bf4f74' : '#e5e6f0'};
    border-radius: 3px;
    box-sizing: border-box;

    color: var(--color-black2);
    background-color: var(--color-gray1);
    font-weight: bold;

    font-size: 1.5rem;
    font-weight: bold;

    width: 100%;

    margin-bottom: 1.5rem;

    padding: 8px 10px;
        
    outline: none;
   
  }

`;