import { openModal, closeModal, modal, modalTimerId } from "./modals.js";

export default function forms() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => postData(form));

  const MESSAGE = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так... Поопробуете снова!",
  };

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const loading = document.createElement("div");
      loading.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      `;
      loading.innerHTML = `<img src="icons/spinner.svg"/> <span>${MESSAGE.loading}</span>`;
      form.insertAdjacentElement("beforeend", loading);

      fetch("http://localhost:9999/support/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            showResponseModal(MESSAGE.success);
          } else {
            showResponseModal(MESSAGE.failure);
          }
        })
        .catch((e) => console.log(e))
        .finally(() => {
          loading.remove();
          e.target.reset();
        });

      // const request = new XMLHttpRequest();
      // request.open("POST", "http://localhost:4200/support/");
      // request.setRequestHeader("Content-type", "application/json");

      // request.send(JSON.stringify(Object.fromEntries(formaData)));

      // request.addEventListener("load", (e) => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showResponseModal(MESSAGE.success, loading);
      //   } else {
      //     showResponseModal(MESSAGE.failure, loading);
      //   }
      // });
    });
  }

  function showResponseModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal(modal, modalTimerId);

    const responeModal = document.createElement("div");
    responeModal.classList.add("modal__dialog");
    responeModal.innerHTML = `
      <div class="modal__content">
        <div data-modal-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    modal.append(responeModal);
    const srmID = setTimeout(() => {
      responeModal.remove();
      prevModalDialog.classList.remove("hide");
      prevModalDialog.classList.add("show");
      closeModal(modal, modalTimerId);
      clearTimeout(srmID);
    }, 2500);
  }
}
