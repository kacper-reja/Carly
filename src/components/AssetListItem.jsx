import React from 'react'

export default function AssetListItem({
  handleManage,
  id,
  name,
  model,
  location,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{model}</td>
      <td>{location}</td>
      <td>
        <button onClick={handleManage} className="btn">
          Manage
        </button>
      </td>
    </tr>
  )
}
