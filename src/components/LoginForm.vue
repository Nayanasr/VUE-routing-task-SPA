<template>
    <h2> Login Form</h2>
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
</Form>

<h5  @click="Signup"> Forgot Password?</h5>

  <button 
  type="submit" 
  class="btn btn-primary" >Submit
  </button>

  <h4 class="cursor" @click="Signup"> Don't have an account! Sign up....</h4>

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


    Signup(){
        this.$router.push("/signup")
    },
    home(){
        this.$router.push("/")
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