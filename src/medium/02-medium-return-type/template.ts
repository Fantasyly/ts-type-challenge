/**
 * 不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。
 * 例如：
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type a = ReturnType<typeof fn>; // 应推导出 "1 | 2"
type b = typeof fn;

export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
