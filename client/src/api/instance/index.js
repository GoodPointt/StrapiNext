import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});
instance.defaults.headers.authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;

export const getAllCases = async () => {
  try {
    const { data } = await instance.get(`/api/cases`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getBanner = async () => {
  try {
    const { data } = await instance.get(`/api/section-hero`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
