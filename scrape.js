// const request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");

//getting names from file and stuffing into array
const fs = require("fs");
// var fstream = fs.readFileSync("output.txt").toString();
var fstream = fs.readFileSync("links.txt").toString();
// var names = fstream.split("\n");

const links = fstream.split("\n");

const count = 0;


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function makeRequest(addresses) {
    for(var i = 0; i < 50; i++) {
        const result = await rp(addresses[i]);
        await delay(500);
        const $ = await cheerio.load(result);

    // var name = $(".w2dc-listing-header");


    //Extracting Info from Page
    var name = $("h2"); //.text Good
    // console.log(name.text());

    const aLocation = $(".w2dc-location");
    console.log(aLocation.text());




    }

    // const result = await rp(address);

}

makeRequest(links);

// for ( var i = 0; i < 20; i++) {
//     setTimeout( function(i) {
        
//     }, 10000);
    
// }




// request(links, function(responses) {

//     var test = responses[links[55]];

//     console.log(test);
// });

// async function makeCalls(links) {
    
// }

// console.log(links);








//used to generate weblinks

// var lsFile = fs.createWriteStream('links.txt', {
//   flags: 'a' // 'a' means appending (old data will be preserved)
// });

// for (var i = 0; i < names.length; i++) {
  
//               lsFile.write("https://www.cnarea.ca/web-2-0-directory/"+names[i]+"\n");
// }



// console.log(names[584]);

// var count;
// for (var looper = 0; looper < 2; looper++) {
//   for (count = 10 *looper; count < 10+(looper*10); count++) {
//     request(
//       "https://www.cnarea.ca/web-2-0-directory/" + names[count],
//       (error, response, html) => {
//         if (!error && response.statusCode == 200) {
//           const $ = cheerio.load(html);
//           //   const heading = $(".member-profile-page-title");
//           const aName = $(
//             ".w2dc-listing-header"
//           );
//           // console.log(aName.text());

//           const aLocation = $(
//             ".w2dc-location"
//           );
//           // console.log(aLocation.text());

//           const aContact = $(
//             ".w2dc-fields-group"
//           );

//           var contact = aContact.text().replace(/\s+/g, '');; 
//           // console.log(aContact.text());
//           var logger = fs.createWriteStream('log.txt', {
//             flags: 'a' // 'a' means appending (old data will be preserved)
//           });
//           logger.write(contact+"\n");

//           // console.log(heading.html());
//           //
          
//           // console.log(html);

//           // outputting html to file test
//           // fs.writeFile("outter.html", html, err => {
//           //   if (err) throw err;
//           // });
//         } 
//         // else {
//         //   console.log("Error! Count is: "+count);
//         //   count = 99;
//         // }
//       }
//     );
//   }
// }

