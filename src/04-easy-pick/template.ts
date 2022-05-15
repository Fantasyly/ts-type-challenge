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