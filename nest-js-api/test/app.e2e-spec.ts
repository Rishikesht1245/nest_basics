import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";

describe('App e2e', () => {
  // we are using jest for testing oru application
  beforeAll(async () => {
    // creating testing module on our app
    const moduleRef = await Test.createTestingModule({
      imports:[AppModule],
    }).compile();
  });

  it.todo("should pass");

  // pactum for sending request to our server
});