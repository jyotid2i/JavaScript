//  When page is of small size  & want to get all of the name from webpage

const puppeteer = require('puppeteer')

//  it will give us promise
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    const names = ['red', 'orange', 'yellow']

    // first is the name of file that we want to create and second is array
    await fs.writeFile("names.txt",names.join("\r\n"))

    await browser.close()    // without this, will execute for forever
}

start()

