const toggleBody = (value) => {
  console.log(value);
  console.log("entrou na função toggle");
  const body = document.querySelector("body");
  console.log(body);

  if (body) {
    const overflow = body.style.overflow;
    console.log(overflow);
    if (value) {
      return (body.style.overflow = value);
    }

    if (overflow === "hidden") {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  }
};

export default toggleBody;
