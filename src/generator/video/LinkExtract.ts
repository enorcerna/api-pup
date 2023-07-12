import puppeteer from "puppeteer-core"
import chrome from "chrome-aws-lambda"

async function LinkExtra(url: string) {
  const browser = await puppeteer.launch( { headless: "new", args: [ ...chrome.args, "--no-sandbox", '--hide-scrollbars', '--disable-web-security' ], defaultViewport: chrome.defaultViewport, executablePath: await chrome.executablePath, ignoreHTTPSErrors:true} )
  const page = await browser.newPage()
  await page.goto( url )
  const video = await page
			.waitForSelector('video')
			.then((el) => el?.getProperty('src').then((src) => src?.jsonValue()) as Promise<string>);
  await browser.close()
  return video
}
export default LinkExtra
