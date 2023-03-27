// const key = '3d3bbd6hzx3wr2169-4ed5-43d3-b7c9-4083136cc9b5';

// fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`)

// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
  
//   const pollution = data.data.current.pollution;
//     // for (const element in pollution){
//     //     console.log(element);
//     // }
//     console.log('Timestamp:',pollution.ts);
//     console.log('AQI value based on US:',pollution.aqius);
//     console.log('Main pollutant for US AQI:',pollution.mainus);
//     console.log('AQI value based on China:',pollution.aqicn);
//     console.log('Main pollutant for China AQI:',pollution.maincn);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

const key = 'a24336a4f6cc0206ed481fd6hzx3wr20e311d5b90d2572680';
fetch(`https://api.waqi.info/feed/here/?token=${key}`)
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);

  const city = data.data.city.name;
  const iaqi = data.data.iaqi.pm25;
  const keys = Object.keys(iaqi);
  
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    console.log(`Location ${city} PM2.5 = ${iaqi[k]}`);
  }
})
.catch((error) => {
  console.error('Error:', error);
});
