import styled from 'styled-components'

export const StyledProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding-top:20px;
  height: 300px;
  width: 300px;
  transition: box-shadow .5s;
  border-radius: 5px;
  margin-left:45px;

  &:hover{
    box-shadow: 0 0 20px #021e33;
  }

  & p{
    font-size: 20px;
  }
`
