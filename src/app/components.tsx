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
        : "support house resolution 786, which calls for an immediate and permanent ceasefire in israel and palestine"}
      . i will not vote for {senator ? "senator" : "representative"} {rep} in
      the next election and will mobilize other voters to do the same if
      [HE/SHE/THEY] continue to be complicit in genocide against civilians in
      Gaza. thank you for listening.
    </BodyContainer>
  )
}
