function postToGoogle() {
			var name = $('#Name').val();
        	var email = $('#Email').val();
        	var college = $('#College').val();
			var mno = $('#Mno').val();
			var year = $('#Year').val();
			var cmt1 = $('#cmt1').val();
			var cmt2 = $('#cmt2').val();
			var cmt3 = $('#cmt3').val();
			var submitButton = $('#submitButton');
			submitButton.val('Submitting...');
         	$.ajax({
                	url: "https://docs.google.com/forms/d/e/1FAIpQLSe8qPXKvTOCxrsfLgqwGYjda0TckC66eN8-8VcU4HhdVa3nIg/formResponse",
					data: {"entry.2094364885": name, 
							"entry.2003932882": email, 
							"entry.609785890": college, 
							"entry.1438636419": mno, 
							"entry.1320656763": year, 
							"entry.1565698868": cmt1, 
							"entry.902102950": cmt2,
							"entry.1392460848": cmt3
						},
                	type: "POST",
                	dataType: "xml",
          			statusCode: {
                        0: function() {
                            window.location.replace("thankYou.html");
                        },
                        200: function() {
                            window.location.replace("thankYou.html");
                        }
                    }
            });
}