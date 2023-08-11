import Image from 'next/image'
import styles from './page.module.css'
import RegistrationForm from './components/registrationForm'

export default function Home() {
  return (
    <main>
      <RegistrationForm />
    </main>
  )
}
