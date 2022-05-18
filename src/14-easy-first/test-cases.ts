import type { Equal, Expect } from '@type-challenges/utils'

/**
 * First<[3,2,1]>这里的[3,2,1]并不是一个数组
 * 而是一个类型, 相当于一个写死的类型
 */
const arr : [3, 2, 1] = [3, 2, 1];
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
