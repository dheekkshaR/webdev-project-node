import express from "express";
import mediaController from "../controllers/media.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/search", mediaController.search);

router.get("/:mediaId/credits", mediaController.getCredits);

router.get("/:mediaId/videos", mediaController.getVideos);


router.get("/:mediaId/genres", mediaController.getGenres);

router.get("/:mediaId/reviews", mediaController.getReviews);

router.get("/:mediaId/recommendations", mediaController.getRecommendations);


router.get("/movie/:mediaId", mediaController.getDetail);

router.get("/:mediaCategory", mediaController.getList);

export default router;