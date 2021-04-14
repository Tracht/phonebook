# Storing Contact Details using React Hooks

This project builds a sample form to store contact details of user and display it. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Tech stack:
* [primtive.css](https://taniarascia.github.io/primitive/css/main.css) 

### To get this running on your local machine

*  `yarn install` or `npm install`
*  `yarn start` or `npm start`

### To run the tests 
*  `yarn test`

### Folder structure
* Containers: has their own internal state and call on external API actions
* Components: has their own internal state 
* Views: presentational component, does not have internal state, accepts props.   

```
src
├── assests
├── components
│   └── phonebook.js
│   └── Phonebook.test.js
├── container
│   └── App.js
│   └── App.css
│   └── App.test.js
├── views
│   └── Table.js
│   └── Table.test.js
└── index.js
└── index.css
└── setupTests.js
└── serviceWorker.js
```
