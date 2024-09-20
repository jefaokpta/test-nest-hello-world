import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const user = { name: 'John Doe', age: 30 };
  const { age, ...cortado } = user;
  const novo = { ...cortado, qlqr: 22 };

  console.log(cortado); // { name: 'John Doe' }
  console.log(age); // 30
  console.log(novo); // { name: 'John Doe', age: 22 }

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      // .expect('Hello World!');
  });

});
