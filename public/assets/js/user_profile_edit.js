$(function() {
  // 数据回填, 获取用户基本信息
  getUserInfo().then(res => {
    console.log(res);
    $("#myEmail").val(res.data.email);
    $("#myImg").attr("src", res.data.avatar);
  });

  $("#btn-submit").click(function() {
    var formData = new FormData();
    formData.append("avatar", $("#myFile")[0].files[0]);

    $.ajax({
      url: "/users/update",
      type: "PUT",
      data: formData,
      headers: {
        Authorization: Cookies.get("token")
      },
      processData: false, // 注意
      contentType: false, // 注意
      success: function(res) {
        if (res.code === 0) {
          alert("修改成功");
          // 刷新一下页面
          window.location.reload();
        }
      }
    });
  });
});
