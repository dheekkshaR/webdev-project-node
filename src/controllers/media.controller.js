import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddlerware from "../middlewares/token.middleware.js";

const getList = async (req, res) => {
    console.log("here1111114");

  try {
    const { page } = req.query;
    const { mediaType, mediaCategory } = req.params;

    const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const getGenres = async (req, res) => {
  try {
    const { mediaType, mediaId  } = req.params;

    const response = await tmdbApi.mediaGenres({ mediaType, mediaId });

    return responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const search = async (req, res) => {

  try {
    const { mediaType } = req.params;
    const { query, page } = req.query;

    const response = await tmdbApi.mediaSearch({
      query,
      page,
      mediaType: mediaType === "people" ? "person" : mediaType
    });

    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
};

const getReviews = async (req, res) => {

  try {
    const { mediaType, mediaId } = req.params;


        const params = { mediaType, mediaId };

    const response = await tmdbApi.mediaReviews({ mediaType, mediaId });

    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
}

const getCredits = async (req, res) => {

  try {
    const { mediaType, mediaId } = req.params;

    const response = await tmdbApi.mediaCredits({ mediaType, mediaId });

    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
}

const getRecommendations = async (req, res) => {

  try {
    const { mediaType, mediaId } = req.params;

    const response = await tmdbApi.mediaRecommend({ mediaType, mediaId });

    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
}

const getVideos = async (req, res) => {


  try {
    const { mediaType, mediaId } = req.params;

    const response = await tmdbApi.mediaVideos({ mediaType, mediaId });

    responseHandler.ok(res, response);
  } catch {
    responseHandler.error(res);
  }
}

const getDetail = async (req, res) => {
  try {


    const { mediaType, mediaId } = req.params;

    const params = { mediaType, mediaId };



    const media = await tmdbApi.mediaDetail(params);


    media.credits = await tmdbApi.mediaCredits(params);

    const videos = await tmdbApi.mediaVideos(params);

        console.log("here214");




    media.videos = videos;

    const recommend = await tmdbApi.mediaRecommend(params);


    media.recommend = recommend.results;

    console.log("here1");


    console.log("here2");

    const reviews = await tmdbApi.mediaReviews(params);

    media.reviews = reviews.results;




    media.images = await tmdbApi.mediaImages(params);



//    media.reviews = await reviewModel.find({ mediaId }).populate("user").sort("-createdAt");

    responseHandler.ok(res, media);
  } catch (e) {
    console.log(e);
    responseHandler.error(res);
  }
};

export default { getList, getGenres, search, getDetail, getReviews, getRecommendations, getCredits , getVideos};