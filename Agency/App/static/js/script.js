"use strict";

// 1) Input Mask (PHONE)
$(document).ready(function () {
    $(".phone").inputmask("(99) 9999-9999", {
        "onincomplete": function () {
            $(".phone").val("");
            swal("Opsss!", "Incomplete phone. Please review!", "info");
            return false;
        }
    })
});

// 2) EMAIL VALIDATION
function validateEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Frontend Form
function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const file = document.getElementById("file").value;

    if (name == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    } else if (name == name.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("name").value = "";
        swal("Opsss!", "Name field cannot be upper cased!", "info");
        return false;
    } else if (name.split(" ").length < 2) {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "You must put the full name!", "error");
        return false;
    } else if (age == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Age field cannot be empty!", "error");
        return false;
    } else if ((age < 18) || (age > 50)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("age").value = "";
        swal("Opsss!", "Age must be between 18 and 50 years old!", "info");
        return false;
    } else if (email == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Email field cannot be empty!", "error");
        return false;
    } else if (!(validateEmail(email))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("email").value = "";
        swal("Opsss!", "Put a valid email address!", "error");
        return false;
    } else if (phone == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Phone field cannot be empty!", "error");
        return false;
    } else if (address == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Address field cannot be empty!", "error");
        return false;
    } else if (experience == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Experience field cannot be empty!", "error");
        return false;
    } else if (skills == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Skills field cannot be empty!", "error");
        return false;
    } else if (file == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "File field cannot be empty!", "error");
        return false;
    } else {
        return true;
    }
}

// EMAIL VALIDATION
function validateEmail(email2) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email2);
}

// Backend Form
function validateForm2() {
    const name = document.getElementById("name2").value;
    const age = document.getElementById("age2").value;
    const email = document.getElementById("email2").value;
    const phone = document.getElementById("phone2").value;
    const address = document.getElementById("address2").value;
    const experience = document.getElementById("experience2").value;
    const skills = document.getElementById("skills2").value;
    const file = document.getElementById("file2").value;

    if (name == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    } else if (name == name.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("name").value = "";
        swal("Opsss!", "Name field cannot be upper cased!", "info");
        return false;
    } else if (name.split(" ").length < 2) {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "You must put the full name!", "error");
        return false;
    } else if (age == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Age field cannot be empty!", "error");
        return false;
    } else if ((age < 18) || (age > 50)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("age").value = "";
        swal("Opsss!", "Age must be between 18 and 50 years old!", "info");
        return false;
    } else if (email == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Email field cannot be empty!", "error");
        return false;
    } else if (!(validateEmail(email))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("email").value = "";
        swal("Opsss!", "Put a valid email address!", "error");
        return false;
    } else if (phone == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Phone field cannot be empty!", "error");
        return false;
    } else if (address == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Address field cannot be empty!", "error");
        return false;
    } else if (experience == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Experience field cannot be empty!", "error");
        return false;
    } else if (skills == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Skills field cannot be empty!", "error");
        return false;
    } else if (file == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "File field cannot be empty!", "error");
        return false;
    } else {
        return true;
    }
}

// EMAIL VALIDATION
function validateEmail(email3) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email3);
}

// Full Stack Form
function validateForm3() {
    const name = document.getElementById("name3").value;
    const age = document.getElementById("age3").value;
    const email = document.getElementById("email3").value;
    const phone = document.getElementById("phone3").value;
    const address = document.getElementById("address3").value;
    const experience = document.getElementById("experience3").value;
    const skills = document.getElementById("skills3").value;
    const file = document.getElementById("file3").value;

    if (name == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    } else if (name == name.toUpperCase()) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("name").value = "";
        swal("Opsss!", "Name field cannot be upper cased!", "info");
        return false;
    } else if (name.split(" ").length < 2) {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "You must put the full name!", "error");
        return false;
    } else if (age == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Age field cannot be empty!", "error");
        return false;
    } else if ((age < 18) || (age > 50)) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("age").value = "";
        swal("Opsss!", "Age must be between 18 and 50 years old!", "info");
        return false;
    } else if (email == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Email field cannot be empty!", "error");
        return false;
    } else if (!(validateEmail(email))) {
        document.getElementById("bg-spinner").style.display = "none";
        document.getElementById("email").value = "";
        swal("Opsss!", "Put a valid email address!", "error");
        return false;
    } else if (phone == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Phone field cannot be empty!", "error");
        return false;
    } else if (address == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Address field cannot be empty!", "error");
        return false;
    } else if (experience == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Experience field cannot be empty!", "error");
        return false;
    } else if (skills == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "Skills field cannot be empty!", "error");
        return false;
    } else if (file == "") {
        document.getElementById("bg-spinner").style.display = "none";
        swal("Opsss!", "File field cannot be empty!", "error");
        return false;
    } else {
        return true;
    }
}

// 3) Maximum allowed upload size
$(document).ready(function () {
    $("#file, #file2, #file3").bind("change", function () {
        const a = (this.files[0].size);
        if (a > 2 * 1048576) {
            swal("Attention!", "Maximum Allowed size is 2mb.", "info");
            this.value = "";
        }
    });
});

// 4) Only letters inside NAME input
$(".name").keyup(function () {
    if (!/^[a-zA-Z _]*$/.test(this.value)) {
        this.value = this.value.split(/[^a-zA-Z_]/).join("");
    }
});

// 5) Prevent more than 2 white spaces inside the NAME input
// $(".name").on("keydown", function () {
//     const $this = $(this);
//     $(this).val($this.val().replace(/(\s{2,})|[^a-zA-Z0-9_']/g, ' ').replace(/^\s*/, ''))
// });

// 6) Prevent starting with space in all inputs (including textarea)
$("input[type='text'], textarea").on("keypress", function (e) {
    if (e.which == 32 && !this.value.length) {
        e.preventDefault();
    }
});

// 7) Only numbers inside AGE input
$(".age").keyup(function () {
    if (!/^[0-9]*$/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/).join("");
    }
});

// 8) Prevent starting by zero in AGE input
$(".age").on("input", function () {
    if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, "")
    }
});

// 9) Script to lowercase input email
$(document).ready(function () {
    $(".email").keyup(function () {
        this.value = this.value.toLowerCase();
    });
});