// api key : ac95f1754dd84cf184194b539ba272c6
const API_KEY= "ac95f1754dd84cf184194b539ba272c6";
const base_url = "https://api.rawg.io/api/"

//getting the current date 

const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if(month < 10 ){
        return `0${month}`
    } else {
        return month
    };

}

const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day < 10 ){
        return `0${day}`
    } else {
        return day
    };

}

const currentYear = new Date().getFullYear();

const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const LastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const NextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

const popular_games=`games?key=${API_KEY}&dates=${LastYear},${currentDate}&ordering-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`
