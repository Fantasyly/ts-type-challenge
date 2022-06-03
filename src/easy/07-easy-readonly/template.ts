type MyReadonly<T> = {
  readonly [V in keyof T] : T[V]
}
