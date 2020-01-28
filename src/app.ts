import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {CountryController, SessionController, HomeController} from "./api";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [HomeController, CountryController, SessionController] // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000, () => {
  console.log('listening on port 3000')
});