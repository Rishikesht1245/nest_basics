import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";

describe('App e2e', () => {
  let app : INestApplication;
  // we are using jest for testing oru application
  beforeAll(async () => {
    // creating testing module on our app
    const moduleRef = await Test.createTestingModule({
      imports:[AppModule],
    }).compile();

    // creating the testing application
     app = moduleRef.createNestApplication();

     // include the pipes for validation 
     app.useGlobalPipes(
      new ValidationPipe({
        // for stripping the unwanted inputs which are not mentioned in the class validators(interface)
        whitelist: true,
      }),
    );
    // start the server
    await app.init()
  });

  // closing the app after everything
  afterAll(() => app.close())

  it.todo("should pass");

  // pactum for sending request to our server
});