/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
 * 在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型。
 * 请你实现一个类型，可以获取这个类型。
 * 比如：`Promise<ExampleType>`，请你返回 ExampleType 类型。
 */

/**
 * 本题涉及到的知识点
 * infer
 * 1. infer只能在条件类型中使用
 *  如：T extends Promise<infer X> ? X : never;
 *  不可：type MyAwaited1<T extends Promise<infer X>>
 * 2. infer的意思类似于数学中设置未知数X
 */

/**
 * 前两种case：无嵌套情况
 * 通过infer设置变量X，当T是Promise时，直接返回X
 * Expect<Equal<MyAwaited<X>, string>>,
 * Expect<Equal<MyAwaited<Y>, { field: number }>>,
 */
type MyAwaited1<T> = T extends Promise<infer X> ? X : never;

/**
 * 第三个case：嵌套
 * 若T是Promise类型，则把X继续递归。
 * Expect<Equal<MyAwaited<Z>, string | number>>,
 */
type MyAwaited2<T> = T extends Promise<infer X> ? MyAwaited2<X> : T;

/**
 * 第四个case：
 * 限制传入的类型为Promise类型
 * // @ts-expect-error
 * type error = MyAwaited<number>
 * 限制类型需要在传入范型的地方进行限制，
 * 也即MyAwaited<T extends Promise<unknown>>
 * 因为infer只能在条件类型中使用，所以这里Promise内的类型写的是unknown
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;
