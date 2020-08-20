import 'reflect-metadata';
import { Greeter, eavInject } from '../index';
import Photo from './entity/Photo';
import { createConnection, getRepository } from "typeorm";

test('My Greeter', async () => {
  eavInject();
  const connection = await createConnection();
  const PHOTO = getRepository(Photo);

  let builder = PHOTO.createQueryBuilder();
  builder = await builder.whereAttribute('name', 'a');
  const results = await builder.getMany();  

  // console.log(results);
  

  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('Generate Migration', async () => {
  

  expect(1).toBe(1);
});