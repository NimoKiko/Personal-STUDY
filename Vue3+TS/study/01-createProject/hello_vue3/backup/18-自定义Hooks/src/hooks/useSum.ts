import { ref, reactive, computed } from "vue";
import axios from "axios";

export default function () {
  // 数据
  let sum = ref(0);
  let bigSum = computed(() => {
    return sum.value * 10;
  })

  // 方法
  function add() {
    sum.value++;
  }

  return { sum, add, bigSum };
}
