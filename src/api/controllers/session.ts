import {JsonController, Post} from "routing-controllers";
import { basicAuth } from '../authenticate';


@JsonController()
export class SessionController {
  @Post("/authenticate")
  public async authenticate(username: string, password: string): Promise<boolean> {
      return await basicAuth(username, password)
  }
}