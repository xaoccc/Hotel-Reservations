let reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
};

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if (document.querySelector(`.${className}`) != null) {
        document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));

function cleanData(e) {
    changeContent('search-form-content');
}

// Adding the event listener for the search form button
document.querySelector('#search-form-button').addEventListener('click', (e) => searchFormData(e));

function searchFormData(e) {
    e.preventDefault();  // Prevent the default form submission
    const data = e.target.parentElement;  // Get the form's parent element
    const checkIn = data.querySelector('#check-in').value;  // Get the check-in value
    const checkOut = data.querySelector('#check-out').value;  // Get the check-out value
    const people = data.querySelector('#people').value;  // Get the number of people value

    // Validate that the fields are filled and that check-in is before or equal to check-out
    if (checkIn !== '' && checkOut !== '' && people !== '' &&
        new Date(checkIn) <= new Date(checkOut)) {
        reservation.startDate = checkIn;
        reservation.endDate = checkOut;
        reservation.guestsCount = people;

        // Log the reservation object to the console
        console.log(reservation);

        // Change the content to the search result form (assuming you have this form's class in HTML)
        changeContent('search-result-form-content');
    }
}
