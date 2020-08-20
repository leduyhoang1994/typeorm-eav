import { SelectQueryBuilder, Entity } from 'typeorm';

export const Greeter = (name: string) => `Hello ${name}`;

declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    /**
     * Find model by entity attribute
     * @param attribute attribute code
     * @param value attribute value
     */
    whereAttribute(attribute: string, value: any): this;
  }
}

export function eavInject() {
  SelectQueryBuilder.prototype.whereAttribute = function (attribute: string, value: any) {
    this.where('name = :value', { value });
    return this;
  };
}
