import Image from 'next/image';
import { getProviders, signIn as signIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';

interface IProps {
  providers: [
    {
      name: string;
      id: string;
    }
  ];
}

export default function SignIn({ providers }: IProps) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center mt-20'>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIntoProvider(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
