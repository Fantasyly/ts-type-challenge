/**
 * 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
 * 从联合类型T中排除U的类型成员，来构造一个新的类型。
 */
type MyExclude<T, U> = T extends U ? never : T;

/**
 * 知识点1:Exclude的作用
 * 知识点2:extends
 *  T extends U 表示T是否可以赋值给U
 * 知识点3:分布式有条件类型
 * 分布式有条件类型就是extends前面的参数为联合类型时则会分解
 * （依次遍历所有的子类型进行条件判断）联合类型进行判断。
 * 然后将最终的结果组成新的联合类型。
 * 如代码所示，分布式的过程其实是这样的：
 * a | b | c extends a
 *    a extends a ?  a是否可以赋值给a? yes
 *    b extends a ?  no
 *    c extends a ? no
 */
type a = Exclude<'a' | 'b' | 'c', 'a'>; // type a = "b" | "c"
type b = MyExclude<'a' | 'b' | 'c', 'a'>; // type b = "b" | "c"