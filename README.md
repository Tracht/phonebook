# Storing Contact Details using React Hooks

The purpose of this project is to demonstarte the usage of react hooks to build sample forms. In this example we will try to build a sample form to store contact details of user anddisplay it. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live Demo at <https://react-phone-book-94da7.firebaseapp.com/>

## To get started

Assuming that you have [npm](https://www.npmjs.com/get-npm) installed in your machine. Please follow below steps, in the project directory, please run following commands:

*  `yarn install` or `npm install`
*  `yarn start`

## Testing 
Run `yarn test` command to run all test cases written for this project.

## Folder structure Approach
I have segregated files based on what they do in different folders. Components which have external API actions and maintain their own internal state are put in to containers, Components which maintain their own internal state are put in to components and components which just consume the data and perform render options are put in views folder.  

```
src
├── assests
│   └── logo.svg
├── components
│   └── phonebook.js
│   └── Phonebook.test.js
├── container
│   └── App.js
│   └── App.css
│   └── App.test.js
├── views
│   └── GenericTable.js
│   └── GenericTable.test.js
└── index.js
└── index.css
└── setupTests.js
└── serviceWorker.js
```

## Help Links
I have repalced body of index.css with content from following css file for beautification of render components.
* [primtive.css](https://taniarascia.github.io/primitive/css/main.css) 


### Storing Contact Details using React Hooks

- [x] Publish code to FireBase.
- [x] Update readme file.
- [ ] Update publish to match latest code once code review from UB is done??
- [ ] Blog on Medium on how i did it??
- [ ] Should i perform CRUD Operation?? 