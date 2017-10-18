(function() {
    "use strict";
    let $ = function(id) {
        return document.getElementById(id);
    };
    let qs = function(q) {
        return document.querySelector(q);
    }
    let qsa = function(qa) {
        return document.querySelectorAll(qa);
    }

    window.onload = function() {
        initDesc();
    };

    // Initializes the descriptions for the course cards
    function initDesc() {
        let descPaA = qsa("#courses .card .col");
        let bar = qsa("hr");
        for(let i = 0; i < descPaA.length; i++) {
            if(i == 0) {
                bar[i].onclick = loadDesc;// loadDesc(desc, "Introduction to client-side web development including markup, programming, protocols, libraries, frameworks, and techniques for creating effective, usable, dynamic, and responsive applications that meet user needs. Includes an introduction to web development roles within organizations, content management systems, and other tools to build and manage websites and applications.");
            } else if(i == 1) {
                bar[i].onclick = loadDesc; // loadDesc(desc, "Introduction to relational database management systems, focused on relational theory and the application of conceptual, logical, and physical database modeling. Key topics include the relational model, SQL, entity-relationship modeling, three-tier architectures, implementation of database applications, and related topics in information systems.");
            } else if(i == 2) {
                bar[i].onclick = loadDesc; //loadDesc(desc, "Covers languages, tools, and techniques for developing interactive and dynamic web pages. Topics include page styling, design, and layout; client and server side scripting; web security; and interacting with data sources such as databases.");
            } else if(i == 3) {
                bar[i].onclick = loadDesc; // loadDesc(desc, "Fundamental algorithms and data structures for implementation. Techniques for solving problems by programming. Linked lists, stacks, queues, directed graphs. Trees: representations, traversals. Searching (hashing, binary search trees, multiway trees). Garbage collection, memory management. Internal and external sorting. Intended for non-majors.");
            } else if(i == 4) {
                bar[i].onclick = loadDesc; // loadDesc(desc, "Basic programming-in-the-small abilities and concepts including procedural programming (methods, parameters, return, values), basic control structures (sequence, if/else, for loop, while loop), file processing, arrays, and an introduction to defining objects.");
            } else if(i == 5) {
                bar[i].onclick = loadDesc; // loadDesc(desc, "Concepts of data abstraction and encapsulation including stacks, queues, linked lists, binary trees, recursion, instruction to complexity and use of predefined collection classes.");
            } else if(i == 6) {
                bar[i].onclick = loadDesc; // loadDesc(desc, "Introduces fundamental tools and technologies necessary to transform data into knowledge. Covers the full information lifecycle, including the collection, storage, analysis and visualization of data. Core competencies underlying this process, including functional programming, use of databases, data wrangling, version control, and command line proficiency, are acquired through real-world data-driven challenges.");
            }
        }
    }

    // Loads/unloads the descriptions for the course cards
    function loadDesc() {
        let desc = this.nextSibling.nextSibling;
        let cTitle = this.previousSibling.previousSibling;
        if(desc.style.color != "black") {
            if(cTitle.innerHTML == "INFO 343") {
                desc.innerHTML = "Introduction to client-side web development including markup, programming, protocols, libraries, frameworks, and techniques for creating effective, usable, dynamic, and responsive applications that meet user needs. Includes an introduction to web development roles within organizations, content management systems, and other tools to build and manage websites and applications.";
            } else if(cTitle.innerHTML == "INFO 340") {
                desc.innerHTML = "Introduction to relational database management systems, focused on relational theory and the application of conceptual, logical, and physical database modeling. Key topics include the relational model, SQL, entity-relationship modeling, three-tier architectures, implementation of database applications, and related topics in information systems.";
            } else if(cTitle.innerHTML == "CSE 154") {
                desc.innerHTML = "Covers languages, tools, and techniques for developing interactive and dynamic web pages. Topics include page styling, design, and layout; client and server side scripting; web security; and interacting with data sources such as databases.";
            } else if(cTitle.innerHTML == "CSE 373") {
                desc.innerHTML = "Fundamental algorithms and data structures for implementation. Techniques for solving problems by programming. Linked lists, stacks, queues, directed graphs. Trees: representations, traversals. Searching (hashing, binary search trees, multiway trees). Garbage collection, memory management. Internal and external sorting.";
            } else if(cTitle.innerHTML == "CSE 142") {
                desc.innerHTML = "Basic programming-in-the-small abilities and concepts including procedural programming (methods, parameters, return, values), basic control structures (sequence, if/else, for loop, while loop), file processing, arrays, and an introduction to defining objects.";
            } else if(cTitle.innerHTML == "CSE 143") {
                desc.innerHTML = "Concepts of data abstraction and encapsulation including stacks, queues, linked lists, binary trees, recursion, instruction to complexity and use of predefined collection classes.";
            } else if(cTitle.innerHTML == "INFO 201") {
                desc.innerHTML = "Introduces fundamental tools and technologies necessary to transform data into knowledge. Covers the full information lifecycle, including the collection, storage, analysis and visualization of data. Core competencies underlying this process, including functional programming, use of databases, data wrangling, version control, and command line proficiency, are acquired through real-world data-driven challenges.";
            }
            desc.style.color = "black";
        } else {
            desc.innerHTML = "Click above for description";
            desc.style.color = "grey";
        }
    }

}) ();