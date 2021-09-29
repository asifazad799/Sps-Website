$.validator.addMethod("Email", function (value, element) {
    return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);},'Enter a valid email'
    );
$.validator.addMethod("customName", function(value, element) { 
    return this.optional( element ) || /^([a-zA-Z])+([a-zA-Z])+$/.test( value ); 
  },'Enter a valid input');
$("#registration").validate({
            rules:{
                applicantName:{
                    required: true,
                    customName:true
                },
                applicantPlace: {
                    required: true,
                    customName:true
                },
                genderOf: {
                    required: true
                },
                contactNo : {
                    required: true,
                    digits: true,
                },
                email: {
                    required: true,
                    Email: true
                },
                jobStatus:{
                    required: true
                },
                education: {
                    required: true
                },
                institution: {
                    required: true
                },
                graduation:  {
                    required: true,
                    digits: true
                },
                aboutApplicant:{
                    required: true
                },
                joiningReason: {
                    required: true
                },
                motivation:  {
                    required: true
                },
                SPS: {
                    required: true
                },
                agreement: {
                    required: true
                }
            },
            messages:{
                // applicantName:{
                //     customName:'Enter a valid input'
                // },
                // applicantPlace: {
                //     customName:'Enter a valid input'
                // },
                contactNo : {
                    digits: 'enter a valid contact number',
                },
           },
            errorPlacement: function(error,element){
                if(element.is(":checkbox")){
                    error.appendTo(element.parents(".agree"));
                }else{
                     error.insertAfter( element );
                }
            },
            submitHandler:function(form){
                $.ajax({
                    url:"https://script.google.com/macros/s/AKfycbxCqTgW9ubsjkUWyAsF9XGbf5z0_CjrJPscrBPImxOn6b-ZWQ2jFVQK41VwSRKQJAD7/exec",
                    data:$("#registration").serialize(),
                    method:"post",
                    success:function (response){
                        alert("Form submitted successfully")
                        window.location.reload()
                    },
                    error:function (err){
                        alert("Something Error")
            
                    }
                })
            }
})



