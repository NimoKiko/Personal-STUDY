const btnLogin = $("#login");
const content = $("#content");
const btnLogout = $("#logout");
// 夜页面加载完成时执行
$(function () {
  $.ajax({
    type: "get",
    url: "/api/username",
    success: (res) => {
      if (res.state) {
        confirm(res.msg);
        btnLogin[0].hidden = true;
        content[0].hidden = false;
        btnLogout[0].hidden = false;
      } else {
        confirm(res.msg);
        window.location = "login.html";
      }
    },
  });
});
$("#logout").on("click", () => {
  $.ajax({
    type: "get",
    url: "/api/logout",
    success: (res) => {
      if (!res.state) {
        confirm(res.msg);
        btnLogin[0].hidden = false;
        content[0].hidden = true;
        btnLogout[0].hidden = true;
      }
    },
  });
});
$("#login").on("click", () => {
  window.location = "login.html";
});
