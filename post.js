
$(document).ready(function(){
	console.log("helllllllooooo");

	// Weather get demonstration

	// Post data demonstration
	$("#submitBtn").click(function(){
		console.log("helll222222llllooooo");
		// getting form text data
		var postData = $("#postData").val();
		 $.ajax({
	            url: "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php",
	            type:'POST',
	            dataType: 'json',
	            data: {'postData': postData},
	            success:function(data){
	            	// Call to output the results
					//var temp=outputPostData(data);
					console.log("helll33333333ooo");
					//$("#postOutput").html(temp);
					//$("#postOutput").val('');
				}
	    })

	});
});

function outputPostData(data){
	console.log("helll33333333ooo");
	return "<div><h4>" + data + "</h4></div>";
}