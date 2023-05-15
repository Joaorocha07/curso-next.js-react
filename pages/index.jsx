import { getCookie } from 'cookies-next';
import { validaToken } from '../services/users';

export default function Home() {
  return (
    <div>
      Página segura - perfil do usuario 
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try {
    const token = getCookie('authorization', { req, res });
    
    if (!token) throw new Error('Token inválido');

    validaToken(token);
    
    return {
      props: {}
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {}
    }
  }
}
