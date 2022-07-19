import axios from "axios";
import config from "../../../common/config/index";

const baseURL = config.BASE_API;

const base = async (options) => {
  
  const res = await axios({
    baseURL,
    headers: {
     
      Accept: "application/json",
     
   
    },
    ...options,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return res;
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url, data) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options);
};

export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
export const putt = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};
