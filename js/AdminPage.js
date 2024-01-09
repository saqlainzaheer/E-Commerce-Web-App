const axios = require('axios');
function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

async function createAdmin(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    let response = await axios.post("http://localhost:5000/admin", data);
    console.log(response.data);
    document.getElementById("toast-success").classList.remove("hidden");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    setTimeout(() => {
      document.getElementById("toast-success").classList.add("hidden");
    }, 2000);

    // Call the function when a change is made
    handleChange();
  } catch (err) {
    console.error(err);
    document.getElementById("toast-danger").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("toast-danger").classList.add("hidden");
    }, 2000);
  }
}

async function handleChange() {
  try {
    let response = await axios.get("http://localhost:5000/admin");
    let adminList = response.data.data;
    let tbody = document.getElementById("addrow");
    tbody.innerHTML = "";
    adminList.forEach((item) => {
      // Get the tbody element where you want to add rows

      const tablehtml = `
        <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          ${item.name}
        </th>
        <td class="px-6 py-4">${item.email}</td>
        <td class="px-6 py-4 text-left">
          <button
           onClick="DeleteAdmin(${item.id})"
            class="font-medium text-white bg-red-700 px-5 py-2 dark:text-blue-500"
            style="border-radius: 4px; cursor: pointer"
          >
            Delete
          </button>
        </td>
      </tr>
          `;

      tbody.innerHTML += tablehtml;
    });
  } catch (err) {
    console.error(err);
    // Handle errors during the GET request
  }
}
document.addEventListener("click", function (event) {
  if (event.target && event.target.className == "delete-button") {
    // Extract the admin ID from the button's data-id attribute
    const adminId = event.target.getAttribute("data-id");
    DeleteAdmin(adminId);
  }
});
// Perform a GET request and call the function when the page is loaded
window.onload = handleChange;

async function DeleteAdmin(id) {
  console.log("admin", id);
  try {
    let response = await axios.delete(`http://localhost:5000/admin/${id}`);
    console.log(response.data);
    document.getElementById("successcontent").innerHTML =
      "Admin Deleted Successfully";
    document.getElementById("toast-success").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("toast-success").classList.add("hidden");
    }, 2000);
    // Call the function when a change is made
    handleChange();
  } catch (err) {
    console.error(err);
    document.getElementById("errorcontent").innerHTML =
      "Error in Admin Deletion";
    document.getElementById("toast-danger").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("toast-danger").classList.add("hidden");
    }, 2000);
  }
}
