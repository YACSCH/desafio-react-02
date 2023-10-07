import SocialButton from '../SocialButton'
import Formulario from '../Formulario'
import Alert from '../Alert'


import './index.css'

const Registro = () => {
  return (
    <>
      <main className='container text-center bg-white p-4 rounded-4'>
      <h1>Crea una cuenta</h1>
      <section className='d-flex justify-content-center gap-3 p-2'>
          <SocialButton icon="fa-facebook" />
          <SocialButton icon="fa-github" />
          <SocialButton icon="fa-linkedin" />
      </section>
      <h6>O usa tu email para registrarte</h6>
      <Formulario/>
      <Alert/>
      </main>
    </>
    
  )
}

export default Registro