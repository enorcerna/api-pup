
import { urlController } from "../../controllers"
import { Router } from "express"

const router = Router()

router.get( '/video',urlController)
export default router
