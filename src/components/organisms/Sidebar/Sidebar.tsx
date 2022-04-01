import React from "react";
import Logo from "../../atoms/Logo/Logo";

import s from "./Sidebar.module.scss";
import avatar from "../../../assets/image-avatar.jpg";
import moonIcon from "../../../assets/icon-moon.svg";
import SidebarBox from "../../atoms/SidebarBox/SidebarBox";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className={s.sidebar}>
      <Logo className={s.logo} />
      <SidebarBox>
        <img src={moonIcon} className={s.themeToggle} alt="Toggle theme" />
      </SidebarBox>
      <div className={s.divider} />
      <SidebarBox>
        <img src={avatar} alt="avatar" className={s.avatarImage} />
      </SidebarBox>
    </div>
  );
};

export default Sidebar;
