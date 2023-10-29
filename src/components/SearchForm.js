import React from 'react';

function SearchForm() {
    return (
        <form className="search-block" >
          <div className="search-block__container">
            <div className="search-block__form">
              <div className="search-block__icon"></div>
              <input className="search-block__input" placeholder="Введите название секции или кружка" required id="section" />
            </div>
            <button type="submit" className="search-block__button">Найти</button>
          </div>
        </form>
    );
  }
  
  export default SearchForm;