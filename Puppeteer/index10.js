const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://d2itechnology.com/blogs/', { waitUntil: 'networkidle2', });

    await page.pdf({ path: 'D2i.pdf', format: 'a4' });
    await browser.close();
})();