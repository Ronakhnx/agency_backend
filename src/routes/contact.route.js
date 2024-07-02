import { Router } from "express";
import { getContactFormDetails } from "../controllers/contact.controller.js";

const router = Router();

router.route("contact-form/").post(getContactFormDetails);

export default router;