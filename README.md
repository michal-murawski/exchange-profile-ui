# Exchanges profiles UI

## Scripts

`yarn` - in order to install all the required dependencies

`yarn server` - bootstrap local json-server 

`yarn start` - bootstrap local development CRA server 

## What? Why?

* **create-react-app** - easy to bootstrap new project. Just install and go!
* **antd** - components' library I am currently most familiar with. Just to speed up the development.
* **prettier, eslint, husky** - quicker and easier development as I do not need to think about code formatting.
* **react-query** - Always wanted to try out something else than global state management and this library is getting more and more popular.
* **typescript** - Much easier to work with more complex applications, at least that is my experience.
* **css-modules** - Simple CSS without global collision problem.

## Explanation

I decided to go with the features/modules directories structure.
* **common** directory holds everything that might be used across the application (factories, components, utilities, services, helpers, etc.).
Those might be the things we could move to the separate library (ex. in the nx monorepo project).
* **features** has main configs and all the features: functionalities, business logic separation for the application.
They should be as independent as possible in order to simplify future changes.
* **core** feature folder is responsible for state, logic, components which are required for more than one feature (ex. user, some data/pieces of information, layouts) and need to be shared across the whole project.

## Final thoughts

I believe most of the time I was wondering how should I present data and relations in the UI.
I do have a feeling that my final solution is too basic and does not properly meet the criteria.

I would not change much in the final project structure, from technical perspective.
I might be a little biased as I am used to this kind of structure.

Unfortunately, I did not have enough time to fix and improve UX/UI layer of the application, ex.
- data representation in a table
- some sorting and searching
- accurate colors to the specific values
- navigation between views
- create some common styles, components related to layout and positioning



