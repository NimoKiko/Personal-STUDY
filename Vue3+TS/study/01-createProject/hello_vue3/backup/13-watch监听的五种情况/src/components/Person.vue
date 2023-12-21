<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2023年12月20日 13:52:40
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="person">
    <div>
      <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
      <h2>当前求和为：{{ sum }}</h2>
      <button @click="changeSum">点我sum+1</button>
      <hr />
    </div>
    <div>
      <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
      <h2>姓名：{{ person.name }}</h2>
      <h2>年龄：{{ person.age }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改人</button>
      <hr />
    </div>
    <div>
      <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
      <h2>姓名：{{ person2.name }}</h2>
      <h2>年龄：{{ person2.age }}</h2>
      <button @click="changeName2">修改名字</button>
      <button @click="changeAge2">修改年龄</button>
      <button @click="changePerson2">修改人</button>
      <hr />
    </div>
    <div>
      <h1>
        情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性
      </h1>
      <h2>姓名：{{ person3.name }}</h2>
      <h2>年龄：{{ person3.age }}</h2>
      <h2>汽车：{{ person3.car.c1 }}、{{ person3.car.c2 }}</h2>
      <button @click="changeName3">修改名字</button>
      <button @click="changeAge3">修改年龄</button>
      <button @click="changeCar1">修改汽车1</button>
      <button @click="changeCar2">修改汽车2</button>
      <button @click="changeCarTotal">修改汽车</button>
      <hr>
    </div>
    <div>
      <h1>情况五：监视上述的多个数据</h1>
      <h2>姓名：{{ person4.name }}</h2>
      <h2>年龄：{{ person4.age }}</h2>
      <h2>汽车：{{ person4.car.c1 }}、{{ person4.car.c2 }}</h2>
      <button @click="changeName4">修改名字</button>
      <button @click="changeAge4">修改年龄</button>
      <button @click="changeCar1_2">修改汽车1</button>
      <button @click="changeCar2_2">修改汽车2</button>
      <button @click="changeCarTotal2">修改汽车</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, reactive, toRef } from "vue";
/**
 * watch能监听的数据：
 * - ref定义的数据
 * - reactive定义的数据
 * - 函数返回的值
 * - 一个包含上述内容的数组
 *
 * watch 有五种情况
 *
 */
let sum = ref(0);

function changeSum() {
  sum.value += 1;
}
// 情况一：监视【ref】定义的【基本类型】数据
// watch()方法返回一个函数，调用这个函数可以停止监视
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log(newVal, oldVal);
  if (newVal >= 10) {
    stopWatch();
  }
});
// ---------------------分割线-------------------------------------------------
let person = ref({
  name: "zhangsan",
  age: 18,
});
// 方法
function changeName() {
  person.value.name = "lisi";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = {
    name: "wangwu",
    age: 20,
  };
}
// 情况二：监视【ref】定义的【对象类型】数据
// 监视的是对象的地址值，若想监视对象内部属性的变化需要手动开启深度监视
// 第三个参数是一个对象，对象内部有个deep属性，值为true时开启深度监视
// 如果修改的是ref中定义的属性，新值和旧值都是新值，因为他们是同一个对象
// 如果修改的是整个ref定义的对象，新值是新值，旧值是旧值，因为他们是不同的对象
watch(person,(newval, oldval) => {
    console.log("person变化了", newval, oldval);
  },
  { deep: true }
);
// ---------------------分割线-------------------------------------------------
let person2 = reactive({
  name: "zhangsan",
  age: 18,
});
function changeName2() {
  person2.name += "~";
}
function changeAge2() {
  person2.age += 1;
}
function changePerson2() {
  Object.assign(person2, {
    name: "lisi",
    age: 20,
  });
}
// 情况三：监视【reactive】定义的【对象类型】数据
// 如果监听的是reactive创建的数据则默认开启深度监听
// 隐式创建监听，无法关闭
// reactive创建的对象类型数据，newValue和oldValue会相等，因为地址值没有被修改
watch(person2, (nval, oval) => {
  console.log("person2变化了", nval, oval);
});
// ---------------------分割线-------------------------------------------------
let person3 = reactive({
  name: "zhangsan",
  age: 18,
  car: {
    c1: "Benz",
    c2: "BMW",
  },
});
function changeName3() {
  person3.name += "~";
}
function changeAge3() {
  person3.age += 1;
}
function changeCar1() {
  person3.car.c1 = "Audi";
}
function changeCar2() {
  person3.car.c2 = "BYD";
}
function changeCarTotal() {
  person3.car = {
    c1: "Benz",
    c2: "BMW",
  };
}

// 情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性
// 1.如果监视的对象是一个基本类型数据，需要将监视对象包装成一个getter函数，这样就可以监视对象中的某个属性
// 2.如果监视的对象是一个对象类型数据，可以直接监视对象中的某个属性，但如果要监视对象整体是不行的，需要将对象包装成一个getter函数
//   同时需要开启深度监听{deep:true}
// 最佳实践：监视的要是对象里的属性，最好写函数式，注意：若是对象，监视的是地址值；需要关注对象内部，需要手动开启深度监视。
watch(() => person3.name,(nval, oval) => {
    console.log("person3.name变化了", nval, oval);
  }
);
watch(() => person3.age,(nval, oval) => {
    console.log("person3.age变化了", nval, oval);
  }
);
watch(() => person3.car,(nval, oval) => {
    console.log("person3.car变化了", nval, oval);
  },{deep:true}
);
// ---------------------分割线-------------------------------------------------
let person4 = reactive({
  name: "zhangsan",
  age: 18,
  car: {
    c1: "Benz",
    c2: "BMW",
  },
});
function changeName4() {
  person4.name += "~";
}
function changeAge4() {
  person4.age += 1;
}
function changeCar1_2() {
  person4.car.c1 = "Audi";
}
function changeCar2_2() {
  person4.car.c2 = "BYD";
}
function changeCarTotal2() {
  person4.car = {
    c1: "Benz",
    c2: "BMW",
  };
}
// 情况五：监视上述的多个数据
watch([() => person4.name, () => person4.car.c1],(nval, oval) => {
    console.log("person4.name或person4.car.c1变化了", nval, oval);
  },{deep:true}
);
</script>

<style scoped>
.person {
  background-color: #ddd;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
