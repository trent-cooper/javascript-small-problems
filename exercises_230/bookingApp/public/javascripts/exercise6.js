function cancelSchedule(id) {
  let request = new XMLHttpRequest();
  request.open('DELETE', `/api/schedules/${id}`);
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 204) {
      console.log('Schedule successfuly deleted.');
    } else {
      console.log(request.responseText);
    }
  });
}

function cancelBooking(id) {
  let request = new XMLHttpRequest();
  request.open('PUT', `/api/bookings/${id}`);
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 204) {
      console.log('Booking successfuly deleted.');
    } else {
      console.log(request.responseText);
    }
  });
}