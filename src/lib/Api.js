'use strict'


import CONSTANTS from "./constants"
import axios from "axios";

export class Api{

  constructor() {
     axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
     axios.defaults.headers.post['Content-Type'] ='application/x-www-form';
     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
     axios.defaults.baseURL = CONSTANTS.BASE_URL;
  }

  //get request
  get(data, url){
      if(data === null){
        data = "";
      }
      console.log(CONSTANTS.BASE_URL + url);
      return axios.get(url + data)
         .then(response => {
              return response.data;
         })
         .catch(error => {

         });
  };

  //add post method here
  post(data, url){

    return axios.post(url, data)
       .then(response => {
            return response.data;
       })
       .catch(error => {

       });
  }

  //for multiple request add here
  //.....

}

// The singleton variable
export let api = new Api()
