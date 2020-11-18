import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { RouteHandlerDescriptor } from "./interfaces";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: RouteHandlerDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
