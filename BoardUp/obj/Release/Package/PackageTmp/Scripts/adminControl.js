window.onload = function () {
 function sendAddAjax(name) {
        var myData = {
            "ViewName" : name
        };
        $.ajax({
            type: "POST",
            url: "/Admin/Index",
            async: false,
            data: JSON.stringify(myData),
            dataType: "html",
            contentType: "application/json; charset=utf-8",
            success: successFunc,
            error: errorFunc,
            cache: false
        });

        function successFunc(data, status) {
            $("#obsah").html(data);
        }

        function errorFunc() {
            alert('error');
        }
 }

 function sendFriendReponseAjax(id, link) {
     var myData = {
         "Index": id
     };
     $.ajax({
         type: "POST",
         url: link,
         async: false,
         data: JSON.stringify(myData),
         //dataType: "html",
         contentType: "application/json; charset=utf-8",
         success: successFunc,
         error: errorFunc,
         cache: false
     });

     function successFunc(data, status) {
         
     }

     function errorFunc() {
         alert('error');
     }
 }

 $("#addboard").click(function () {
     sendAddAjax("_BoardPartial");
     return false;
    });
 $("#addfriend").click(function () {
     sendAddAjax("_FriendPartial");
     return false;
 });
 $("#addpermission").click(function () {
     sendAddAjax("_PermissionPartial");
     return false;
 });
 $(".accept").click(function () {
     $("#debug").html(this.data("index"));
     sendFriendReponseAjax(this.data("index"), "/Admin/AcceptFriend");
     return false;
 });
 $(".decline").click(function () {
     sendFriendReponseAjax(this.data("index"), "/Admin/DeclineFriend");
     return false;
 });

}