export class Utility {
  getBaseUrl() {
    let envi = Cypress.env("ENV"); //Get the value of environment variable i.e ENV
    if (envi == "production")
      //Check the value
      return "https://robishop.com.bd/";
    //return desired url
    else if (envi == "staging") return "https://robishop.com.bd/";
    else if (envi == "qa") return "https://rashidulhasan.me/";
  }
}
