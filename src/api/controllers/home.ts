import {Controller, Get, Req, Res} from "routing-controllers";

@Controller()
export class HomeController {
  @Get("/")
  public async home(@Req() request: any, @Res() response: any) {
    return response.send(`
<html>
<head>
    <style>
    ul {
      list-style-type: none
    }    
    </style>
</head>
<body>
<h1>Countries app</h1>
<h2>Authenticate user</h2>
<form method="POST" action="/authenticate">
  <label for="name">Username<label><br/>
  <input name="name" type="text"><br/>
  <label for="code">Password<label><br/>
  <input name="password" type="text"><br/>
  <button type="submit">submit</button>
</form>
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
<h2>Get countries</h2>
<ul>
  <li><a href="countries">All countries</a></li>
  <li><a href="countries/AFGHANISTAN">AFGHANISTAN</a></li>
</ul>
<h2>Delete country</h2>
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