async function fun1(params) {
  return "111";
}

async function fun2(params) {
  return "222";
}

async function fun3(params) {
  const v1 = await fun1();
  const v2 = await fun2();

  console.log(v1, v2);
}

fun3();
