$(function() {
    $('#btnaddPatient').click(function(){

            $.ajax({
            url:'/addPatient',
            data: $('#addPatient').serialize(),
            type: 'POST',
            success: function(response) {
                alert(response);
            },
            error: function(error) {
                alert(error);
            }
        });
    });
});