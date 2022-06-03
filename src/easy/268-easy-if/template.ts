/**
 * 实现一个 `IF` 类型，它接收一个条件类型 `C` ，
 * 一个判断为真时的返回类型 `T` ，
 * 以及一个判断为假时的返回类型 `F`。
 *  `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。
 * 举例:
 * type A = If<true, 'a', 'b'>  // expected to be 'a'
 * type B = If<false, 'a', 'b'> // expected to be 'b'
 */
type If< C extends boolean , T, F> = C extends true ? T : F;

// 知识点
// 类型兼容性 | 分配规则
// null 严格模式和非严格模式的区别
// 在非严格模式下，null可以赋值给boolean
// 所以这道题在tsconfig里把严格模式打开即可
// 1. https://www.typescriptlang.org/docs/handbook/type-compatibility.html