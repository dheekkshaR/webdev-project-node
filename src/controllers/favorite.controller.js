import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
  try {

    console.log("here in add favorite........");
    console.log(req.body);
    const isFavorite = await favoriteModel.findOne({
      mediaId: req.body.mediaId,
      userId: req.body.userId
    });

    console.log("here in add favorite 3");
    console.log(isFavorite);

    if (isFavorite) return responseHandler.ok(res, isFavorite);

    console.log("here in add favorite 4");

    const favorite = new favoriteModel({
      ...req.body,

    });

    console.log(favorite)

    console.log("here in add favorite 5");

    await favorite.save();

    console.log("here in add favorite 6");

    responseHandler.created(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;

    console.log("here in remove favorite 2");
    console.log(favoriteId);

    const favorite = await favoriteModel.findOne({
      _id: favoriteId
    });
    console.log(favorite);
    console.log("here in remove favorite 3");

    if (!favorite) return responseHandler.notfound(res);

    await favorite.deleteOne();

    console.log("here in remove favorite 4");

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};



const getFavoritesOfUser = async (req, res) => {

  try {

    const favorite = await favoriteModel.find().sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

const getFavoritesOfUser2 = async (req, res) => {
    console.log("here2  nin getFavoritesOfUser");
    console.log(req.params.userId);
  try {

    console.log("here3 in getFavoritesOfUser");
    const favorite = await favoriteModel.find( {userId: req.params.userId}).sort("-createdAt");
    console.log("here4 in getFavoritesOfUser: ", favorite);

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser, getFavoritesOfUser2 };