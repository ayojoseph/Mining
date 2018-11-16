Mining
- Quick data mining challenge to retrieve appraiser info off multiple webpages
- name.py used to parse names list in 'names.txt' into a workable format to place into 'output.txt'
- outter.html, test.html, links2.txt, log.txt used for testing purposes
- index.js never used, made when used npm init
- links.txt was created in scrape.js
    - these links are made from the names of the registered appraisers and each is read in from the file
    and requested to pull each individuals data one by one.

- Mined the first 200 people as a timeout had to be put in place due to waiting of webpages to load and javascript asyc nature etc. Times out for have a second so mining takes some time.

Running the program:
- Command 'npm i' should install the required node modules
- Command 'node scrape.js' should run the program and output names into a file called db.txt
- You can delete the current db.txt to test.


