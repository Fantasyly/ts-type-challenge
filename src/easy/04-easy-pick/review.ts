export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

export type MyPick2<T, U extends keyof T> = {
  [V in U]: T[V]
}
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

