async function fetchCarsData() {

    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const carsContainer = document.getElementById('cars-container');

    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    carsContainer.innerHTML = '';
 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();

        loadingElement.style.display = 'none';

        const carsData = transformToCarsData(data);
        displayCars(carsData);

    } catch (error) {
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
        errorElement.textContent = '❌ No se pudieron cargar los datos. Intenta más tarde.';
        console.error('Error al cargar datos:', error);
    }
}

function transformToCarsData(users) {
    const bmwModels = ['M8', 'M5', 'M4', 'M3', 'M2', 'X5 M', 'X6 M', 'M850i', 'M440i'];
    const colors = ['Negro', 'Blanco', 'Azul', 'Gris', 'Rojo'];

    return users.slice(0, 9).map((user, index) => {
        return {
            make: 'BMW',
            model: bmwModels[index],
            year: 2020 + index,
            price: 90000 + (index * 15000),
            color: colors[index % colors.length],
            mileage: 5000 + (index * 1000),
            id: user.id,
            owner: user.name
        };
    });
}

function displayCars(cars) {
    const carsContainer = document.getElementById('cars-container');

    if (!cars || cars.length === 0) {
        carsContainer.innerHTML = '<p style="text-align: center; color: #999;">No hay datos disponibles</p>';
        return;
    }

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        carCard.innerHTML = `
            <h3>${car.make} ${car.model}</h3>
            <div class="car-info">
                <strong>Año:</strong> ${car.year}
            </div>
            <div class="car-info">
                <strong>Precio:</strong> $${car.price.toLocaleString()}
            </div>
            <div class="car-info">
                <strong>Color:</strong> ${car.color}
            </div>
            <div class="car-info">
                <strong>Kilometraje:</strong> ${car.mileage.toLocaleString()} km
            </div>
        `;

        carsContainer.appendChild(carCard);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    fetchCarsData();
});
