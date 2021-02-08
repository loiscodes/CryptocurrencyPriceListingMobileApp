const axios = require('axios');

async function getListOfCoins(){
    try{
        const response =await axios.get('https://api.coinlore.net/api/tickers/');
        return response.data.data;
    }catch(error){
        console.error(error);
    }
}

export {
    getListOfCoins
}   