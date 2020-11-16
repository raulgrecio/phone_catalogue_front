# REACT NATIVE + REDUX SAGAS + REDUX PERSISTOR + TYPESCRIPT + NAVIGATION V5

## Execution instructions

### Installation prerequisites

- [Docker](https://www.docker.com/get-started) must be installed, and the
  current user must have privileges to create images and create and run
  containers.
- The latest LTS version of [NodeJS](https://nodejs.org/es/) must be installed
- NodeJS package [yarn](https://yarnpkg.com/) must be installed.

Edit file `app/config/api-config.ts` with configuration local server in `BASE_URL`

### Github api server:

https://github.com/raulgrecio/phone_catalogue_backend

Install dependencies:

```
$ yarn
```

to start the app, execute

```
# for ios
$ yarn ios

# for android
$ yarn android
```

to start the test, execute

```
# para ios
$ yarn test
```

The rest of the scripts can be seen in `package.json` that are destined for development

### Relevant technologies used

- NodeJS & typescript.
- Redux
- Redux-saga
- React-navigation
- Reanimated (animated 60fps)
- html to react-native
- Linting through tsc.
- Code formatting through Prettier.
- Unit testing and code coverage through Jest.
- Pagination

### images

![Loaded 2 element](promo/1.png?raw=true 'image 1')

![Loading new element](promo/2.png?raw=true 'image 2')

![Loaded 4 element](promo/3.png?raw=true 'image 3')

![Detail phone](promo/4.png?raw=true 'image 4')

![Detail phone features](promo/5.png?raw=true 'image 5')
