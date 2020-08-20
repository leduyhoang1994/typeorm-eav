import 'reflect-metadata';
import { Greeter, eavInject } from '../index';
import Photo from './entity/Photo';
import { createConnection, getRepository } from 'typeorm';

test('My Greeter', async (done) => {
  eavInject();
  const connection = await createConnection();
  const PHOTO = getRepository(Photo);

  let builder = PHOTO.createQueryBuilder();
  builder = builder.whereAttribute('name', 'a');
  const results = await builder.getMany();

  expect(Greeter('Carl')).toBe('Hello Carl');
  connection.close();
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  done();
});
