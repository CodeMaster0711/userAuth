# OrderAnywhere Frontend Project
This is OrderAnywhere's frontend that uses the backend project to contract with AWS resources & Mongo DB database.

## Framework and tools:
- [ReactJs](https://reactjs.org/) A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) Redux is a predictable state container for JavaScript apps
- [React Router](https://github.com/ReactTraining/react-router) Declarative routing for React. Version 3.X because of React-redux-router integration
- [yarn](https://yarnpkg.com/) Fast, reliable, and secure dependency management.
- [React Grid FlexBox](https://roylee0704.github.io/react-flexbox-grid/)

## Bootstrap origin
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites
Before running this project, you need to have a few items installed on your system:
- [NodeJs & npm](https://nodejs.org/) V 8.X
- [yarn](https://yarnpkg.com/)

## Installation
Clone repository on your system and then run this command to install your dependencies:
### `yarn`
## Adding Packages
For adding a new package use the following command:
### `yarn add [PACKAGE_NAME]`

## Adding Development Packages
For adding a new development package use the following command:
### `yarn add [PACKAGE_NAME] --dev`

## Writing tests
Unit tests are mandatory for these parts:
- New action: except AWS Cognito actions, other actions needs to have unit tests, check this [guide](https://redux.js.org/docs/recipes/WritingTests.html) for more information
- New component: It should have at least a render test
- New reducer: All reducer methods should have full state unit tests. (pending, fulfilled, rejected)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.