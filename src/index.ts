import * as express from "express";

const text = "Hello, world"
console.log( text )

class Server {
  public app: express.Application;
  public word: string;

  constructor() {
    this.app = express.default();
    this.word = "test word";
  }


  public say(): void {
    console.log()
  }

  public start() {
    this.app.listen(3000, () => {
      console.log("running");
    });
  }

}

const server = new Server();
server.say()
server.start()
