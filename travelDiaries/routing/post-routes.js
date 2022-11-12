import { Router } from "express";
import { 
    getAllPosts, 
    addPost, 
    getById, 
    updatePost, 
    deletePost 
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getById);
postRouter.post("/",addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;