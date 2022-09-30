<template>
    <h2> Sign up Form</h2>
    <Form  @submit="onSubmit">

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <Field 
    name="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    :rules="validateEmail" 
    placeholder="Enter email" />
    <div>
        <ErrorMessage name="email" class="errmsg" />
      </div>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <Field 
    name ="password" 
    class="form-control" 
    id="exampleInputPassword1" 
    :rules="validatePassword" 
    placeholder="Password" />
  </div>
  <div>
        <ErrorMessage name="password" class="errmsg" />
      </div>
  

      <div class="form-group">
    <label for="exampleInputConfirmPassword1"> Confirm Password</label>
    <Field 
    name ="confirmPassword" 
    class="form-control" 
    id="exampleInputConfirmPassword1" 
    :rules="validateConfirmPassword" 
    placeholder="Confirm Password" />
  </div>
  <div>
        <ErrorMessage name="confirmPassword" class="errmsg" />
      </div>


    
</Form>

  <button 
  type="submit" 
  class="btn btn-success" >Submit
  </button>

  <h4 class="cursor" @click="SignIn"> Already existing, then Sign in....</h4>
</template>

<script>
  import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword:""
     
      
    };
  },
  
    methods:{
      onSubmit(values) {
      console.log("submit value", values);
      alert("Form successfully submitted");
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },

    //validate password
    validatePassword(value) {
      if(value) {
        let passRegex=/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?@ "]).*/;
        if(passRegex.test(value)) {
          return true;
        } else {
          return "* enter valid password, minimum 6 characters";

        }
      } else {
        return "*password is required";
      }
    },


    validateConfirmPassword(value) {
      if(value) {
        let passRegex=/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?@ "]).*/;
        if(passRegex.test(value)) {
          return true;
        } else {
          return "* must be same as password";

        }
      } else {
        return "*confirm is required";
      }
    },
   
   
    SignIn(){
        this.$router.push("/login")
    }
}
}
</script>

<style scoped>
  .errmsg {
    color: red;
  }
  .cursor {
            cursor:grab;
        }
  </style>