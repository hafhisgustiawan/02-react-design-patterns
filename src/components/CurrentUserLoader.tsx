import React, { useEffect, useState } from 'react';
import { UserType } from '../types/user-type';
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}

const CurrentUserLoader: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get<UserType>('/current-user');
      console.log(res.data);
      setUser(res.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { ...user });
      })}
    </>
  );
};

export default CurrentUserLoader;
