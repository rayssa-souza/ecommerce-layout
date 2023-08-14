const toggleBody = () => {
  const body = document.querySelector("body");

  if (body) {
    const overflow = body.style.overflow;
    if (overflow === "hidden") {
      body.style.overflow = "visible";
    } else {
      body.style.overflow = "hidden";
    }
  }
};

export default toggleBody;
