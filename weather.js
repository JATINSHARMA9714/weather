const named=document.querySelector('.searching')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b6de6454cmsh93cd70a3e6e9739p115640jsn0f61ef5bb287',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const button=document.querySelector('#Search')
const importantdata=document.getElementById('name')
const temp=document.getElementById('temp')
const maxtemp=document.getElementById('maxtemp')
const mintemp=document.getElementById('mintemp')
const getweather=()=>{
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${named.value}`, options)
	.then(response => response.json())
	.then(response =>{
     console.log(response)
     let data=named.value
     console.log(data[0].toUpperCase())
     importantdata.innerText=data[0].toUpperCase()+data.slice(1);
     temp.innerText=`Temp : ${response.temp}*C`
     maxtemp.innerText=`Max Temp : ${response.max_temp}*C`
     mintemp.innerText=`Min Temp : ${response.min_temp}*C`
    })
	.catch(err => console.error(err));
}
button.addEventListener("click",getweather)