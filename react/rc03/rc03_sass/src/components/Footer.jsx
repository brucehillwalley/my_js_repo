import FooterStyle from "../scss/footer.module.scss"

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <p>© Copyright by Bruce {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
