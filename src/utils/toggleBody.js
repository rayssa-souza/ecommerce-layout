const toggleBody = (value) => {
  const body = document.querySelector("body");

  if (body) {
    const overflow = body.style.overflow;

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
