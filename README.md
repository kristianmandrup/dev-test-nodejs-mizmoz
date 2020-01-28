# Nodejs Developer Test

## The Task

Create a simple node service that provides provides some endpoints to allow the listing and updating of a
list of countries and their population. This task should take 2-3 hours but don't worry if you aren't able to
complete all items, just make sure to show your understanding of the core technologies we use.

1. Fork this repo
2. Create an endpoint that allows the listing of the countries in `src/api/country.ts`
3. Create an endpoint to fetch all of the countries sorted by their population
4. Allow the populations to be updated
5. Allow countries to be updated
6. Allow countries to be deleted
7. Add authentication using the `src/api/authenticate.ts` method
8. When you're done commit your code and create a pull request

Bonus points for

1. Storing the data in Redis
2. Allowing the app to be run from a docker-compose file

A basic project outline has been created to help you get started quickly but feel free to start from scratch if you have a preferred setup.

Feel free to use the internet including Google and Stackoverflow to help with the task

## Solution Architecture

### Libraries

- [express](https://expressjs.com/)
- [routing-controllers](https://github.com/typestack/routing-controllers)
- [async-redis](https://www.npmjs.com/package/async-redis)

### Design

- `/api`
  - `/controllers`
    - `CountryController` REST routes for Country model
    - `SesssionController` REST routes session (login, logout)
  - `/repositories`
    - `/inmem` in-memory repositories
      - `CountryRepo` in-memory array adapter for country model
    - `/redis` redis repositories
      - `CountryRepo` redis adapter for country model
  - `/store`
    - `redis` redis store initialisation and configuration (used by redis repository)

### Controllers

A controller uses a repository to adapt and act on a particular data source

### Repositories

The redis repository could be made generic, assuming one RedisDB per model entity.
Then we could store a registry of model -> RedisDB in some configuration.

## Notes

Implementation has not been tested due to time constraints. 
This is just a challenge to demonstrate setting up a basic NodeJS API gateway/server with optional Redis store backing.
The solution provided (see the code) should demonstrate capabilities.

If I was to test it fully with a test suite it would be too much effort for throw away code.

It was a great experience to use [routing-controllers](https://github.com/typestack/routing-controllers) for a
modern routing/controller experience, using decorators.

Hope you like it ;)
