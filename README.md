# FacebookApis

> How to use the facebook APIs: Feed, Insights, Marketing, etc.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

You need to generate a User Access Token to get all the information of your accounts:

* [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)

The endpoints used in this project are:

* [User Access token: /v4.0/me](https://graph.facebook.com/v4.0/me?access_token=)
* [User Access token: /v4.0/me/accounts](https://graph.facebook.com/v4.0/me/accounts?access_token=)
* [Page Access token: /v4.0/{page-id}?fields=id,name](https://graph.facebook.com/v4.0/{page-id}?fields=id,name)

## Libraries used

* [@angular/material](https://material.angular.io)
* [ngx-facebook](https://github.com/zyra/ngx-facebook)
* [gh-pages](https://www.npmjs.com/package/gh-pages)

## Commands

The project was generated with the following commands:

```bash
npm install -g @angular/cli
ng new facebook-apis --directory .
ng update @angular/cli @angular/core
ng add @angular/material
npm i --save ngx-facebook
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Components

```bash
ng g c components/login
ng g c components/search
ng g c components/table
ng g c components/modal
ng g c components/header
```

### Service

```bash
ng g s services/search
```

### Models

```bash
ng g class models/me
ng g class models/accounts
ng g class models/feed
ng g class models/insights
ng g class models/adaccounts
ng g class models/campaigns
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
