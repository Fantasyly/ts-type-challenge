/**
 * 实现 TS 内置的 `Pick<T, K>`，但不可以使用它。
 * 从类型 `T` 中选择出属性 `K`，构造成一个新的类型。
 */

type MyPick <T, K extends keyof T> = {
  [V in K] : T[V]
}

/**
 * 错误1. K extends T
 * 原因： 测试用例里的K是联合类型，形如这样的 'title' | 'completed'
 *       因此应该去extends T的key值的集合
 *       所以 应该是 K extends keyof T
 */

// js
// 对比学习法
function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

// 涉及到的知识点
// 1. 返回一个对象
// 2. 遍历foreach  mapped
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 看看 key 在不在 todo 里面
//    1. keyof  lookup
//     - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    2. extends 条件约束 
//     - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
