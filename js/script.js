document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu__toggle')
  const nav = document.querySelector('.menu')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('menu--open')
      const isOpen = nav.classList.contains('menu--open')
      toggle.setAttribute('aria-expanded', String(isOpen))
    })
  }

  document.querySelectorAll('[data-faq]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling
      if (answer) answer.classList.toggle('faq__answer--open')
    })
  })

  const contact = document.querySelector('#contactForm')
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault()
      const err = document.querySelector('#contactError')
      const ok = document.querySelector('#contactSuccess')
      if (err) err.textContent = ''
      if (ok) ok.textContent = ''
      let valid = true
      contact.querySelectorAll('[data-required]').forEach((el) => {
        if (!(el.value || '').trim()) valid = false
      })
      contact.querySelectorAll('[data-email]').forEach((el) => {
        const v = (el.value || '').trim()
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) valid = false
      })
      if (!valid) {
        if (err) err.textContent = 'Por favor, verifique os campos.'
        return
      }
      if (ok) ok.textContent = 'Formulário enviado com sucesso.'
      contact.reset()
    })
  }

  const login = document.querySelector('#loginForm')
  if (login) {
    login.addEventListener('submit', (e) => {
      e.preventDefault()
      const err = document.querySelector('#loginError')
      const ok = document.querySelector('#loginSuccess')
      if (err) err.textContent = ''
      if (ok) ok.textContent = ''
      let valid = true
      login.querySelectorAll('[data-required]').forEach((el) => {
        if (!(el.value || '').trim()) valid = false
      })
      login.querySelectorAll('[data-email]').forEach((el) => {
        const v = (el.value || '').trim()
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) valid = false
      })
      login.querySelectorAll('[data-minlength]').forEach((el) => {
        const min = parseInt(el.getAttribute('data-minlength') || '0', 10)
        if (((el.value || '').trim()).length < min) valid = false
      })
      if (!valid) {
        if (err) err.textContent = 'Por favor, verifique os campos.'
        return
      }
      if (ok) ok.textContent = 'Login realizado com sucesso.'
      login.reset()
    })
  }
})
