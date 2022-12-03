import { Equal } from '@type-challenges/utils';
/**
 * 在类型系统里实现 JavaScript 的 `Array.includes` 方法，
 * 这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
 * 举例来说，
 */
// export type Includes<T extends any[], U> = U extends T[number] ? true : false;
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

// expected to be `false`
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
