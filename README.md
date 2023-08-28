# Data Table Project

Welcome to our data-driven web application! 💥 This project showcases a powerful combination of technologies, including Redux, a mock server, TypeScript, and more.


## Features

- **Data Table**: Present data fetched from an external API in an organized and user-friendly table format.
- **Filtering**: Allow users to easily search for specific data points using a powerful filtering system.
- **Pagination**: Navigate through extensive datasets while ensuring optimal performance.
- **Customization**: Empower users to customize their table settings, such as the number of displayed entries per page.
- **Data Deletion**: Enable users to delete specific data rows or multiple entries across different pages, providing control and data management.

## Technologies

Built with a stack of cutting-edge technologies:
- Redux for state management
- Mock server for simulating API responses
- TypeScript for static type checking
- Cloudscape for UI components

## Disabling the Mock Server

In development mode, the mock server is enabled by default to simulate API behavior. To disable it and call the API directly, you can comment out the following line in the `index.js` file:

```javascript
// Disable mock server to call the API directly
// startMockServer({ environment: 'development' });
```

After commenting out this line, restart your development server.

```bash
MOCK_SERVER_ENABLED=false npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


