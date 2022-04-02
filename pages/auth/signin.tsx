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
      <div className="mt-20 flex min-h-screen flex-col items-center py-2 px-14">
        <div className="relative flex h-28 w-80 items-center">
          <Image
            src="https://links.papareact.com/ocw"
            alt="Instagram Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <p className="font-xs italic">
          Instagram Clone built for Educational Purposes Only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* signIntoProvider takes a callbackUrl as second param | '/' goes to Home Page */}
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: '/' })
                }
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
