import { photoData } from "types/photo";
import { fetchAllPhotos } from "api/photos";

const initialState = {
  loading: true,
  error: null,
  data: [] as photoData[],
};

export const fetchPhotosAction =  async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PHOTOS_REQUEST" });
    // Perform the API request to update the balance
    const photosData = await fetchAllPhotos();

    // Update the balance in the Redux state
    dispatch({ type: "GET_PHOTOS", payload: photosData });
  } catch (error) {
    // Handle any errors
    console.log(error);
    dispatch({ type: "FETCH_PHOTOS_FAILURE", payload: error });
  }
};

export const removePhotos = (ids) => ({
  //Remove entries by passing down an array of ids
  type: "REMOVE_PHOTOS",
  payload: ids,
});



const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHOTOS":
      return {
        ...state,
        data: action.payload,
        loading: false // Update the photos state with fetched data
      };
    case "FETCH_PHOTOS_REQUEST":
      return {
        ...state,
        loading: true, // Set loading to true when a request is made
      };
    case "FETCH_PHOTOS_FAILURE":
      return {
        ...state,
        loading: false, // Set loading to false on failure
        error: action.payload, // Set the error message
      };
    case "REMOVE_PHOTOS":
      const updatedPhotos = state.data.filter(
        (photo) => !action.payload.includes(photo.id)
      );
      return {
        ...state,
        data: updatedPhotos,
      };
    default:
      return state;
  }
};

export type photosState = ReturnType<typeof photosReducer>;

export default photosReducer;
