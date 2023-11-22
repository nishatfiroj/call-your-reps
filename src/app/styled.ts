import Link from "next/link"
import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
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
