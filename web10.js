const adminCredentials = {
    username: "admin",
    password: "admin123"
};

document.getElementById('adminLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById('adminLoginForm').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
    } else {
        alert("Неверный логин или пароль");
    }
});

function manageUsers() {
    alert("Управление пользователями");
}

function viewStatistics() {
    alert("Просмотр статистики");
}

const patientCredentials = {
    username: "patient",
    password: "patient123"
};

document.getElementById('patientLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('patientUsername').value;
    const password = document.getElementById('patientPassword').value;

    if (username === patientCredentials.username && password === patientCredentials.password) {
        document.getElementById('patientLoginForm').classList.add('hidden');
        document.getElementById('patientDashboard').classList.remove('hidden');
        document.getElementById('patientName').textContent = username;
    } else {
        alert("Неверный логин или пароль");
    }
});

function viewResults() {
    alert("Ваши результаты анализов: Все в норме.");
}

function bookAppointment() {
    const date = prompt("Введите дату для записи (например, 2023-10-15):");
    if (date) {
        alert(`Вы записаны на ${date}`);
    }
}