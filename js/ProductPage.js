// // ... (other JavaScript)

// // Handle image preview
// const imageInput = document.getElementById("images");
// const imagePreview = document.getElementById("image-preview");
// const uploadedImages = []; // Array to store uploaded image files

// imageInput.addEventListener("change", function () {
//   for (const file of this.files) {
//     if (!file.type.startsWith("image/")) {
//       // Skip non-image files
//       continue;
//     }

//     // Create a container for each image preview
//     const previewContainer = document.createElement("div");
//     previewContainer.className = "relative inline-block mr-2";

//     // Create the image element
//     const imageElement = document.createElement("img");
//     imageElement.src = URL.createObjectURL(file);
//     imageElement.alt = "Image Preview";
//     imageElement.className = "rounded-lg";
//     imageElement.style.maxWidth = "100px"; // Set maximum width
//     imageElement.style.maxHeight = "100px"; // Set maximum height

//     // Add a bucket icon button for deletion
//     const deleteButton = document.createElement("button");
//     deleteButton.className =
//       "bg-red-500 text-white p-1 rounded-lg absolute top-0 right-0 cursor-pointer";
//     deleteButton.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 14h12l3-14H3zm10 3v8m-4-8v8m-4-8v8m8-8v8"></path>
//       </svg>
//     `;
//     deleteButton.addEventListener("click", function () {
//       // Remove the image preview when the delete button is clicked
//       uploadedImages.splice(uploadedImages.indexOf(file), 1);
//       previewContainer.remove();
//     });

//     // Append image and delete button to the preview container
//     previewContainer.appendChild(imageElement);
//     previewContainer.appendChild(deleteButton);
//     imagePreview.appendChild(previewContainer);

//     // Add the file to the array of uploaded images
//     uploadedImages.push(file);
//   }
// });

// function addProduct(event) {
//   event.preventDefault();
//   // Get form data
//   const name = document.getElementById("name").value;
//   const price = document.getElementById("price").value;
//   const category = document.getElementById("category").value;
//   const imagesInput = document.getElementById("images");
//   const color = document.getElementById("color").value;
//   const description = document.getElementById("description").value;

//   // Create FormData object and append form fields
//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("price", price);
//   formData.append("category", category);

//   // Append images to FormData
//   for (const file of imagesInput.files) {
//     formData.append("images", file);
//   }

//   formData.append("color", color);
//   formData.append("description", description);

//   try {
//     // Send POST request to the server
//     axios.post("http://localhost:5000/product", formData).then((res) => {
//       console.log(res);
//       // Handle success
//       document.getElementById("toast-success").classList.remove("hidden");
//       document.getElementById("name").value = "";
//       document.getElementById("price").value = "";
//       document.getElementById("category").value = "";
//       document.getElementById("images").value = "";
//       document.getElementById("color").value = "";
//       document.getElementById("description").value = "";
//       setTimeout(() => {
//         document.getElementById("toast-success").classList.add("hidden");
//       }, 2000);
//     });
//   } catch (err) {
//     console.error(err);
//     document.getElementById("toast-danger").classList.remove("hidden");
//     setTimeout(() => {
//       document.getElementById("toast-danger").classList.add("hidden");
//     }, 2000);
//   }
// }
