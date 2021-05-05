import { useContext } from 'react';
import styled from 'styled-components';
import Buttons from '../components/ButtonsLayout';
import { Display } from '../components/Display';
import { GlobalContext } from '../styles/GlobalProvider';



export default function Home() {
  const { dark, changeTheme } = useContext(GlobalContext);
  return (
    <>
    <Layout>
    <Theme onClick={() => changeTheme()}>{dark ? 'light mode' : 'dark mode'}</Theme>
    <Header>
      fcc Calculator v.2
    </Header>
      <Calculator>
      <Display />
      <Buttons />
      </Calculator>
    </Layout>

    </>
  )
}


const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  width: 100vw;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
`

const Calculator = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  padding: 2rem;
  height: 510px;
  width: 100%;
  max-width: 370px;
`

const Theme = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 4rem;
  width: 8rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s;

  &:hover {
    box-shadow: inset 0px 0px 5px #000;
  }
`