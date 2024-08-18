import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./Avatar.css";

const AvatarComponent = () => {
  return (
    <div className="card flex justify-content-center">
      <AvatarGroup className="custom-avatar-group">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          className="custom-avatar"
          shape="circle"
        />
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
          className="custom-avatar"
          shape="circle"
        />
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
          className="custom-avatar"
          shape="circle"
        />
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
          className="custom-avatar"
          shape="circle"
        />
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
          className="custom-avatar"
          shape="circle"
        />
        <Avatar label="+4" className="custom-avatar" shape="circle" />
      </AvatarGroup>
    </div>
  );
};

export default AvatarComponent;
