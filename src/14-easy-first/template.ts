/**
 * 实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。
 * 例如：
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 * type head1 = First<arr1> // expected to be 'a'
 * type head2 = First<arr2> // expected to be 3
```
 */

/**
 * 方法1: extends类型条件判断
 * 判断T是不是空数组类型，可以通过T extends []来判断
 */
type First1<T extends any[]> = T extends [] ? never : T[0];

/**
 * 方法2: 获取tuple的length
 * 通过T['length']来获取元祖类型的长度
 */
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0];

/**
 * 方法3: extends union
 * T[number]可以遍历tuple
 * 其得到的是一个union类型，如xx行代码
 * 如果arr是个空数组的话
 * 其T[number]得到的是never，如xx行代码
 * 所以可以通过判断T[0] extends T[number]来做这道题
 * 如果是空数组类型，T[0]是undefined，T[number]是never
 * 则extends的结果为false
 */
type arr1 = [3, 2, 1];
type arr2 = [];
type arr1Test = arr1[number]; // type arrNumber = 3 | 2 | 1
type arr2Test = arr2[number]; // type arr2Test = never
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

/**
 * 方法4: infer
 * 类似于JS解构
 * 如果能得到first值，就返回first值 否则返回never
 */
type First<T extends any[]> = T extends [infer first, ...infer rest]
  ? first
  : never;

type Tail<T extends any[]> = T extends [infer first, ...infer rest]
  ? rest
  : never;

type r1 = First<[1, 2]>; // type r1 = 1
type r2 = Tail<[1, 2, 3]>; // type r2 = [2, 3]
type r3 = Tail<[1]>; // type r3 = []