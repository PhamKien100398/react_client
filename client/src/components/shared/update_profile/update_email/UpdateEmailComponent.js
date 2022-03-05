import React from "react";

class UpdtateEmailComponent extends React.Component {
    render(){
      return (
        <form style = {{maxWidth : "400px", margin : "0 auto"}}>
        <div class="-mx-3 md:flex flex-col mb-2 w-full">
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                   for="email">
              New email
            </label>
            <input
              class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter new email!"
              autocomplete="off"
              formControlName="email"
              required/>
            <p class="text-red-500 text-xs italic"
              //  *ngIf="email?.hasError('required') && (email?.dirty || email?.touched)"
            >This field must be not empty</p>
            <p class="text-red-500 text-xs italic"
              //  *ngIf="email?.hasError('pattern') && (email?.dirty || email?.touched)"
            >Email has invalid format</p>
            <p class="text-red-500 text-xs italic"
              //  *ngIf="email?.hasError('emailExists')&& email.value!=userProfile.email && (email?.dirty || email.touched)">
              >This email already exists</p>
            <p class="text-red-500 text-xs italic"
              //  *ngIf="email.value==userProfile.email && (email?.dirty || email?.touched)"
            >This is old email</p>
          </div>
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                   for="current-pwd">
              Current password <span class="mx-1 text-lg text-gray-700 cursor-pointer">
              <i className="fa fa-eye-slash"></i>
            </span>
            </label>
            <input
              class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
              id="current-pwd"
              placeholder="********"
              autocomplete="off"
              formControlName="currentPassword"
              required/>
            <p class="text-red-500 text-xs italic"
            >This field must be not empty</p>
          </div>
        </div>
        <div class="my-5 flex justify-end px-6">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  type="submit">Update email
          </button>
        </div>
      </form>
      )

    }
}

export default UpdtateEmailComponent;