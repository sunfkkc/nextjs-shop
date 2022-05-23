import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import menu from "../hooks/menu";

function Header() {
  const [isSelected, setIsSelected] = useState("");
  const router = useRouter();

  const goToSelectMenu = (url: string) => {
    router.push({ pathname: `${url}` });
  };
  return (
    <BottomNavigation showLabels value={isSelected}>
      {menu.map((item) => (
        <BottomNavigationAction
          key={item.title}
          label={item.title}
          value={item.title}
          onClick={() => {
            goToSelectMenu(item.url);
            setIsSelected(item.title);
          }}
        ></BottomNavigationAction>
      ))}
    </BottomNavigation>
  );
}

export default Header;
