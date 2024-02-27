import React from 'react';

const Table = ({ users, handleEdit, handleDelete }) => {


  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id/Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Role</th>

            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user, id) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.mobile}</td>
                <td>{user.role}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="button muted-button"
                  >
                    Suspend
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
