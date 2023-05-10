const bookingData = {
  bookings:
[{ 
  date: "2022/04/22",
  id: "5fwrgu4i7k55hl6sz",
  roomNumber: 1,
  userID: 9
},
{ 
  date: "2022/04/20",
  id: "6fwfdu3i7k55hl6vv",
  roomNumber: 6,
  userID: 4
},
{ 
  date: "2023/03/22",
  id: "1gvvbn0i7k55hl6hh",
  roomNumber: 10,
  userID: 6
}]
}

const roomData = [
{ 
  number: 1, 
  roomType: 'residential suite', 
  bidet: true, 
  bedSize: 'queen', 
  numBeds: 1
},
{
  number: 2, 
  roomType: 'suite', 
  bidet: false, 
  bedSize: 'full', 
  numBeds: 2
},
{
  number: 3, 
  roomType: 'single room', 
  bidet: false, 
  bedSize: 'king', 
  numBeds: 1
},
{
  number: 4, 
  roomType: 'single room', 
  bidet: false, 
  bedSize: 'queen', numBeds: 1
},
{
  number: 5, 
  roomType: 'single room', 
  bidet: true, 
  bedSize: 'queen', 
  numBeds: 2
},
{
  number: 6,
  roomType: 'junior suite',
  bidet: true,
  bedSize: 'queen',
  numBeds: 1
},
{
  number: 7, 
  roomType: 'single room', 
  bidet: false, 
  bedSize: 'queen', 
  numBeds: 2
},
{
  number: 8, 
  roomType: 'junior suite', 
  bidet: false, 
  bedSize: 'king', 
  numBeds: 1
},
{
  number: 9, 
  roomType: 'single room', 
  bidet: true, 
  bedSize: 'queen', 
  numBeds: 1
},
{
  number: 10, 
  roomType: 'suite', 
  bidet: false, 
  bedSize: 'twin', 
  numBeds: 1
}
]

export {bookingData, roomData}