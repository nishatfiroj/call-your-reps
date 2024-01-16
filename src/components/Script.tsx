import React from "react"
import styled from "styled-components"
import { getDaysSince } from "@/app/helpers"

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
  const daysSince = getDaysSince()
  return (
    <ScriptContainer>
      hi, my name is <b>[NAME]</b> and im a constituent from{" "}
      <b>[CITY], {loc}</b>. im calling to urge{" "}
      {senator ? "senator" : "representative"} {rep} to call for{" "}
      <Number>(1)</Number> a total and permanent ceasefire in gaza where over
      30,000 palestinians have been murdered by Israel in {daysSince} days,{" "}
      <Number>(2)</Number> humanitarian aid to enter gaza, and{" "}
      <Number>(3)</Number> no more weapons or funding to the israeli military.
      thank you.
    </ScriptContainer>
  )
}
