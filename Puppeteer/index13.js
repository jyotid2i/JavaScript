//  When page is of small size  & want to get all of the name from webpage

const puppeteer = require('puppeteer')
const cron = require('node-cron')

//  it will give us promise
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://learnwebcode.github.io/practice-requests/")

    await Promise.all([page.click("#ourform button")], [page.waitForNavigation()])
    const info = await page.$eval("#message", el => el.textContent)
    console.log(info)

    await browser.close()    // without this, will execute for forever
}

start()

