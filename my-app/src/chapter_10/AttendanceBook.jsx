const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
  {
    id: 5,
    name: "Min",
  },
];

function AttendanceBooks(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={`student-id-${student.id}`}>{student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBooks;
