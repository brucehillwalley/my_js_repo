

export const show = (users) => {
    console.log(users)
    const userSection = document.getElementById("users")
  
    users.forEach((user) => {
      userSection.innerHTML += `
          <h1>${user.login}</h1>
          <img src="${user.avatar_url}"  alt="" />
          <p><a href="${user.html_url}" target="_blank">URL</a></p> 
      `
    })
  }
  
  export const showError = (err) => {
    const userSection = document.getElementById("users")
    userSection.innerHTML = `<h1>${err}</h1>
    
    `
  }