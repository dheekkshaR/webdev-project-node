const baseUrl = "https://api.themoviedb.org/3/";
const key = "8ed01ac7fe8bdfc25206f1bcbd4d22ab";

const getUrl = (endpoint, params) => {

  const qs = new URLSearchParams(params);

  console.log("qs", qs);
  console.log(`${baseUrl}${endpoint}?api_key=${key}&${qs.toString()}`);


  return `${baseUrl}${endpoint}?api_key=${key}`;
};

export default { getUrl };