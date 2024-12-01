import { ReactNode } from 'react';

function Error({ children }: { children: ReactNode }) {
  return <span className="block text-red-600 mt-2">{children}</span>;
}

export default Error;
