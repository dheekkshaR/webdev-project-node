import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
  try {

    console.log("here in add favorite 2");
//    console.log(req);
//    const isFavorite = await favoriteModel.findOne({
//      user: req.user.id,
//      mediaId: req.body.mediaId
//    });

    console.log("here in add favorite 3");
//    console.log(isFavorite);
//
//    if (isFavorite) return responseHandler.ok(res, isFavorite);

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

    console.log("here1");
    const favorite = await favoriteModel.find().sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };