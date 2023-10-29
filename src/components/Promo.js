import promo from "../images/Girl.svg";
function Promo() {
    return (
      <section className="promo">
        <div className="promo__container">
          <div className="promo__title">
              <p className="promo__subtitle"><span className="promo__span">Узнай какое занятие </span>подойдет вашему ребёнку</p>
              <button type="submit" className="search-block__button search-block__button_promo">Узнать</button>
          </div>
          <div className="promo__images">
            <img src={promo} alt="Девушка" className="promo__image" />
            <img src={promo} alt="Девушка" className="promo__image promo__image_2" />
            <img src={promo} alt="Девушка" className="promo__image promo__image_3" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Promo;
