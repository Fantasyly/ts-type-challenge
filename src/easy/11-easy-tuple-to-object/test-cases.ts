import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla';
        'model 3': 'model 3';
        'model X': 'model X';
        'model Y': 'model Y'
      }
    >
  >,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/**
 * type error = TupleToObject<[[1, 2], {}]>
 * 可能会疑惑这里传进去的为什么是个数组[]，而不是传的typeof的结果
 * 其实[[1, 2], {}]也是个类型。
 */
const testArr : [[1, 2], {}] = [[1, 2], {}];