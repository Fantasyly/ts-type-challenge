/**
 * 实现内置的 Parameters<T> 类型，而不是直接使用它，
 * 可参考TypeScript官方文档
 * (https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

  /**
   * infer是用来推断类型的  注意是类型！！
   */