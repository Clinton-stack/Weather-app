const apiKey = '8MWnHTVzqYcCXApQuhWqn513u34XIRg4';


//get city
const getCity = async(city)=>{
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
};

const getWeather = async (key) => {
    const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${key}?apikey=${apiKey}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
};




