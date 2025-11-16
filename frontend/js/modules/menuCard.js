export default function menuCard() {
  // MenuCard start
  class MenuCard {
    constructor(coverSrc, coverAlt, title, descr, prise, parentSelector) {
      this.coverSrc = coverSrc;
      this.coverAlt = coverAlt;
      this.title = title;
      this.descr = descr;
      this.prise = prise;
      this.parentSelector = document.querySelector(parentSelector);
      this.usdRate = 41.25;
      this.changeToUAH();
    }

    changeToUAH() {
      this.prise = this.prise * this.usdRate;
    }

    render() {
      const elem = document.createElement("div");
      const { coverSrc, coverAlt, title, descr, prise } = this;

      elem.innerHTML = `
        <div class="menu__item">
            <img src="${coverSrc}" alt="${coverAlt}" />
            <h3 class="menu__item-subtitle"${title}"</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${prise.toFixed(
                2
              )}</span> грн/день</div>
            </div>
          </div>
        `;
      this.parentSelector.append(elem);
    }
  }

  //   new MenuCard(
  //     "img/tabs/vegy.jpg",
  //     "vegy",
  //     'Меню "Фитнес"',
  //     `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
  //               свежих овощей и фруктов. Продукт активных и здоровых людей. Это
  //               абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
  //     5.55,
  //     ".menu__field .container"
  //   ).render();

  //   new MenuCard(
  //     "img/tabs/elite.jpg",
  //     "elite",
  //     "Меню “Премиум”",
  //     `В меню “Премиум” мы используем не только красивый дизайн упаковки,
  //               но и качественное исполнение блюд. Красная рыба, морепродукты,
  //               фрукты - ресторанное меню без похода в ресторан!`,
  //     13.33,
  //     ".menu__field .container"
  //   ).render();

  //   new MenuCard(
  //     "img/tabs/post.jpg",
  //     "post",
  //     'Меню "Постное"',
  //     `Меню “Постное” - это тщательный подбор ингредиентов: полное
  //               отсутствие продуктов животного происхождения, молоко из миндаля,
  //               овса, кокоса или гречки, правильное количество белков за счет тофу
  //               и импортных вегетарианских стейков.`,
  //     10.42,
  //     ".menu__field .container"
  //   ).render();
}
