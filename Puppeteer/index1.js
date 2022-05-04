//  When page is of big size
//await page.screenshot({ path: "goggleMeet.png", fullPage: true })  fullpage have to add true



const puppeteer = require("puppeteer")

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://en.wikipedia.org/wiki/JavaScript")
    await page.screenshot({ path: "WjavaScript.png" , fullPage: true})
    await browser.close()    // without this, will execute for forever
}

start()

