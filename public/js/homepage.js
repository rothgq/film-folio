// var data = {
//     pageTitle: "Film Folio",
//     headerTitle: "Film Folio",
//     navLinks: [
//         { link: "#", label: "Home" },
//         { link: "#", label: "About Us" },
//         { link: "#", label: "Sign In" }
//     ],
//     genreButtons: [
//         { name: "Action", link: "Action.html" },
//         { name: "Comedy", link: "Comedy.html" },
//         { name: "Drama", link: "Drama.html" },
//         { name: "Sci-Fi", link: "Sci-Fi.html" },
//         { name: "Thriller", link: "Thriller.html" },
//         { name: "Romance", link: "Romance.html" }
//     ]
// };

// var source = document.getElementById("home-template").innerHTML;
// var template = Handlebars.compile(source);
// var html = template(data);

// var container = document.createElement('div');
// container.innerHTML = html;
// document.body.appendChild(container);
document.addEventListener('DOMContentLoaded', function() {
    gsap.from(".genre-button", { duration: 1.5, opacity: 0, y: () => Math.random() * 600 - 400, stagger: 0.25 })
});