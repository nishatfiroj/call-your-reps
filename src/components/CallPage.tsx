import {
  Main,
  GoBackHome,
  TheBigHeader,
  Header,
  RepContainer,
  CallContainer,
  Prompt,
  ScriptContainer,
} from "@/app/styled"

import { Call, Script } from "."

export function CallPage({
  city,
  rep,
  repNumber,
  sen1,
  sen1Number,
  sen2,
  sen2Number,
}: {
  city: string
  rep: string
  repNumber: string
  sen1: string
  sen1Number: string
  sen2: string
  sen2Number: string
}) {
  return (
    <Main>
      <GoBackHome href="../">go back to da main page</GoBackHome>

      <br />

      <TheBigHeader>♧ manhattan ♧</TheBigHeader>
      <p>just click the button and read the script, ez pz</p>

      <br />

      <Header>representative {rep}</Header>
      <RepContainer>
        <ScriptContainer>
          <Call telephone={repNumber} />
          <Script rep={rep} loc={`${city}, New York`} />
        </ScriptContainer>
      </RepContainer>
      <br />
      <br />

      <Header>senator {sen1}</Header>
      <ScriptContainer>
        <Call telephone={sen1Number} />
        <Script rep={sen1} loc={`${city}, New York`} senator />
      </ScriptContainer>

      <br />
      <br />

      <Header>senator {sen2}</Header>
      <RepContainer>
        <ScriptContainer>
          <Call telephone={sen2Number} />
          <Script rep={sen2} loc={`${city}, New York`} senator />
        </ScriptContainer>
      </RepContainer>
    </Main>
  )
}
