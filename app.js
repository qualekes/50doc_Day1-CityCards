const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
   panel.addEventListener('click', () => {
      removeActiveClass();
        panel.classList.add('active')
     })
})

function removeActiveClass() {
   panels.forEach((panels) => {
      panels.classList.remove('active');
   })
}