import React, { FC, ReactNode } from "react";
import { DrawerAppBar } from "../DrawerAppbar/DrawerAppBar";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      <main
        style={{
          marginTop: "10vh",
        }}
      >
        {children}
      </main>
    </div>
  );
};
