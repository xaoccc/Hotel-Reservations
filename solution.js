let reservation = {
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
};
const searchContent = document.querySelector('.search-form-content');
const thankYouContent = document.querySelector('.thank-you-content');
const searchFormButton = document.querySelector('#search-form-button');
const newReservationButton = document.querySelector('#new-reservation');

// Adding the event listener for the search form button
searchFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = document.querySelector('.search-form-content form');
    const checkIn = data.querySelector('#check-in').value;  // Get the check-in value
    const checkOut = data.querySelector('#check-out').value;  // Get the check-out value
    const people = data.querySelector('#people').value;  // Get the number of people value

    if (checkIn && checkOut && people &&
        new Date(checkIn) <= new Date(checkOut)) {
        reservation.startDate = checkIn;
        reservation.endDate = checkOut;
        reservation.guestsCount = people;
        searchContent.style.display = 'none';
        thankYouContent.style.display = 'block';
    }
    
});

newReservationButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchContent.style.display = 'block';
    thankYouContent.style.display = 'none';
    // Reset the reservation object and the form fields
    document.querySelector('#check-in').value = '';
    document.querySelector('#check-out').value = '';
    document.querySelector('#people').value = '';
    
    reservation = {
        startDate: null,
        endDate: null,
        guestsCount: 0,
        roomType: null,
        name: null,
        phone: null,
        email: null
    };
});
