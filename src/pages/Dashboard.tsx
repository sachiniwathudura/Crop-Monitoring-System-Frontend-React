// @ts-ignore
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../pages/css/Dashboard.css"


export function Dashboard() {
    // Create refs for the canvas elements
    const lineChartRef = useRef(null);
    const doughnutChartRef = useRef(null);
    const lineChartInstance = useRef(null);
    const doughnutChartInstance = useRef(null);

    useEffect(() => {
        // Clean up existing charts if they exist
        if (lineChartInstance.current) {
            lineChartInstance.current.destroy();
        }
        if (doughnutChartInstance.current) {
            doughnutChartInstance.current.destroy();
        }

        // Initialize Line Chart
        const lineChartCtx = lineChartRef.current.getContext("2d");
        lineChartInstance.current = new Chart(lineChartCtx, {
            type: "line",
            data: {
                labels: ["July", "Aug", "Sep", "Oct", "Nov", "Dec"], // X-axis labels
                datasets: [
                    {
                        label: "Growth Speed",
                        data: [3, 6, 8, 10, 15, 20], // Example data
                        borderColor: "#15803D", // Line color
                        backgroundColor: "rgba(21, 128, 61, 0.3)", // Fill under line
                        tension: 0.4, // Smooth line
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
            },
        });

        // // Initialize Doughnut Chart
        // const doughnutCtx = doughnutChartRef.current.getContext("2d");
        // doughnutChartInstance.current = new Chart(doughnutCtx, {
        //     type: "doughnut",
        //     data: {
        //         labels: ["Active Users", "Inactive Users", "Guests"],
        //         datasets: [
        //             {
        //                 label: "System Data",
        //                 data: [50, 30, 20], // Example data
        //                 backgroundColor: ["#15803D", "#34D399", "#BBF7D0"], // Segment colors
        //             },
        //         ],
        //     },
        //     options: {
        //         responsive: true,
        //         plugins: {
        //             legend: {
        //                 position: 'right', // Move labels to the right side
        //                 labels: {
        //                     boxWidth: 20, // Adjust the size of the color box
        //                     padding: 15, // Add spacing between legend items
        //                     font: {
        //                         size: 14, // Set font size for labels
        //                     },
        //                 },
        //             },
        //             tooltip: {
        //                 enabled: true,
        //             },
        //         },
        //     },
        // });

        // Initialize Doughnut Chart
        const doughnutCtx = doughnutChartRef.current.getContext("2d");

// Custom plugin to draw text in the center
        const centerTextPlugin = {
            id: 'centerText',
            beforeDraw: (chart) => {
                const { ctx, chartArea } = chart;
                const { width, height, left, top } = chartArea;

                ctx.save();
                ctx.font = 'bold 10px Arial'; // Set the font size and type
                ctx.fillStyle = '#000'; // Set the text color
                ctx.textAlign = 'center'; // Center the text horizontally

                ctx.textBaseline = 'middle'; // Center the text vertically

                const totalUsers = 100; // Replace with dynamic calculation if needed
                // ctx.fillText(`Total Users`, left + width / 2, top + height / 2 - 10); // Adjust the position
                // ctx.fillText(`${totalUsers}`, left + width / 2, top + height / 2 + 10); // Add another line if needed
                // ctx.restore();
                // Calculate center position
                const centerX = left + width / 2; // Center x-coordinate
                const centerY = top + height / 2; // Center y-coordinate
                ctx.fillText(`Total Users`, centerX, centerY - 10); // Adjust the position
                ctx.fillText(`${totalUsers}`, centerX, centerY + 10); // Add another line if needed
                ctx.restore();
            },
        };

        doughnutChartInstance.current = new Chart(doughnutCtx, {
            type: "doughnut",
            data: {
                labels: ["Active Users", "Inactive Users", "Guests"],
                datasets: [
                    {
                        label: "System Data",
                        data: [50, 30, 20], // Example data
                        backgroundColor: ["#15803D", "#34D399", "#BBF7D0"], // Segment colors
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right', // Move labels to the right side
                        labels: {
                            boxWidth: 20, // Adjust the size of the color box
                            padding: 15, // Add spacing between legend items
                            font: {
                                size: 14, // Set font size for labels
                            },
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
            plugins: [centerTextPlugin], // Add the custom plugin here
        });


        // Cleanup on unmount
        return () => {
            if (lineChartInstance.current) {
                lineChartInstance.current.destroy();
            }
            if (doughnutChartInstance.current) {
                doughnutChartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="topbar">
                    <div className="logo">
                        <h1> Green Shadow (Pvt) Ltd </h1>
                    </div>
                    <div className="searchbar">
                        <input
                            type="text"
                            className="form-input w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            placeholder="Search"
                        />
                        <label htmlFor="search"> <i className="fas fa-search search-icon"></i></label>
                    </div>
                    <i className="fas fa-bell notification-icon"></i>
                    <div className="user">
                        <img src="/src/assets/images/icons8-user-50.png" alt="profile pic" />
                    </div>
                </div>
                {/* Main content */}
                <div className="main">
                    <div className="cards">
                        <div className="card">
                            <div className="card-content">
                                <div className="number">10+</div>
                                <div className="card-name">Vehicles</div>
                            </div>
                            <div className="icon-box">
                                <i className="fas fa-truck vehicle-icon"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="number">100</div>
                                <div className="card-name">Employee</div>
                            </div>
                            <div className="icon-box">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <div className="number">50+</div>
                                <div className="card-name">Crops</div>
                            </div>
                            <div className="icon-box">
                                <i className="fas fa-seedling field-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="chart">
                            <h2>Growing speed (past 6 months)</h2>
                            <canvas ref={lineChartRef} id="lineChart"></canvas>
                        </div>
                        <div className="chart" id="doughnut-chart">
                            <h2>System Data</h2>
                            <canvas ref={doughnutChartRef} id="doughnut" className="chart-doughnut"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

