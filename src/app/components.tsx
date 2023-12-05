import React from "react"
import styled from "styled-components"

const BodyContainer = styled.p`
  padding: 1rem;
  line-height: 1.5rem;
  text-align: center;
`

export function Body({
  loc,
  rep,
  senator = false,
}: {
  loc: string
  rep: string
  senator?: boolean
}) {
  return (
    <BodyContainer>
      hi, my name is <b>[NAME]</b> and im a constituent from <b>{loc}</b>. my
      email address is <b>[EMAIL]</b>. im calling to urge{" "}
      {senator ? "senator" : "representative"} {rep} to{" "}
      {senator
        ? "support an immediate and permanent ceasefire in israel and palestine"
        : `vote no on house resolution 894.  it equates antisemitism with anti Zionism, 
        which is factually incorrect, racist, discriminatory, and silences the right of 
        free speech for people advocating for an end to the genocide and killing in Gaza. 
        as our representatives, you have a responsibility to protect our freedom of speech 
        and truly represent the opinions of your constituents, so vote no on the resolution.`}
      . i will not vote for {senator ? "senator" : "representative"} {rep} in
      the next election and will mobilize other voters to do the same if
      [HE/SHE/THEY] continue to be complicit in genocide against civilians in
      Gaza. thank you for listening.
    </BodyContainer>
  )
}
