/**
 * 简单工厂模式:
 *  - 适用于创建对象的属性比较少，且逻辑不复杂的情况
 *  - 通过逻辑判断创建对象
 *  - 构造类和创建类分离
 */
class User {
  constructor(role, pages) {
    this.role = role;
    this.pages = pages;
  }
  
  /**
   * static字面量可以使得该方法直接通过 类名.方法名 调用
   *
   * @static
   * @param {*} role
   * @return {*} 
   * @memberof User
   */
  static UserFactory(role) {
    switch (role) {
      case "superadmin":
        return new User("superadmin", [
          "home",
          "right-manages",
          "user-manages",
          "news-manages",
        ]);
        break;
      case "admin":
        return new User("admin", ["home", "user-manages", "news-manages"]);
        break;
      case "editor":
        return new User("editor", ["home", "news-manages"]);
        break;
      default:
        throw new Error("参数错误");
        break;
    }
  }
}

let user = User.UserFactory("admin");

console.log(user);
