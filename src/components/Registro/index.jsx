import SocialButton from '../SocialButton'
import Formulario from '../Formulario'

import './index.css'

const Registro = ({msgErr, error}) => {

  return (
    <>
      <main className='container text-center bg-white p-3 rounded-4'>
      <h1>Crea una cuenta</h1>
      <section className='w-100 d-flex justify-content-center gap-2'>
          <SocialButton icon="fa-facebook" />
          <SocialButton icon="fa-github" />
          <SocialButton icon="fa-linkedin" />
      </section>
      <Formulario msg={msgErr} setMsgErr={error}/>
      </main>
    </>
    
  )
}

export default Registro