import axios from "axios";

//This is a method for setting up global values for all axios requests that will be made using axios in this application
//We just have to import this file in our App.js, e.g. `import "./axios/global";`
//However, there is a major downside to this approach/

//Take this for example
axios.defaults.headers.common["Accept"] = "application/json";
//We have gloablly setup the "Accept" header's value to "application/json"
//Now, some APIs might not require this header or in-fact may not work properly with this header value
//So, the global approach in axios can be flawed