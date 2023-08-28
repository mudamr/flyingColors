import axios from "axios";
import { PHOTOS_ENDPOINT } from "./constants";

export const fetchAllPhotos = async () => {
    try {
        const response = await axios.get(PHOTOS_ENDPOINT)
        return response.data
    } catch(err) {
        throw err
    }
}