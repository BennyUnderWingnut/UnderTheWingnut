// JavaScript Document
var snackbarContainer = document.querySelector('#alert');
var handler = function () {
};
var login = function () {
    window.location.href = "login.html";
}
var legalIDs = ["chensihao"];

function myAccount() {
    window.location.href = "my.html?id=" + userID;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var userID;

//网页打开时自动运行
(function () {
    userID = getUrlVars()['id'];//识别url中的用户id
    if (legalIDs.includes(userID)) {//用户id在合法id数组中
        $('.user-avatar').empty();//删去默认头像
        $('.user-avatar').append('<img src="images/icons/avatar.jpg" class="avatar-image" alt/>');//添加用户头像
        $('.mdl-navigation__link').each(function () {
            var $this = $(this);
            var _href = $this.attr("href");
            $this.attr("href", _href + "?id=" + userID);
        })//在每个链接后增加id参数
        $('.continue-study-section').css('display', 'block');//显示继续学习部分
    } else {//未登录
        $('.plan').removeAttr('href');//删去链接
        $('.my').removeAttr('href');
        $('.plan').attr('onClick', "snackbarContainer.MaterialSnackbar.showSnackbar({message: \'请先登录\'," +
            "timeout: 2000,actionHandler: login,actionText: \'登录\'})");//点击提示登录
        $('.my').attr('onClick', "snackbarContainer.MaterialSnackbar.showSnackbar({message: \'请先登录\'," +
            "timeout: 2000,actionHandler: login,actionText: \'登录\'})");
        $('.shopping-button').attr('onClick', "snackbarContainer.MaterialSnackbar.showSnackbar({message: \'请先登录\'," +
            "timeout: 2000,actionHandler: login,actionText: \'登录\'})");
    }
})();

$('.avatar-image').on('mousedown', function (event) {
    event.stopPropagation();
    event.preventDefault();
    $('.user-card').toggle();
});
$('.user-card').on('mousedown', function (event) {
    event.stopPropagation();
    event.preventDefault();
});
$(document).on('mousedown', function () {
    $('.user-card').hide();
});