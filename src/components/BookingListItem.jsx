import React from 'react'

export default function BookingListItem({
  id,
  firstName,
  lastName,
  bookingDate,
  name,
  model,
  location,
}) {
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
        <button>Manage</button>
      </td>
    </tr>
  )
}
