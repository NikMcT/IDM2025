const gallery = document.querySelector('.gallery');

fetch('images.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(artwork =>{

            const gallery = document.getElementById("fineProjects");

            const newImage = document.createElement("div");
            newImage.className = "fineSingle";
            newImage.innerHTML = document.getElementById("template").innerHTML;

            newImage.querySelector(".templateImage").src = artwork.url;
            newImage.querySelector(".templateImage").alt = artwork.description;
            newImage.querySelector(".title").textContent = artwork.title;
            newImage.querySelector(".year").textContent = artwork.year;
            newImage.querySelector(".size").textContent = artwork.size;
            newImage.querySelector(".medium").textContent = artwork.medium;

            gallery.appendChild(newImage);
            }
        )
    })
    .catch(error => console.log("Error Fetching Images", error))





// fetch('images.json')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(elem =>{
//             const artwork = document.createElement('img');
//             artwork.src = elem.url;

//             gallery2.appendChild(artwork);

//         })
//     })
//     .catch(err => console.log("Error Fetching Images", err))

// window.addEventListener("DOMContentLoaded", () => {
//     async function getData() {
//         const url = "images.json";
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Response status: ${response.status}`);
//             }
//             const result = await response.json();
//             console.log(result);

//             result.forEach((element) => {
//                 let url = element.url;
//                 let description = element.description;
//                 let title = element.title;
//                 let size = element.size;
//                 let medium = element.medium;
//                 let year = element.year;

//                 console.log(url, description, title, size, medium, year);

//                 const newImage = document.createElement("div");
//                 newImage.innerHTML = document.getElementById("template").innerHTML;

//                 newImage.querySelector("#templateImage").src = url;
//                 newImage.querySelector("#templateImage").setAttribute("alt", description);
//                 newImage.querySelector("#title").textContent = title;
//                 newImage.querySelector("#year").textContent = year;
//                 newImage.querySelector("#size").textContent = size;
//                 newImage.querySelector("#medium").textContent = medium;

//                 document.getElementById("gallery").appendChild(newImage);
//             });
//         } catch (error) {
//             console.error(error.message);
//         }
//     }

//     getData();
// });
            // const image = document.createElement('img');
            // image.src = artwork.url;

            // const title = document.createElement('h4');
            // title.innerHTML = artwork.title;

            // const year = document.createElement('p');
            // year.innerHTML = artwork.year;

            // const medium = document.createElement('p');
            // medium.innerHTML = artwork.medium;

            // const size = document.createElement('p');
            // size.innerHTML = artwork.size;

            // gallery.appendChild(image);
            // gallery.appendChild(title);
            // gallery.appendChild(year);
            // gallery.appendChild(medium);
            // gallery.appendChild(size);