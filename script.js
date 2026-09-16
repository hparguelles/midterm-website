
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("bi-moon-fill");

            icon.classList.add("bi-sun-fill");

            localStorage.setItem("darkMode", "enabled");

        } else {

            icon.classList.remove("bi-sun-fill");

            icon.classList.add("bi-moon-fill");

            localStorage.setItem("darkMode", "disabled");

        }

    });

}



if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    const icon = document.querySelector("#darkModeBtn i");

    if (icon) {

        icon.classList.remove("bi-moon-fill");

        icon.classList.add("bi-sun-fill");

    }

}



const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



const mobileLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbar =
    document.querySelector(".navbar-collapse");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992 && navbar) {

            const collapse =
                bootstrap.Collapse.getInstance(navbar);

            if (collapse) {

                collapse.hide();

            }

        }

    });

});



document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("workSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const workItems = document.querySelectorAll(".work-item");
    const workSections = document.querySelectorAll(".work-section");
    const noResults = document.getElementById("noResults");

    let currentFilter = "all";


    function filterWorks() {

        const searchValue =
            searchInput.value.toLowerCase().trim();

        let totalVisible = 0;


        workItems.forEach(function (item) {

            const category =
                item.dataset.category.toLowerCase();

            const title =
                item.dataset.title.toLowerCase();

            const text =
                item.textContent.toLowerCase();


            const categoryMatch =
                currentFilter === "all" ||
                category === currentFilter;


            const searchMatch =
                searchValue === "" ||
                title.includes(searchValue) ||
                text.includes(searchValue);


            if (categoryMatch && searchMatch) {

                item.classList.remove("is-hidden");

                totalVisible++;

            } else {

                item.classList.add("is-hidden");

            }

        });



        workSections.forEach(function (section) {

            const visibleItems =
                section.querySelectorAll(
                    ".work-item:not(.is-hidden)"
                );


            if (visibleItems.length === 0) {

                section.classList.add("is-hidden");

            } else {

                section.classList.remove("is-hidden");

            }

        });


        if (totalVisible === 0) {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }



    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            currentFilter = this.dataset.filter;

            filterWorks();

        });

    });

    searchInput.addEventListener("input", function () {

        filterWorks();

    });


    filterWorks();

});



