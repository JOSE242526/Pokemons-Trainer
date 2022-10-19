import { configureStore } from "@reduxjs/toolkit"
import userName from "./Slices/userName-slices"


export default configureStore ({
    reducer: {
        userName
    }
})
