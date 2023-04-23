import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

const create = async (req, res) => {
  try {

    console.log("here in create review 21");
    const { movieId } = req.params;
    console.log("here in create review 2");
    console.log(movieId);

    const review = new reviewModel({
      ...req.body
    });

    console.log("here in create review 3");
    console.log(review);

    await review.save();

    responseHandler.created(res, {
      ...review._doc,
      id: review.id,
    });
  } catch {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {

    console.log("here in remove review 1");
    const { reviewId } = req.params;

    const review = await reviewModel.findOne({
      _id: reviewId,
    });

    console.log("here in remove review 2");
    console.log(review);

    if (!review) return responseHandler.notfound(res);

    await review.deleteOne();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getReviewsOfUser = async (req, res) => {
  try {
    console.log("here in get reviews of user 1");
    console.log(req.params.mediaId);

    const reviews = await reviewModel.find({ mediaId: req.params.mediaId
    }).sort("-createdAt");

    console.log("here in get reviews of user 2");
    console.log(reviews);

    responseHandler.ok(res, reviews);
  } catch {
    responseHandler.error(res);
  }
};

export default { create, remove, getReviewsOfUser };