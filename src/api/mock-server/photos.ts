import { Server } from 'miragejs'
import { PHOTOS_ENDPOINT } from 'api/constants'
import mockPhotos  from 'data/mock-photos.json'



export const initPhotosEndpoint = (server: Server): void => {

    //Get photos data
    server.get(PHOTOS_ENDPOINT, (_, request) => {
      // return mocked data to avoid calling the real api in development environment
      return mockPhotos.photos
    });
    
}
