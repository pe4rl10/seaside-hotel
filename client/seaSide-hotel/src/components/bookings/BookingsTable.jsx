import { isWithinInterval } from 'date-fns';
import React, { useEffect, useState } from 'react'
import DateSlider from '../common/DateSlider';
import moment from 'moment';

const parseDateArray = (dateArray) => {
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); // months are 0-indexed in JS Date
}

const BookingsTable = ({ bookingInfo, handleBookingCancellation}) => {
    const [ filteredBookings, setFilteredBookings ] = useState(bookingInfo);
	console.log(bookingInfo)

    const filterBookings = (startDate, endDate) => {
        let filtered = bookingInfo;
        if (startDate && endDate) {
            filtered = bookingInfo.filter((booking) => {
                const bookingStartDate = parseDateArray(booking.checkInDate);
                const bookingEndDate = parseDateArray(booking.checkOutDate);

                return isWithinInterval(bookingStartDate, { start: startDate, end: endDate }) || 
                       isWithinInterval(bookingEndDate, { start: startDate, end: endDate }) || 
                       (bookingStartDate <= startDate && bookingEndDate >= endDate);
            });
        }
        setFilteredBookings(filtered);
    }

    useEffect(() => {
        setFilteredBookings(bookingInfo);
    }, [bookingInfo]);

    return (
        <section className='p-4'>
            <DateSlider onDateChange={filterBookings} onFilterChange={filterBookings}/>
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr>
                        <th>S/N</th>
						<th>Booking ID</th>
						<th>Room ID</th>
						<th>Room Type</th>
						<th>Check-In Date</th>
						<th>Check-Out Date</th>
						<th>Guest Name</th>
						<th>Guest Email</th>
						<th>Adults</th>
						<th>Children</th>
						<th>Total Guest</th>
						<th>Confirmation Code</th>
						<th colSpan={2}>Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
					{filteredBookings.map((booking, index) => (
						<tr key={booking.bookingId}>
							<td>{index + 1}</td>
							<td>{booking.bookingId}</td>
							<td>{booking.room.id}</td>
							<td>{booking.room.roomType}</td>
							<td>{moment(booking.checkInDate).subtract(1, "month").format("DD/MM/YYYY")}</td>
							<td>{moment(booking.checkOutDate).subtract(1, "month").format("DD/MM/YYYY")}</td>
							<td>{booking.guestFullName}</td>
							<td>{booking.guestEmail}</td>
							<td>{booking.numOfAdults}</td>
							<td>{booking.numOfChildren}</td>
							<td>{booking.totalNumOfGuest}</td>
							<td>{booking.bookingConfirmationCode}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleBookingCancellation(booking.id)}>
									Cancel
								</button>
							</td>
						</tr>
					))}
				</tbody>
            </table>
            {filteredBookings.length === 0 && <p>No Booking Found for the selected dates.</p>}
        </section>

    )
}

export default BookingsTable