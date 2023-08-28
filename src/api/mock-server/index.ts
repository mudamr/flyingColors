import { Server } from 'miragejs'
import { initPhotosEndpoint } from './photos'

export interface MockServerArgs {
    environment: 'development'
}

export default function startMockServer(args: MockServerArgs) {
    return new Server({
        environment: args.environment,
        routes() {
            // Apply 1s of delay
            this.timing = 1000

            this.urlPrefix= 'https://jsonplaceholder.typicode.com/'
    
            // Initalize mock server endpoints
            initPhotosEndpoint(this)

            // Pass all other requests
            this.passthrough()
        }
    })
}