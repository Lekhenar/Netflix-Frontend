import "./App.css";
import Movies from "./assets/Movies.json";
import Section from "./components/Section";

// console.log(Movies);

function App() {
  return (
    <>
      <header>
        <img
          src="./src/assets/img/netflix-img-removebg-preview.png"
          alt="Netflex"
        />
      </header>
      {Movies.map((elem) => {
        // console.log(elem);
        return (
          <Section key={Element.categpry} elem={elem} />
          // <div key={elem.category}>
          //   <h2>{elem.category}</h2>
          //   {elem.images.map((url) => {
          //     console.log(url);

          //     return <img key={url} src={url} alt="" />;
          //   })}
          // </div>
        );
      })}
    </>
  );
}
export default App;
