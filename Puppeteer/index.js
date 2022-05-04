//  When page is of small size

const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await page.screenshot({path:"amazing.png"})
    await browser.close()    // without this, will execute for forever
}

start()

