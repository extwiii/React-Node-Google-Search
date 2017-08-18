# React-Node-Google-Search
React-Node Google Search SPA to feed json file

Features
--------
- React.js 
- Create-react-app
- Axios
- Node.js
- Express
- Mocha
- Chai
- Nodemon
- Eslint-airbnb

Prerequisites
-------------
- make sure you have npm in your computer

Getting Started
-------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/extwiii/React-Node-Google-Search.git

# Change directory
cd React-Node-Google-Search

# Install NPM dependencies for server and client
npm run install:all

# Build your app for production
cd client && npm run build

# Test your API
npm run test

# Start your app 
npm run start

```
- Npm run start command opens your browser with correct url/port. Also you can go to http://localhost:3000/ from your browser.

How to use
-------------

I developed this code snippet for only collect some valuable data like the logo of universities. I also would like to share this with someone who needs to collect some data from free-google-image-search. I limited amount of request call to 100 due to server restriction ( I usually get 503 error when I try to call so many times) and would recommend others. You can change this from index.js. 

After you run npm run start both server and client side of your code start running and after rendering it start calling free-google-image-search to get some data from it. You can easily change data and in my example I had big chunk of universities JSON and I read from this JSON to call free-google-image-search as much as I can (optimum is 100) I also try to call more than once when I rejected from server to keep my process more automated but some data still cannot found from free-google-image-search due to special characters they have.

I assume you have JSON file that contains valuable data and you want to add an image of this JSON. Parameter k is our index like where to start from your JSON and diff is how many of the object you want to send.In my case, every object has a name field and that would be so different for you. You need to get your search data from your JSON to save temporary variable. After that, you can create your search JSON, in my case that was university name logo 300x300 like (city university logo 300x300).
You can really change and put anything you want.After you run your program it will log your image URL to your browser console also it will write all your collected data into new.json file inside data folder. You can change this JSON format from server side index.js and create a different type of JSON file.

Please change below detail as you wish. Enjoy!!!


```js
axios.get('/api/universities')
  .then((response) => {
    const k = 1000; // Index of json file
    const diff = 100; // How many call we want to do
    for (let i = k; i < k + diff; i += 1) {
      const uniName = response.data[i].name; // Retrieve your data from JSON
      const temp = `${uniName} logo 300x300`; // Create your search string
      GoogleImageSearch.searchImage(temp)
       .then((res) => {
         getImgLink(res[0], uniName, (i - k) + k); // Get your data and send to server
       }).catch((error) => {

       });
    }
  })
  .catch((error) => {
    console.log(`error  ${error}`);
  });

```


Changelog
---------

### 1.0.0 (15 Aug, 2017)
- First version of React-Node-Google-Search

Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions.

License
-------

The MIT License (MIT)

Copyright (c) 2017 Bilal Cagiran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Rating :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon::new_moon::new_moon:
### Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon::new_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 

