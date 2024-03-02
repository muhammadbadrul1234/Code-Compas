import React from "react";

const Table = ({ blogs, handleEdit, handleDelete }) => {
  // Function to compare dates for sorting
  const compareDates = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  };

  // Sort blogs by upload date
  const sortedBlogs = blogs ? [...blogs].sort(compareDates) : [];

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Blog Title</th>
            <th>Upload Date</th>
            <th>Last Edited</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBlogs.length > 0 ? (
            sortedBlogs.map((blog, id) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>{blog.editDate}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(blog.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(blog.id)}
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
