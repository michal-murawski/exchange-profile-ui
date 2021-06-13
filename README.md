# Exchanges profiles UI

## Scripts

`yarn` - to install all the required dependencies

`yarn server` - bootstrap local json-server

`yarn start` - bootstrap local development CRA server

## What? Why?

* **create-react-app** - easy to bootstrap a new project. Just install and go!
* **antd** - components' library I am currently most familiar with. Just to speed up the development.
* **prettier, eslint, husky** - quicker and easier development as I do not need to think about code formatting.
* **react-query** - Always wanted to try out something else than global state management and this library is getting more and more popular.
* **typescript** - Much easier to work with more complex applications, at least that is my experience.
* **CSS-modules** - Simple CSS without global collision problem.

## Explanation

I decided to go with the features/modules directories structure.
* **common** directory holds everything that might be used across the application (factories, components, utilities, services, helpers, etc.).
  Those might be the things we could move to the separate library (ex. in the nx monorepo project).
* **features** has main configs and all the features: functionalities, business logic separation for the application.
  They should be as independent as possible to simplify future changes.
* **core** feature folder is responsible for state, logic, components which are required for more than one feature (ex. user, some data/pieces of information, layouts) and need to be shared across the whole project.

## Final thoughts

For most of the task time, I was wondering how to present data and relations in the UI. I was trying to get into the user's shoes. This took me too much time. The final solution is too basic and does not properly meet the criteria.

I would not change much in the final project structure, from a technical perspective. That way it is easy to present new features, modules.

Improvements:
- data representation in tables,
- sorting and searching,
- accurate colors to the specific values,
- navigation between views,
- create some common styles, components related to layout and positioning,
- balances per account.

Some of them could be done quite easily (ex. Table columns for searching and filtering).

