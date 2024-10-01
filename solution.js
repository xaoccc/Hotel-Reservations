document.querySelector('#search-back-btn').addEventListener('click', (e) => fillSearchForm(e));

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

function fillSearchForm(e) {
    e.preventDefault();
    changeContent('search-form-content');
    document.querySelector('#check-in').value = reservation.startDate;
    document.querySelector('#check-out').value = reservation.endDate;
    document.querySelector('#people').value = reservation.guestsCount;
}


document.querySelectorAll('.room-type').forEach(room => {
    room.addEventListener("click", (e) => selectRoomType(e))
});

function selectRoomType(e) {
    let myTarget = undefined;
    e.preventDefault;
    if (e.target.querySelector('img') != null) {
        myTarget = e.target;
    } else {
        myTarget = e.target.parentElement;
    }
    document.querySelectorAll('.room-type').forEach(room =>
        room.classList.remove('selected-room'));
    myTarget.classList.add('selected-room');
}

document.querySelector('#search-next-btn').addEventListener('click', (e) => findRoom(e));

function findRoom(e) {
    e.preventDefault();
    const roomInfo = e.target.parentElement.parentElement.querySelector('.selected-room h4').textContent;
    reservation.roomType = roomInfo;
    console.log(reservation);
    changeContent('guest-details-form-content');
}