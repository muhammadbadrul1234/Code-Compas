import courses from "./data";

// Find a course by its ID
const courseIdToUpdate = "xMHCZl";
const courseToUpdate = courses.find(
  (course) => course.id === courseIdToUpdate
);

// Check if the course with the specified ID is found
if (courseToUpdate) {
  // Update the desired property
  courseToUpdate.course_name = "Muhammad Ba";
  courseToUpdate.description = "Updated course description";
  // Update other properties as needed

  // Log the updated course data
  console.log(courseToUpdate);

  // If you want to update the entire courses array in case it's needed
  // you can use map or forEach to update multiple courses
  // For example, updating the description for all courses
  courses.forEach((course) => {
    course.description = "Updated description for all courses";
  });

  // Log the entire updated courses array
  console.log(courses);
} else {
  console.log(`Course with ID ${courseIdToUpdate} not found`);
}

// Export the updated courses array if needed
export default courses;
