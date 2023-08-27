<p align="center">
  <img width="110" height="110" src="https://img.icons8.com/office/128/react.png" alt="react"/>
  <img width="110" height="110" src="https://img.icons8.com/color/128/typescript.png" alt="typescript"/>
</p>

# React Tutorial App with TypeScript

* [React Document](https://react.dev/)
* [TypeScript Document](https://www.typescriptlang.org/)

## Environments

- Node: v16.14.0
- React: v18.2.0

## Modules

* [react-router-dom](https://reactrouter.com/en/main)
* [@chakra-ui/react](https://chakra-ui.com/)
* [@chakra-ui/icon](https://chakra-ui.com/docs/components/icon/usage)

## Directory Structure

```
src/
|-- assets/            # Static files (images, fonts, etc.)
|-- components/        # Reusable UI components
|   |-- Button/
|   |   |-- index.tsx
|   |   |-- Button.module.css (or Button.styles.ts)
|   |   |-- Button.test.tsx
|   |-- Header/
|   
|-- containers/        # Components with business logic or specific to certain pages
|   |-- Home/
|   |   |-- index.tsx
|   |   |-- Home.module.css (or Home.styles.ts)
|   |   |-- Home.test.tsx
|   |-- Contact/
|   
|-- hooks/             # Custom hooks
|-- utils/             # Helper functions and utilities
|-- types/             # TypeScript type definitions
|-- context/           # React contexts and providers
|-- App.tsx
|-- index.tsx
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.