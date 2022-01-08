import React from 'react'
import {cancelBooking} from "../api/booking";
import {toast} from "react-toastify";
export default function BookingListItem({
  id,
  firstName,
  lastName,
  bookingDate,
  name,
  model,
  location,
    carId,
    booklyId
}) {
  const handleBookingManage = async () => {

          let data = {
              carId:carId ,
              status: 2,
              orderId:id,
              booklyId ,
          }
      try{
          await cancelBooking(data)
          toast.error('Booking cancel failed', {
              position: 'top-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          })
      }
      catch(err){
console.log(err)
      }

  }
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{bookingDate}</td>
      <td>{name}</td>
      <td>{model}</td>
      <td>{location}</td>
      <td>
        <button
          className="btn"
          onClick={() => {
            handleBookingManage()
          }}
        >
          Cancel
        </button>
      </td>
    </tr>
  )
}
