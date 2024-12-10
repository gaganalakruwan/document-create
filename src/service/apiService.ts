import { getBank, getCity, insertBank } from "../constant/api";
import httpService from "./httpService";
import { fetchData } from "./newHttpService";

export default class ApiService {
  static getAllBank = () => {
    return httpService.get(getBank);
  };

  static saveBank = (data: any) => {
    if (data) {
      console.log(".........>>>>>><<<", data);
      return httpService.post(insertBank, data);
    }
    return Promise.reject(new Error("Error"));
  };
  static getCity = () => {
    // return httpService.get(getCity);
    return fetchData(getCity, "POST", null, "");
  };

  static saveCity = (data: any) => {
    if (data) {
      console.log(".........>>>>>><<<", data);
      return httpService.post(insertBank, data);
    }
    return Promise.reject(new Error("Error"));
  };

  // static getCustomers = (data: any) => {
  //   if (data) {
  //     return httpService.post(getCustomers, data);
  //   }
  //   return Promise.reject(new Error('Error'));
  // };
}
