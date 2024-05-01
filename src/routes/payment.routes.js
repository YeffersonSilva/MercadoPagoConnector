import { Router } from "express";

const router = Router();

router.get("/creat-order", (req, res) => {
    res.send("Create order");
}

export default router;