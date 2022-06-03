/**
 * 创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。
 * 例如：
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = [
 *  'FALCON 9',
 *  'FALCON HEAVY',
 *  'DRAGON',
 *  'STARSHIP',
 *  'HUMAN SPACEFLIGHT'
 * ]
 * type teslaLength = Length<tesla> // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
 */
type Length<T extends readonly any[]> = T['length'];

/**
 * 知识点1:tuple
 * 每一个位置的类型定死，长度定长的数组类型
 */
type stringNumber = [string, number];
const a : stringNumber = ['123', 123];

/**
 * 知识点2:tuple类型获取length与数组类型获取length的区别
 * tuple获取length得到的length的值，因为tuple是定长的
 * 数组获取length得到的是类型
 */
type arrType = string[];
type l1 = arrType['length']; //type l1 = number
type l2 = stringNumber['length']; // type l2 = 2