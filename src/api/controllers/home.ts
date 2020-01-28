import {Controller, Get, Req, Res} from "routing-controllers";

@Controller()
export class HomeController {
  @Get("/")
  public async home(@Req() request: any, @Res() response: any) {
    return response.send(`
<html>
<body>
<h1>Countries app:</h1>
<h2>Add country</h2>
<form method="POST" action="/countries">
  <label for="name">Name<label><br/>
  <input name="name" type="text"><br/>
  <label for="code">Code<label><br/>
  <input name="code" type="text"><br/>
  <button type="submit">submit</button>
</form>
<h2>Update country</h2>
<form method="PUT" action="/countries">
  <label for="name">Name<label><br/>
  <input name="name" type="text"><br/>
  <label for="code">Code<label><br/>
  <input name="code" type="text"><br/>
  <button type="submit">submit</button>
</form>
Authenticate: <a href="POST /authenticate : username, password\n
<ul>
  <li><a href="countries">All countries</a><li>
  <li><a href="countries/AFGHANISTAN">AFGHANISTAN</a><li>
</ul>
<form method="DELETE" action="/countries">
  <label for="name">Name<label><br/>
  <input name="name" type="text"><br/>
  <button type="submit">submit</button>
</form>  
</body>
</html>
`);
  }
}