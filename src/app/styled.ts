import Link from "next/link"
import styled, { keyframes } from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;

  text-align: center;

  padding: 1rem;
  width: 100%;
  height: 100%;
  min-height: 100%;
  color: #58355e;
`

export const TheBigHeader = styled.h1`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: center;
`
export const Header = styled.h2`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: center;
`

export const Prompt = styled.h3`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: center;
`

export const GoBackHome = styled(Link)`
  color: #006989;
  text-decoration: underline dotted #a3bac3;
  font-style: italic;
`

export const Button = styled(Link)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #58355e;
  text-align: center;
`

export const CopyButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #b4d9d3;
  text-align: center;
  background-color: #b4d9d3;
`

const strobe = keyframes`
  0% {
    background-color: #FF9AA2;
  }
  15% {
    background-color: #FFB7B2;
  }
  30% {
    background-color: #FFDAC1;
  }
  45% {
    background-color: #E2F0CB;
  }
  60% {
    background-color: #B5EAD7;
  }
  75% {
    background-color: #C7CEEA;
  }
  90% {
    background-color: #FFC6FF;
  }
  100% {
    background-color: #FF9AA2;
  }
`

export const MenaceButton = styled(Link)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #58355e;
  text-align: center;
  animation-name: ${strobe};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

export const RepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CallContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: underline dotted #a3bac3;
`
export const ScriptContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e6fffb;
  text-align: center;
  background-color: #e6fffb;
`
