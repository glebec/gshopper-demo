# Hi, I'm bones

[![Greenkeeper badge](https://badges.greenkeeper.io/glebec/gshopper-demo.svg)](https://greenkeeper.io/)

I'm a happy little skeleton. You can clone me to use as a starter on your projects!
I have React, Redux, Sequelize, and Express all just rattling around in here ready
to go.

## I need node >= 6.7.0

If you don't have it, I'll complain and tell you how to install it.

## 1. Make me into something!

We recommend that you **clone**, not fork, this repo – unless your intention is
to develop Bones proper instead of using Bones as the starting point for your
own application.

Start by doing either of the following:

* Create a GitHub repo and clone it, or
* `git init` in an empty directory on your machine.

After you have a repo on your machine:

```sh
git remote add bones https://github.com/FullstackAcademy/bones.git
git fetch bones
git merge bones/master
```

And then you'll have me! If I change – which I probably will – you can get the most recent
version by doing this again:

```sh
git fetch bones
git merge bones/master
```

## 2. I need a name.

I don't have a name. I think I used to have one, but it turned to dust right along with my
heart and liver and pituitary gland and all that stuff.

Anyway, I'll need one. Give me a name in `package.json`.

## 3. Start my dusty heart

Short and sweet:

```sh
npm install
npm run dev
```

The `dev` script sets `NODE_ENV` to "development", runs the build script in watch mode, and
starts the server with `nodemon`. Build vs server logs are separated by a prefix. If you prefer
to run the server and build processes separately, you can instead do:

```sh
npm run start-dev
```

```sh
npm run build-dev
```

In two separate terminals. The vanilla `npm start` is for production — you won't use it in development!

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup. It'll create the database for you if it doesn't exist,
assuming you're using postgres.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)

## Conventions

I use `require` and `module.exports` in `.js` files.

I use `import` and `export` in `.jsx` files, unless `require` makes for cleaner code.

I use two spaces, no semi-colons, and trailing commas where possible. I'll
have a linter someday soon.

## Deployment

I'm a version of Bones which doesn't have a nifty deployment script. But that means I can be connected to various Continuous Integration (CI) services, which can deploy me automatically! Maybe your instructor will show you how to connect Heroku to a GitHub branch?

### Heroku Tips

1. Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli) and install [Yarn](https://yarnpkg.com/en/) if you haven't already (`npm install -g yarn`)
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add postgres
  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

Afterwards,
  - *Connect Heroku to your `master` branch on GitHub*
  - *To (re-)seed:* `heroku run npm run seed`
