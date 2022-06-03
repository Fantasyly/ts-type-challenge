import { Equal } from '@type-challenges/utils';

/**
 * 在类型系统里实现 JavaScript 的 `Array.includes` 方法，
 * 这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。
 * 举例来说，
 * type isPillarMen = Includes<
 *  ['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'
 *  > // expected to be `false`
 */
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

/**
 * 知识点1：递归
 * 知识点2: 模块
 *   如果有import或export，那么就会是一个文件模块
 *   此时的类型和变量就不再是全局的了
 */
