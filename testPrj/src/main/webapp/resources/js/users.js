var main = {
    init : function () {
        var _this = this;
        
        $('#btn-save').on('click', function(){
            _this.save();
        });
        
        $('#btn-update').on('click', function(){
            _this.update();
        });
        
        $('#btn-delete').on('click', function(){
            _this.delete();
        });
    },
    save : function () {
        var data = {
        	firstName: $('#firstName').val(),
        	lastName: $('#lastName').val(),
        	email: $('#email').val(),
        	gender: $('#gender').val(),
        	ipAddress: $('#ipAddress').val()
        };

        $.ajax({
            type: 'POST',
            url: '/model/addUser',
            dataType: 'text',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이 등록되었습니다.');
            window.location.href='/model/'; // 등록이 성공하면 메인페이지(/)로 이동
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
    },
    update : function () {
        var data = {
        	id: $('#id').val(),
    		firstName: $('#firstName').val(),
        	lastName: $('#lastName').val(),
        	email: $('#email').val(),
        	gender: $('#gender').val(),
        	ipAddress: $('#ipAddress').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/model/modifyUser/'+id,
            dataType: 'text',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이 수정되었습니다.');
            window.location.href='/model/'; // 등록이 성공하면 메인페이지(/)로 이동
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
    },
    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'POST',
            url: '/model/removeUser/'+id,
            dataType: 'text',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            alert('글이 삭제되었습니다.');
            window.location.href='/model/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
   }
};

main.init();