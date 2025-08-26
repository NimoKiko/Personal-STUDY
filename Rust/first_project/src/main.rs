fn main() {

    // 01-变量和常量
    // variables_and_constants();

    // 02-数据类型
    // data_types();

    // 03-函数

    let res:i32 = fun();
    println!("返回值为{}", res);
}

// 变量和常量
fn variables_and_constants() {
    // 在变量前使用 mut 关键字来表示该变量是可变的

    let mut num = 5;

    println!("the value of num is: {}", num);

    num = 6;

    println!("the value of num is: {}", num);

    // 常量: 通常使用const定义，且不可改变
    const CONSTANT_NUM: u32 = 60 * 60 * 3;

    println!("the value of CONSTANT_NUM is: {}", CONSTANT_NUM);

    // 遮蔽：
    // 可以声明和前面的变量名相同的变量
    // 后声明的变量会遮蔽前面的变量
    let x = 5;
    let x = x + 1; // 遮蔽了前面的 x
    {
        let x = x * 2; // 遮蔽了前面的 x
        println!("x 的值是：{}", x);
    }
    println!("x 的值是：{}", x);

    // 遮蔽和使用mut的区别：
    // 遮蔽可以改变变量的类型，但是使用mut声明的变量后续改变的时候必须是相同类型
}

// 数据类型
// fn data_types() {

//     /*
//      * 标量类型
//      *  - 整数类型
//      *  - 浮点数类型
//      *  - 布尔类型
//      *  - 字符类型
//      */


//     /*
//      整数类型
//      有符号类型：i8, i16, i32, i64, i128, isize 可以为负数
//      无符号类型：u8, u16, u32, u64, u128, usize 明确为正数
//      */
//     let integer_with_symbol: i32 = -10;
//     let integer_without_symbol: u32 = 10;

//     /*
//         浮点数类型：
//         - 使用f32或f64表示浮点数类型
//         - 默认为f64
//         - f32：单精度
//         - f64：双精度
//      */
//     let float_num_1: f32 = 3.14;
//     let float_num_2: f64 = 2.718281828459045;
//     let float_num_3 = 1.618033988749895; // 默认为f64

//     /*
//         布尔类型：
//         - Rust 中的布尔类型也有两个可能的值：true 和 false。
//         - 布尔值的大小为 1 个字节。
//         - Rust 中的布尔类型使用 bool 声明。
//      */
//     let t = true;
//     let f: bool = false; // with explicit type annotation

//     /*
//         字符类型：
//         - Rust 的 char（字符）类型是该语言最基本的字母类型
//      */
//     let c = 'z';
//     let z = 'ℤ';
//     let heart_eyed_cat = '😻';
// }

// 函数
fn fun() -> i32{

    let x = {
        let y = 6;
        y + 1
    };

    println!("{}",x);

    10
}



