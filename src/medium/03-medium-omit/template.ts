/**
 * 不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。
 * `Omit` 会创建一个省略 `K` 中字段的 `T` 对象。
 */

/**
 * 1. 找到T中不属于K的元素 Exclude<keyof T, K> 注意Exclude的第一个参数是联合类型
 *  Exclude的作用：从联合类型T中排除U的类型成员，来构造一个新的类型。
 * 2. 将得到的类型生成一个对象，得到该元素在T中的类型 可以使用Pick
 *  Pick的作用：从类型T中选择出属性K，生成一个新的类型
 */
export type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};