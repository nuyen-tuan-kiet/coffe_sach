// api/axiosClient.js
import axios from 'axios';


// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-


const axiosClient = axios.create({
    
baseURL: "http://localhost:8000",
headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'your-rapidapi-key',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    'Access-Control-Allow-Credentials': 'true'
},

});

axiosClient.interceptors.request.use(async (config) => {
    
// Handle token here ...
//https://viblo.asia/p/authorization-header-YWOZrj4wZQ0#_b-bearer-token-3
//https://viblo.asia/p/tim-hieu-cac-phuong-thuc-authentication-voi-rest-api-bJzKmq2EK9N

//----vì sao phải có chử Beaner ------------
//https://stackoverflow.com/questions/62075880/why-we-write-bearer-in-front-of-the-token-in-the-authorization-header
//https://reqbin.com/req/adf8b77i/authorization-bearer-header#:~:text=What%20is%20Bearer%20Authorization%3F,sends%20it%20to%20the%20client.
 const token =localStorage.getItem("token");
        if(token){
            config.headers["authorization"] =  "Beaner "+ token
           }
           
return config;
})


axiosClient.interceptors.response.use((response) => {

if (response && response.data) {

    const {token} = response.data;
       if(!token){
        return response;
       }
       localStorage.setItem("token",token);
return response;
}

return response;
}, (error) => {
// Handle errors
throw error;
});
export default axiosClient;