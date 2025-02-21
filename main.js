document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("casesChart").getContext("2d");
    var casesChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
            datasets: [{
                label: "Cases",
                data: [12711, 8027, 12319, 14921, 17227, 17551],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
                pointRadius: 5,
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000, // Duration of the animation in milliseconds
                easing: 'easeInOutQuad' // Easing function for the animation
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Year"
                    },
                    ticks: {
                        callback: function(value, index, values) {
                            return ["2019", "2020", "2021", "2022", "2023", "2024"][index];
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Number of Cases"
                    },
                    beginAtZero: false
                }
            }
        }
    });
});

function calculate() {
    let C0 = parseFloat(document.getElementById('C0').value);
    let R0 = parseFloat(document.getElementById('R0').value);
    let alpha = parseFloat(document.getElementById('alpha').value);
    let beta = parseFloat(document.getElementById('beta').value);
    let t = parseFloat(document.getElementById('t').value);
    
    let Ct = C0 + (R0 / alpha) * Math.log(1 + beta * Math.exp(-alpha * t));
    document.getElementById('result').innerText = Ct.toFixed(2);
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleAboutHIV() {
    var aboutHIV = document.getElementById("aboutHIV");
    if (aboutHIV.style.display === "block") {
        aboutHIV.style.display = "none";
    } else {
        aboutHIV.style.display = "block";
    }
}

function toggleCasesPerYear() {
    var casesContainer = document.getElementById("casesContainer");
    if (casesContainer.style.display === "block") {
        casesContainer.style.display = "none";
    } else {
        casesContainer.style.display = "block";
    }
}

function showSection(section) {
    var sections = document.querySelectorAll("main > div");
    sections.forEach(function(sec) {
        sec.style.display = "none";
    });
    document.getElementById(section).style.display = "block";
}

// Close menu after clicking a link (optional)
var menu = document.getElementById("menu");
menu.style.display = "none";


document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        var menu = document.getElementById("menu");
        if (menu) {
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        }
    }

    function showCasesPerYear() {
        var casesContainer = document.getElementById("casesContainer");
        if (casesContainer) {
            casesContainer.style.display = "block"; // Show the container
            drawCasesChart();
        }
    }

    function drawCasesChart() {
        var ctx = document.getElementById("casesChart").getContext("2d");
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                    datasets: [{
                        label: "Cases",
                        data: [12778, 8058, 12348, 14118, 17265, 19000],
                        backgroundColor: "rgba(192, 171, 75, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }

    window.toggleMenu = toggleMenu;
    window.showCasesPerYear = showCasesPerYear;
});document.addEventListener("DOMContentLoaded", function () {
            let casesChart = null; // Store chart instance

            function toggleMenu() {
                let menu = document.getElementById("menu");
                menu.style.display = menu.style.display === "block" ? "none" : "block";
            }

            function toggleHIVCases() {
                let casesContainer = document.getElementById("casesContainer");

                // Toggle visibility
                if (casesContainer.style.display === "none") {
                    casesContainer.style.display = "block";
                    drawCasesChart();
                } else {
                    casesContainer.style.display = "none";
                }
            }

            function drawCasesChart() {
                let ctx = document.getElementById("casesChart").getContext("2d");

                // Destroy previous chart instance if it exists
                if (casesChart !== null) {
                    casesChart.destroy();
                }

                // Create new chart
                casesChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                        datasets: [{
                            label: "HIV Cases",
                            data: [12778, 8058, 12348, 14118, 17265, 19000],
                            backgroundColor: "rgba(75, 192, 192, 0.6)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }

            // Make functions globally accessible
            window.toggleMenu = toggleMenu;
            window.toggleHIVCases = toggleHIVCases;
        });


        function toggleMenu() {
            let menu = document.getElementById("menu");
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        }

        function toggleHIVStages() {
            let stagesContainer = document.getElementById("stagesContainer");
            // Add your logic here
        }

