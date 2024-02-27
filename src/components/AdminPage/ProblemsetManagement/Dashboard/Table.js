import React from 'react';

const Table = ({ problemSets, handleEdit, handleDelete }) => {


  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Name</th>

            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {problemSets ? (
            problemSets.map((problemSet, id) => (
              <tr key={problemSet.id}>
                <td>{problemSet.source}</td>
                <td>{problemSet.id}</td>
                <td>{problemSet.rating}</td>
                <td>{problemSet.name}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(problemSet.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(problemSet.id)}
                    className="button muted-button"
                  >
                    Delete
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
