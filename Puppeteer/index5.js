//  When page is of small size  & want to get all of the name from webpage

const puppeteer = require('puppeteer')
const cron = require('node-cron')

//  it will give us promise
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")


    //  using evaluate and passing arrow function that we want to run
    const names = await page.evaluate(() => {
        //within this function we are on brower  not on nodejs 
        // here we can write any client side javascript&  all the nornam function will be available to here

        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)

    })

    // first is the name of file that we want to create and second is array
    await fs.writeFile("nameFromPage.txt", names.join("\r\n"))

    // this similate click event
    await page.click("#clickme")
    const clickedData = await page.$eval("#data",el => el.textContent)
    console.log(clickedData)

    //  $$eval() function is designed for selecting multiple element  
    // here not need to write Array.from
    //  imgs is actual araay
    const photos = await page.$$eval("img", (imgs) => {
        return imgs.map(x => x.src)
    })


    // when thing is on another  page

    await page.type("#ourfield","blue")
/*
    await page.click("#ourform button")
    // https://learnwebcode.github.io/practice-requests/  put left url
    await page.waitForNavigation()
*/
    await Promise.all([page.click("#ourform button")], [page.waitForNavigation()])
    const info = await page.$eval("#message", el => el.textContent)
    console.log(info)

    for (const photo of photos) {
        //  goto()  is visiting the url 
        const imagepage = await page.goto(photo)

        await fs.writeFile(photo.split("/").pop(), await imagepage.buffer())
    }
    await browser.close()    // without this, will execute for forever
}

start()

/*How long wanna wait
setInterval(start,5000)  this code will run forever

                or
*/
//cron.schedule("*/5 * * * * *",start)


