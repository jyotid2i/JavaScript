// Getting src of all images

const puppeteer = require('puppeteer')
const cron = require('node-cron')

//  it will give us promise
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://d2itechnology.com/blogs/")


    //  $$eval() function is designed for selecting multiple element  
    // here not need to write Array.from
    //  imgs is actual araay
    const photos = await page.$$eval("img", (imgs) => {
        return Array.from(imgs.map(x => x.src))
    })

    //console.log(photos)
    await fs.writeFile("ArrayOfSrc.txt",photos)

    await browser.close()    // without this, will execute for forever
}

start()

