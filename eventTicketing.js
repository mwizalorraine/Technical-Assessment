//Question 1.a
function findTicketsByEvent(tickets, eventName) {
  return tickets.filter(ticket => ticket.eventName === eventName).map(ticket => ticket.ticketID);
}
const tickets = [
  { ticketID: 1, eventName: "Concert", seatNumber: "A1", price: 50 },
  { ticketID: 2, eventName: "Concert", seatNumber: "A2", price: 60 },
  { ticketID: 3, eventName: "Theater", seatNumber: "B1", price: 70 }
];
console.log(findTicketsByEvent(tickets, "Concert"));


//Question 1.b
function updateSeatNumber(tickets, ticketID, newSeatNumber) {
  let found = false;
  let updatedTickets = tickets.map(function (ticket) {
    if (ticket.ticketID === ticketID) {
      ticket.seatNumber = newSeatNumber;
      found = true;
    }
    return tickets.map(ticket => ticket.ticketID === ticketID ? { ...ticket, seatNumber: newSeatNumber } : ticket);
  });
  return found ? updatedTickets : "Ticket not found";
}
console.log(updateSeatNumber(tickets, 2, "A5"));


//Question 1.c
function applyBulkDiscount(tickets, discountPercentage) {
  return tickets.map(ticket => ({ ...ticket, price: ticket.price * (1 - discountPercentage / 100) }));
}
console.log(applyBulkDiscount(tickets, 10));


//Question 1.d
function getTotalRevenue(tickets) {
  return tickets.reduce((total, ticket) => total + ticket.price, 0);
}
console.log(getTotalRevenue(tickets));


//Question 1.e >>>Answer: 
// - Use of map and filter method instead of array method
// - 