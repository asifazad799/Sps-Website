
$.validator.addMethod("customName", function(value, element) { 
    return this.optional( element ) || /^([a-zA-Z])+([a-zA-Z])+$/.test( value ); 
  },);
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
                    email: true
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
                applicantName:{
                    required: 'Field is requred',
                    customName:'Enter a valid input'
                },
                applicantPlace: {
                    required: 'Field is requred',
                    customName:'Enter a valid input'
                },
                genderOf: {
                    required: 'Field is requred'
                },
                contactNo : {
                    required: 'Field is requred',
                    digits: 'enter a valid contact number',
                },
                email: {
                    required: 'Field is requried',
                    email: 'Enter a valid email'
                },
                jobStatus:{
                    required: 'Field is required'
                },
                education: {
                    required: 'Field is required'
                },
                institution: {
                    required: 'Field is required'
                },
                graduation:  {
                    required: 'Field is required',
                    digits: 'enter a valid input'
                },
                aboutApplicant:{
                    required: 'Field is required'
                },
                joiningReason: {
                    required: 'Field is required'
                },
                motivation:  {
                    required: 'Field is required'
                },
                SPS: {
                    required: 'Field is required'
                },
                agreement: {
                    required: 'Field is required'
                }
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



