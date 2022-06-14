/**
 * 实现一个通用`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。
 * `K`指定应设置为Readonly的`T`的属性集。
 * 如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [S in K]: T[S]; // 这一步其实相当于方法2中的Readonly<Pick<>>
} & Omit<T, K>

// 解法2: 先在T中Pick出K，然后加上Readonly，随后和Omit的结果&
// export type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
//   Omit<T, K>;

/**
 * 涉及到的知识点
 * 1: 给范型赋默认值
 */

// 例
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK

type a = MyReadonly2<Todo, 'title' | 'description'>;
