const Section = (props) => {
  // console.log(props);

  return (
    <section>
      <h2>{props.elem.category}</h2>
      <div className="img-container">
        {props.elem.images.map((url) => {
          console.log(url);

          return <img key={url} src={url} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Section;
