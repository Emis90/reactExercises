const pupperteer = require('puppeteer')


async function scrape(url) {
  const browser = await pupperteer.launch()//launch browswe
  const page = await browser.newPage()//launch a blanc page
  await page.goto(url)

  const [image] = await page.$x('//*[@id="mw-content-text"]/div/table[1]/tbody/tr[4]/td/div[1]/div[1]/a/img')
  const src  = await image.getProperty('src')
  const srcText = await src.jsonValue()//returns a string??
  //$x is a puppeteer selector that allows to select an xpath, xpath is like jquery, it returns an array.
  //we are pulling out the first element of that turned array


  const [text] = await page.$x('//*[@id="firstHeading"]')
  const description = text.getProperty('textContent')
  // const italy = await description.jsonValue()

  console.log('>> ', description)
  browser.close()
}

scrape('https://en.wikipedia.org/wiki/Italy')//page i want to scrape
