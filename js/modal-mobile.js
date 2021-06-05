(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-mobile-open]'),
    closeModalBtn: document.querySelector('[modal-mobile-close]'),
    modal: document.querySelector('[modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-mobile');
  }
})();