import React from 'react';
import GoogleImageSearch from 'free-google-image-search';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function getImgLink(img, name, index) {
  axios.post('/api/save', {
    img,
    name,
    index,
  })
  .then((resp) => {
    console.log(`response ${resp.data}`);
  })
  .catch((err) => {
    console.log(`error  ${err}`);
  });
}

axios.get('/api/universities')
  .then((response) => {
    const k = 1000;
    const diff = 100;
    for (let i = k; i < k + diff; i += 1) {
      const uniName = response.data[i].name;
      const temp = `${uniName} logo 300x300`;
      GoogleImageSearch.searchImage(temp)
       .then((res) => {
         getImgLink(res[0], uniName, (i - k) + k);
       }).catch((error) => {
         console.log(`error  ${error} --- ${(i - k) + k}`);
         setTimeout(GoogleImageSearch.searchImage(temp)
          .then((res) => {
            getImgLink(res[0], uniName, (i - k) + k);
          }).catch((err) => {
            console.log(`error  ${err} --------- ${(i - k) + k} ####################`);
            setTimeout(GoogleImageSearch.searchImage(temp)
             .then((res) => {
               getImgLink(res[0], uniName, (i - k) + k);
             }).catch((err2) => {
               console.log(`#################### error  ${err2} --------- ${(i - k) + k}  ####################`);
               setTimeout(GoogleImageSearch.searchImage(temp)
                .then((res) => {
                  getImgLink(res[0], uniName, (i - k) + k);
                }).catch((err3) => {
                  console.log('------------------------------------!!!!!!!!!!!!!!!!!!!!!!!');
                  console.log('------------------------------------!!!!!!!!!!!!!!!!!!!!!!!');
                  console.log(`#################### error  ${err3} --------- ${(i - k) + k} `);
                  console.log('------------------------------------!!!!!!!!!!!!!!!!!!!!!!!');
                  console.log('------------------------------------!!!!!!!!!!!!!!!!!!!!!!!');
                  getImgLink('no logo', uniName, (i - k) + k);
                }), 3000);
             }), 4000);
          }), 6000);
       });
    }
  })
  .catch((error) => {
    console.log(`error  ${error}`);
  });

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Google Image Search App</h2>
      </div>
      <p className="App-intro">
        To see your result please open your console.
      </p>
    </div>
  );
}

export default App;
