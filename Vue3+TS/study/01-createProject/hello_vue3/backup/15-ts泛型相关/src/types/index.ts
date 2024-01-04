// 定义一个接口，限制person对象的具体属性
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

// 一个自定义类型
export type Persons = Array<PersonInter>
// 或者这种形式
// export type Persons = PersonInter[]


