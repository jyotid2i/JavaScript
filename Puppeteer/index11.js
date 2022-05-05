//  When page is of small size  & want to get all of the name from webpage

const puppeteer = require('puppeteer')

//  it will give us promise
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

   // await page.setDefaultNavigationTimeout(0);
    //await page.goto("https://d2itechnology.com")
    await page.goto("https://d2itechnology.com", {waitUntil: 'load',timeout: 0});

    //  using evaluate and passing arrow function that we want to run
    const names = await page.evaluate(() => {
        //within this function we are on brower  not on nodejs 
        // here we can write any client side javascript&  all the nornam function will be available to here

        return document.querySelector(".text-center p").textContent

    })

    // first is the name of file that we want to create and second is array
    //await fs.writeFile("nameFromPage.txt", names.join("\r\n"))
    console.log(names);
    await browser.close()    // without this, will execute for forever
}

start()

