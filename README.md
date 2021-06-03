![fullstack-starterkit](https://user-images.githubusercontent.com/29705703/86912939-7b0e7e00-c13b-11ea-950b-200a4529ae6b.png)

<p align="center">
<img src="https://img.shields.io/codacy/grade/a1a0da0231dc4759aad40b42cec607f5?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-red.svg?style=for-the-badge" />
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs welcome!" />
<img src="https://img.shields.io/github/workflow/status/karanpratapsingh/fullstack-starterkit/Test%20and%20Build?style=for-the-badge" />
<img alt="Twitter: karan_6864" src="https://img.shields.io/twitter/follow/karan_6864.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray" target="_blank" />

### Motivation :star:

Setting up boiler plates when starting new projects is tedious sometimes and I often found myself setting it up from scratch 🥱

Hence I made this starterkit following some of the best patterns and practices I learnt from some of the larger codebase and fantastic developers I've had a chance to work with 🙌

The main purpose of this repository is to provide a scalable "batteries included" full stack starterkit which follows good architecture patterns (might be opinionated) and code decoupling which becomes significant as the project grows or new developers are onboarded

#### Features

- **All in Typescript**
  Because TypeScript is awesome, and types are important 😃

- **GraphQL First**
  This starterkit is built with graphql first approach using the [Apollo](https://www.apollographql.com/) platform 

- **Includes CI** 
  CI is integral part of any project. This starterkit includes `Github Actions` by default. PR's for integration with any other providers are welcome 🙌

- **Testing Focused**
  This project uses [Jest](https://jestjs.io/) for testing framework and comes with sample tests which are easy to extend
  
- **Prisma**
  [Prisma](https://www.prisma.io/) is the ORM being used for [PostgreSQL](https://www.postgresql.org/). Feel free to submit a PR for any other ORM or drivers you'd like to see here 😁

- **PWA Support**
  This starterkit comes with out of the box PWA support


**Please leave a :star: as motivation if you liked the idea :smile:**

### :rocket: Technologies Used

 <img src="https://user-images.githubusercontent.com/29705703/87513798-e8b82e00-c696-11ea-9591-ed5ba8f12464.png" alt='technologies' width='60%'>

### 📖 Contents
- [Architecture](#architecture)
  - [Backend](#backend)
  - [Web](#web)
- [Getting started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [License](#license)

### Video Overview

Here's a brief video overview of this project, hope it helps.

[![Full Stack Starterkit Overview](http://img.youtube.com/vi/TgtUhEnW8O4/0.jpg)](http://www.youtube.com/watch?v=TgtUhEnW8O4 "Full Stack Starterkit Overview")

<i>Big thanks to [@mikestaub](https://twitter.com/mikestaub) for mentoring me on the lot of the ideas you will come across in this repository. Checkout how he's changing social media with [Peapods](https://peapods.com)</i>

### 🏭 <a id="architecture" style="color: black;">Architecture</a>

#### <a id="backend" style="color: black;">Backend</a>

Here is the folder structure for `backend`, it is using `yarn workspaces` which helps us split our  monorepo into packages such as DB, GraphQL. Which if required can be made into their own micro services.

``` 
backend
├── build
├── config
├── logs
├── packages
│   ├── db
│   │   └──prisma
│   ├── graphql
│   │   ├── api
│   │   ├── schema
│   │   └── types
│   └── utils
├── tests
│   ├── db
│   └── graphql
├── index.ts
└── package.json
```

##### DB

This workspace package contains the database abstractions. The database stack is [PostgreSQL](https://www.postgresql.org/) as relational database and [Prisma](https://www.prisma.io/) as an ORM, read more about DB package [here](./backend/packages/db/README.md)

##### GraphQL

The GraphQL package is organized as below:
``` 
graphql
├── schema
│   └── user                <---- some entity
│       ├── resolvers 
│       │     ├── types     <---- type resolvers
│       │     ├── queries   <---- query resolvers
│       │     └── mutations <---- mutation resolvers
│       ├── queries.graphql
│       ├── mutations.graphql
│       └── types.graphql
├── api
│   ├── queries             
│   └── mutations
├── types                   <---- graphql types
│   ├── schema           
│   └── resolvers
└── index.json
```

The schema splits each entity into it's own set of schema to modularize the codebase. The graphql package uses [schema stitching](https://www.apollographql.com/docs/apollo-server/features/schema-stitching) and [code generators](https://graphql-code-generator.com/) to construct the whole schema.

It is organized so because if you choose to split graphql into it's own set of microservices later, it should be relatively easier to do so as this should be easy to integrate with [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction)

Read more about GraphQL package [here](./backend/packages/graphql/README.md)

#### <a id='web' style="color: black;">Web</a>
Here is the folder structure for `web`, it is a standard [create-react-app](https://create-react-app.dev/) using [craco](https://github.com/gsoft-inc/craco) to override configs without ejecting

Web package uses [Material UI](https://material-ui.com/) heavily as it makes theming and customization very easy. PR's for any other UI kit are welcome 😃

``` 
web
├── build
├── public
├── src
│   ├── assets
│   ├── config
│   ├── constants
│   ├── global
│   ├── tests
│   ├── layout     <---- controls, pure components
│   ├── theme      <---- theme config
│   ├── graphql
│   │   └── operations.tsx     <---- generated graphql operations and types
│   ├── pages
│   │   └──  Home   <---- page component
│   │        ├── components <---- page specific components
│   │        └── hooks      <---- page specific custom hooks   
│   └── utils
├── tests
│   ├── db
│   └── graphql
├── index.ts
└── package.json
```


### 🏃 <a id="getting-started" style="color: black;">Getting Started</a>

**Setting up environment variables**

Before getting started, create `.env` files at both `backend/.env` as well as `web/.env` following the `.env.template` files located in those directories. 

**Install dependencies**

I recommend using `yarn` instead of `npm` as this project heavily uses `yarn workspaces`

Install [volta](https://docs.volta.sh/guide/getting-started), which should automatically install correct `node` and `yarn` version when you checkout the repository (check the root package.json for config)

```
yarn
```

<i>To install dependencies for `web` and `backend` automatically, a postinstall script has been added in the main `package.json`</i>

**Running backend**

```
yarn start:backend
```

<i>Make sure to use your own `DATABASE_URL` and not the default as provided in `.env.template` when developing your own project, as the demo database might be changed/deleted anytime</i>

**Running web**

```
yarn start:web
```

<i>
Feel free to open a new issue if you're facing any problem 🙋
</i>


**Codegen**

This starterkit uses [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) to codegen lot of things like TypeScript types, React Apollo hooks and queries, GraphQL Schema AST etc.

```
cd backend
yarn generate:graphql
```

<i>
Codegen is also executed in yarn postinstall hook
</i>


### 👏 <a id="how-to-contribute" style="color: black;">How to Contribute</a>

Contributions are welcome as always, before submitting a new PR please make sure to open a new
issue so community members can discuss.

Additionally you might find existing open issues which can helps with improvements.

This project follows standard [code of conduct](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### 📄 <a id="license" style="color: black;">License</a>

This project is MIT licensed, as found in the [LICENSE](/LICENSE)

<p>
  <p  style="margin: 0">  
    Built and maintained with 🌮 by <a href="https://karanpratapsingh.com">Karan</a>
  </p>
  <p style="margin: 0px 10px;">  
    <a href="mailto:contact@karanpratapsingh.com">💼 Hire Me</a> | 
    <a href="https://www.paypal.me/karanpratapsingh">🍺 Donate</a> 
  </p>
</p> 
