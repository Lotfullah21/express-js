<<<<<<< HEAD

```js
"scripts": {
"start":"node app.js",
"dev":"nodemon app.js"
},
```

now, here we can use `npm start` instead of `node app.js` to run our code.
for `dev` command, we will use `npm run dev` or `nodemon app.js`
`npm run dev` automatically restart our app, if there is any changes in there.
This script is used for development purposes. It uses nodemon to automatically restart your Node.js application when changes are made to your code.
`control + c` to stop the nodemon.

```js
"scripts": {
"start":"nodemon app.js",
},
```

# `npm start` to start the nodemon, if use the above snippet in package.json.

```js
"scripts": {
"start":"node app.js",
"dev":"nodemon app.js"
},
```

now, here we can use `npm start` instead of `node app.js` to run our code.
for `dev` command, we will use `npm run dev`.
`npm run dev` automatically restart our app, if there is any changes in there.
`control + c` to stop the nodemon.

```js
"scripts": {
"start":"nodemon app.js",
},
```

`npm start` to start the nodemon, if use the above snippet in package.json.

> > > > > > > f689185021a793fc32b76ed007341e3805c00bf7
