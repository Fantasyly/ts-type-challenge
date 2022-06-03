// 最终答案
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [V in T[number]] : V
}

/**
 * 知识点1: typeof
 *   const let JS世界的东西
 *   type interface TS世界的东西
 *   通过 typeof 把JS世界与TS世界连通起来
 */

/**
 * 知识点2: 字面量类型
 *   鼠标放到a上，可以显示出：
 *   也就是说tuple1是字符串类型的数组
 *   鼠标放到b上，显示出
 *   type b = readonly ["tesla", "model 3", "model X", "model Y"]
 *   tuple2为字面量类型，无法更改。
 */
const tuple1 = ['tesla', 'model 3', 'model X', 'model Y'];
const tuple2 = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const str1 = 'abs';

// type a = string[]
type a = typeof tuple1;
// type b = readonly ["tesla", "model 3", "model X", "model Y"]
type b = typeof tuple2;
// type c = "abs"
type c = typeof str1;
// tuple2[2] = 'q123';//无法分配到 "2" ，因为它是只读属性。ts(2540)

// JS实现
function tuple2obj(params: readonly any[]) {
  const res = {};
  params.forEach((item) => {
    res[item] = item;
  });
  return res;
}

/**
 * 思路分析：
 *  1. 遍历数组
 *  2. 返回对象
 * 之前我们使用过keyof去遍历联合类型和interface
 * 那么可以使用keyof遍历数组嘛？
 * 答案是不行的，下面是尝试的代码
 * 实际上，在TS中，遍历数组其实是使用的[number]
 */

// 尝试1: 使用keyof
type TupleToObject1<T extends readonly any[]> = {
  [V in keyof T] : V
}
// keyof得到的是数组的索引
// type d = readonly ["0", "1", "2", "3"]
type d = TupleToObject1<typeof tuple2>;

// [number] 遍历数组
type TupleToObject2<T extends readonly any[]> = {
  [V in T[number]] : V
}
//type e = {
//   tesla: "tesla";
//   "model 3": "model 3";
//   "model X": "model X";
//   "model Y": "model Y";
// }
type e = TupleToObject2<typeof tuple2>;

/**
 * 上面的结果已经可以通过测试case的一半case
 * 还有一个case无法通过
 * 也就是@ts-expect-error这个case
 * @ts-expect-error的意思是ts期望代码这样写的时候报错
 * type error = TupleToObject<[[1, 2], {}]>
 * 比如这个代码，它的数组里是数组和对象，不能作为对象的key
 * 这就需要我们限制传入的类型
 */
type TupleToObject3<T extends readonly (string | number | symbol)[]> = {
  [V in T[number]] : V
}