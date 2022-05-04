//  When page is of small size  & want to get all of the name from webpage

const puppeteer = require('puppeteer')

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

    //  $$eval() function is designed for selecting multiple element  
    // here not need to write Array.from
    //  imgs is actual araay
    const photos =  await page.$$eval("img", (imgs) => {
        return imgs.map( x => x.src)
    })

    for ( const photo of photos) {
        const imagepage = await page.goto(photo)

        await fs.writeFile(photo.split("/").pop(), await imagepage.buffer())
    }
    await browser.close()    // without this, will execute for forever
}

start()

