import { Entity } from 'typeorm';
import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder";

export function EavEntity(): Function {
  // Factory returns the actual decoration function.  
  return function (target: Function): void {

    Entity()(target);
  }
};