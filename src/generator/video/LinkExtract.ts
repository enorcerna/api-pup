import puppeteer from "puppeteer"
async function LinkExtra(url: string) {
  const browser = await puppeteer.launch( { headless: "new", args: [ "--no-sandbox" ] } )
  const page = await browser.newPage()
  await page.goto( url )
  const video = await page
			.waitForSelector('video')
			.then((el) => el?.getProperty('src').then((src) => src?.jsonValue()) as Promise<string>);
  await browser.close()
  return video
}
export default LinkExtra
