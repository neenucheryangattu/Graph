import {get,post} from '../common/remote/base_api'
export const Getcities =(data) => {
    return get(`/cities`,data);
  };
  export const Getmeasurements =(data) => {
    return get(`/measurements`,data);
  };

