const DEFAULT_DATE_FORMAT = 'DD-MM-YYYY'
const ORDER_DATE_FORMAT = 'dd, DD MMMM YYYY'
const FULL_DATE_FORMAT = 'llll'
const EXCEL_DATE_FORMAT = 'DD/MM/YYYY'
const DB_DATE_FORMAT = 'YYYY-MM-DD'

document.querySelector('.loader').style.display = 'none'

const logout = (event) => {
  event.preventDefault()
  document.cookie =
    'Authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  window.location.href = '/dang-nhap'
}

const removeVietnameseFromString = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  str = str.toLowerCase()
  str = str
    .replace(/[&]/g, '-and-')
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/[-]+/g, '-')
    .replace(/-$/, '')
  return str
}

const displayUiError = (errors) => {
  const keys = Object.keys(errors)
  if (keys.length) {
    const uiError = document.getElementById('ui-error')
    uiError.innerHTML = 'Vui lòng kiểm tra các trường thông tin sau'
    keys.forEach((e) => {
      const div = document.createElement('div')
      div.innerHTML = e
      uiError.appendChild(div)
      const ul = document.createElement('ul')
      errors[e].forEach((error) => {
        const li = document.createElement('li')
        li.innerHTML = error
        ul.appendChild(li)
      })
      uiError.appendChild(ul)
    })
    uiError.style.display = 'block'
    uiError.scrollIntoView({ behavior: 'smooth', block: 'end' })
    setTimeout(() => {
      uiError.style.display = 'none'
    }, 20000)
  }
}

const hideAlert = () => {
  const dangerAlert = document.querySelector('.alert-danger')
  const infoAlert = document.querySelector('.alert-primary')
  setTimeout(() => {
    if (dangerAlert) dangerAlert.style.display = 'none'
    if (infoAlert) infoAlert.style.display = 'none'
  }, 20000)
}

const changeThumbnail = (event) => {
  const reader = new FileReader()
  reader.onload = function (evt) {
    document.getElementById('thumbnail-img').src = evt.target.result || '/assets/images/avatar-1.jpg';
  }
  reader.readAsDataURL(event.target.files[0])
}

hideAlert()
