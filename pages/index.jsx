import { getCookie } from 'cookies-next';
import { validaToken } from '../services/users';

export default function Home() {
  return (
    <div>
      Página segura - perfil do usuario 
    </div>
  )
}

export const getServerSideProps = async (req, res) => {
  try {
    const token = getCookie('authorization', { req, res });
    console.log(token)
    
    return {
      props: {}
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}
