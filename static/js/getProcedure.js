$(function() {
    $('#btnProcedure').click(function(){

        $.ajax({
            url:'/getProcedures',
            data: $('#getProcedures').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
				
				populateTable(response);
				
            },
            error: function(error) {
				console.log("ERROR");
                console.log(error);
            }
        });
    });
});



function populateTable(data){
	
	var table = document.getElementById('resultsTable');
	
	for(var i=0; i<data.length; i++){
		
		var tr = document.createElement('tr');
		
		for(var j=0; j<1; j++){
			
			var td = document.createElement('td');
			
			td.innerHTML = data[i][j];
			
			tr.appendChild(td);
			
		}
		
		table.appendChild(tr);
		
	}
	
}