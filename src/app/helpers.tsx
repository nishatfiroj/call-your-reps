export const createFaxCopy = (name: string, rep: string) => {
  return `My name is ${name}, and I'm a constituent of senator ${rep}. I'm faxing about Palestine and Israel. The Senator must take immediate steps to deescalate, by calling for a permanent ceasefire, pressuring Israel to allow humanitarian aid into Gaza, and refusing to send any additional weapons or funding to the Israeli military. I support a permanent ceasefire, along with 60 Congressmembers, and two thirds of American voters. I am asking the Senator to publicly call for a ceasefire, in line with the Ceasefire Now resolution in the House, H.Res. 786, led by Rep. Cori Bush.
This is a genocide of Palestinian people in Gaza. As your office was recently informed by the Center for Constitutional Rights, there is potential legal liability for aiding and abetting genocide through congressional acts. In a new lawsuit, Palestinians are suing President Biden for complicity in genocide. The Senator must take action now to stop genocide and end all U.S. complicity in Israel's violence.
Lastly, I want to call on you as a staffer who works in the Representative's office. Please refuse to be complicit in genocide, and do everything in your power to advocate for a ceasefire. That includes organizing, such as the recent walkout of over 100 staffers. Will you take action to stop the killing?`
}

export const getDaysSince = () => {
  const nakbaStart = new Date("10/07/2023")
  const today = new Date()
  const timeSince = today.getTime() - nakbaStart.getTime()
  return Math.floor(timeSince / (1000 * 3600 * 24))
}
