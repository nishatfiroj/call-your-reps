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
  return senator ? (
    <ScriptContainer>
      My name is ____ in ZIP code _____. I urge Senator {rep} to VOTE NO on the
      1.2 trillion dollar spending package that the House just passed! This
      package includes extending the ban on UNRWA funding. Banning aid to UNRWA
      is an active choice that will kill Palestinians who need that aid to
      survive. Starvation is a form of collective punishment. I&apos;m furious
      that my government is banning aid with zero investigation while denying
      the vast evidence presented in court that Israel is committing genocide.
      Senator {rep} MUST VOTE NO.
    </ScriptContainer>
  ) : (
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
