document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('productChart').getContext('2d');
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

    // Fungsi untuk membuat chart
    function createMonthlyChart(labels, data) {
        new Chart(ctx, {
            type: 'line', // Anda bisa mengganti dengan 'bar', 'pie', dll.
            data: {
                labels: labels, // Nama bulan
                datasets: [{
                    label: 'Total Produk Terjual',
                    data: data, // Total produk per bulan
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: `Total Produk Terjual per Bulan ${currentYear}`
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Fetch data dari API
    fetch(`/api/monthly-data?tahun=${currentYear}`) // Ganti '2024' dengan tahun dinamis
        .then(response => response.json())
        .then(data => {
            // Proses data API
            const labels = data.map(item => new Date(0, item.bulan - 1).toLocaleString('default', { month: 'long' }));
            const totalProducts = data.map(item => item.total_produk);

            // Buat chart dengan data API
            createMonthlyChart(labels, totalProducts);
        })
        .catch(error => console.error('Error fetching monthly data:', error));
});