
import styles from './Login.module.css'
import Footer from '../../components/Footer/Footer'
import { FcGoogle } from 'react-icons/fc'
import Image from '../../assets/image.svg'

function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={Image} alt="Login Illustration" />
        </div>

        <div className={styles.form}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1>Faça login na sua conta</h1>
              <h2>Bem vindo de volta</h2>
            </div>

            <div className={styles.input}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className={styles.input1}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>

            <div className={styles.actiSons}>
              <div className={styles.check}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembre de mim</label>
              </div>

              <a href="#" className={styles.link}>
                Esqueceu a senha
              </a>
            </div>

            <div className={styles.buttons}>
              <div type="submit" className={styles.button}>Entrar</div>
              <div type="submit" className={styles.button1}>
                <FcGoogle size={20} /> Ou faça login com Google
              </div>
            </div>

            <div className={styles.not_registered}>
              <span>Não tem uma conta?</span>
              <a href="#" className={styles.link}>
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Login





