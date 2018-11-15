const request = require("request");
const cheerio = require("cheerio");

//getting names from file and stuffing into array
const fs = require("fs");
var fstream = fs.readFileSync("output.txt").toString();
var names = fstream.split("\n");

// console.log(names[584]);

var coun;

for (count = 0; count < 1; count++) {
  request(
    "https://www.cnarea.ca/web-2-0-directory/" + names[count],
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        //   const heading = $(".member-profile-page-title");
        const heading = $(
          ".w2dc-field w2dc-field-output-block w2dc-field-output-block-address w2dc-field-output-block-2"
        );
        // console.log(heading.html());
        console.log(heading.text());
        // console.log(html);

        //outputting html to file test
        // fs.writeFile("outter.html", html, err => {
        //   if (err) throw err;
        // });
      }
    }
  );
}

// request("https://www.cnarea.ca/find-an-appraiser/", (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);
//     //   const heading = $(".member-profile-page-title");
//     const heading = $(".w2dc-listings-block-content");
//     console.log(heading.html());
//     // console.log(heading.text());
//     // console.log(html);
//   }
// });
