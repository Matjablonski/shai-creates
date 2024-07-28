function cursor() {

  // Get the element from the DOM
  const items = document.querySelectorAll('.showcase_item')
  const cursor = document.querySelector('.showcase_cursor_wrap')

  items.forEach( item => {
    item.addEventListener('mouseenter', () => cursor.classList.add('is-hovered'))
    item.addEventListener('mouseleave', () => cursor.classList.remove('is-hovered'))
  })

}

export default cursor