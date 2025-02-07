// 

const axios = require('axios');

async function Data(callback) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const names = response.data.map(post => post.title);

        callback(null, names);  
    } catch (err) {
        callback(err, null);  
    }
}

function fetchData(callback) {
    setTimeout(() => {
        Data(callback);
    }, 2000);
}


function handleData(err, names) {
    if (err) {
        console.error("Error fetching data:", err.message);
    } else {
        console.log("Fetched Data:", names);
    }
}

fetchData(handleData);
