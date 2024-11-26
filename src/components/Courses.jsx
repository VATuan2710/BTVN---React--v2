import React from "react";

// call API lay ve danh sach khoa hoc
const courses = [
  { id: 1, title: "Khoa hoc JS", price: 500 },
  { id: 2, title: "Khoa hoc JS", price: 500 },
  { id: 3, title: "Khoa hoc PHP", price: 500 },
];

function CourseItem(props) {
  return (
    <div className="course-card">
      <h2>Ten khoa hoc: {props.title}</h2>
      <p>Gia: {props.price}</p>
    </div>
  );
}

const Courses = () => {
  return (
    <>
      <h1>Danh sach khoa hoc</h1>
      {/* <CourseItem title="Khoa hoc HTML" price="500" />
			<CourseItem title="Hoa hoc JS" price="600" />
			<CourseItem title="KHoa hoc Devops" price="150" /> */}
      {courses.map((item) => {
        return (
          <CourseItem key={item.id} title={item.title} price={item.price} />
        );
      })}
    </>
  );
};

export default Courses;
