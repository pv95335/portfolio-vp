import React from "react";
import bookGardenImg from "../../assets/images/bookGarden.PNG";

function BookGarden(bookGarden) {
  const currentProject = {
    name: "bookGarden",
    description: "My first project where I created a semi-functioning website.",
  };
  return (
    <section>
      <a href="https://jason-ahmed-123.github.io/groupproject1-book-garden/">
        {currentProject.name}
      </a>
      <p>My first project where I began using html and css.</p>
      <div>
        <img src={bookGardenImg} />
      </div>
    </section>
  );
}

export default BookGarden;
