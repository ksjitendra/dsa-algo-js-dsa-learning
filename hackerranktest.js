'use strict';

const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'finestFoodOutlet' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING city
 *  2. INTEGER votes
 * API URL https://jsonmock.hackerrank.com/api/food_outlets?city={city}&page={page_no}
 */

async function finestFoodOutlet(city, votes) {
    
    const data = await axios(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}`)
    const firstData = data.data 
    const totalPages = firstData.total_pages
    let finalArr = []
    
    // Extracted data from the first page data 
    if(firstData.data.length != 0) {
        const newArr = firstData.data.filter((item) => item.city == city)
        finalArr.push(newArr)
    } else {
        return false;
    }
    
    if(totalPages> 1) {
        
        for(let i =2; i<=totalPages; i++ ){
            let currentPageData = await axios(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${i}`)
            let actuallData = currentPageData.data.data
            let newFiltersData = actuallData.filter((item) => item.city == city)
            finalArr.push(newFiltersData) 
        }
        
    }
    
    // formatted on the behalf of the rating and votes
    const formattedArr = []
    let maxRating = 0
    let maxVotes = 0
    for(let i =0; i<finalArr.length; i++ ) {
        
        let currentArr = finalArr[i]
        for(let j = 0; j< currentArr.length; j++) {
            
            let currentObj = currentArr[i]
            if(currentObj.user_rating.votes >= votes && currentObj.user_rating.average_rating >= maxRating &&
             currentObj.user_rating.votes >= maxVotes
             ) {
                formattedArr.push(currentObj)
                maxRating = currentObj.user_rating.average_rating
                maxVotes = currentObj.user_rating.votes
            }
            
        }
        
    }
    
    return  (formattedArr.length > 0) ? formattedArr[0].name : '';
    
    // console.log(formattedArr, "finalArr")

}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const city = readLine();

    const votes = parseInt(readLine().trim(), 10);

    const result = await finestFoodOutlet(city, votes);

    ws.write(result + '\n');

    ws.end();
}
