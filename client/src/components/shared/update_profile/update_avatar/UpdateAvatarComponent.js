import React from "react";

class UpdtateAvatarComponent extends React.Component {
    render(){
      return (
        <form style = {{maxWidth : "400px", margin : "0 auto"}}>
  <div class="-mx-3 md:flex flex-col mb-2 w-full">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
      >
        Choose an image
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
        type="file"
        accept="image/*, .xlsx, .xls"
        placeholder="Choose file"
        autocomplete="off"
        required
        />
    </div>
  </div>
  <div class="my-5 flex justify-end px-6">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            type="submit">Upload
    </button>
  </div>
</form>
      );

    }
}

export default UpdtateAvatarComponent;