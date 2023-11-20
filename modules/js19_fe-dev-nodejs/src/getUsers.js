import { show,showError } from "./renderUserAndError"

//? Named export
export const getUsers = () => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (!res.ok) {
          //? Fetch api'da hatayi bizim yakalamiz gerekiyor.
          throw new Error(`Hata: ${res.status}`) //? bir hata firlatiyoruz
        }
        return res.json()
      })
      .then((data) => {
        // veri = data
        // console.log(veri)
        show(data)
      })
      .catch((err) => showError(err))
  }