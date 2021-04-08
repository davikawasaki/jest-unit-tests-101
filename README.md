# Jest Unit Testing 101

Code usage for a simple kickoff around unit tests using Jest in a Koa backend application.

## How to use

```bash
npm i
npm test
npm run dev
```

Jest unit tests are organized between __test__ and __mock__, where the first option stores tests whilst the second one is about the mocked data to be used within tests. Tests can be run with either the following:

```bash
npm t
NODE_ENV=dev jest --coverage
```

In case you might want to test locally the API, you can run either the following:

```bash
npm run dev
npm start
```

Endpoints available:

- /payments/users/marcosrocha
- /payments/users/mariaclara

Linter is pre-configured and can be executed using the following commands:

```bash
npm run check
npm run lint
```

## Technologies

- Koa boilerplate template for create-koa-application

```bash
create-koa-application jest-unit-tests-101
```

- KoaJS
- Jest
- Axios
- ESLint
- Husky
