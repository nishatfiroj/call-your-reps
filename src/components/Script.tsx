import React from "react"
import styled from "styled-components"

const ScriptContainer = styled.p`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: left;
  font-size: 14px;
`

const Number = styled.b`
  font-size: 15px;
`

export function Script({
  loc,
  rep,
  senator = false,
}: {
  loc: string
  rep: string
  senator?: boolean
}) {
  return (
    <ScriptContainer>
      hi, my name is <b>[NAME]</b> and im a constituent from <b>{loc}</b>. my
      email address is <b>[EMAIL]</b>. im calling to urge{" "}
      {senator ? "senator" : "representative"} {rep} to call for{" "}
      <Number>(1)</Number> a total and permanent ceasefire, <Number>(2)</Number>{" "}
      humanitarian aid allowed to enter gaza, <Number>(3)</Number> an end to
      israel&apos;s siege on gaza, and <Number>(4)</Number> no more weapons or
      funding to the israeli military. thank you for listening.
    </ScriptContainer>
  )
}
