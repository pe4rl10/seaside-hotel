package com.example.seasidehotel.service;

import com.example.seasidehotel.model.BookedRoom;

import java.util.List;
import java.util.Optional;

public interface IBookingService {
    List<BookedRoom> getAllBookings();

    void cancelBooking(Long bookingId);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    BookedRoom findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> getBookingsByUserEmail(String email);
}
