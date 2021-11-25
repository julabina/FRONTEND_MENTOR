let a;

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    a = data;
  });
