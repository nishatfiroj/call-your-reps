import React from "react"
import styled from "styled-components"

const ScriptContainer = styled.p`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: left;
  font-size: 14px;
`

const Number = styled.b`
  font-size: 18px;
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
      <Number>➊</Number> a total and permanent ceasefire, <Number>➋</Number>{" "}
      humanitarian aid allowed to enter Gaza, <Number>➌</Number> an end to
      Israel&apos;s siege on Gaza, and <Number>➍</Number> no more weapons or
      funding to the Israeli military. Please vote NO on the supplemental
      funding package to send more weapons to Israel. I am asking the Senator to
      publicly call for a ceasefire, in line with the Ceasefire Now resolution
      in the House,H.Res. 786, led by Rep. Cori Bush. thank you for listening.
    </ScriptContainer>
  )
}
