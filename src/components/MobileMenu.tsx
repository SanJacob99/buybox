// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Drawer } from "antd";
// import Link from "next/link";
// import React, { ReactElement } from "react";

// interface MobileMenuProps {
//   onCloseMenu(): void;
//   visible: boolean;
//   clickSignIn(): void;
// }

// const MobileMenu = ({
//   onCloseMenu,
//   visible,
//   clickSignIn,
// }: MobileMenuProps): ReactElement => (
//   <Drawer
//     title="Menu"
//     placement="top"
//     onClose={onCloseMenu}
//     open={visible}
//     getContainer={false}
//     closeIcon={<FontAwesomeIcon icon={faBars as IconProp} color="#0068EF" />}
//     className="main-menu-mobile"
//     height={500}
//   >
//     <div className="sing-in-link">
//       {!user ? (
//         <span>
//           <strong>Hi!</strong>&nbsp;
//           <button className="btn btn-link" type="button" onClick={clickSignIn}>
//             Sing in
//           </button>
//           &nbsp; for faster booking
//         </span>
//       ) : (
//         <span>
//           <strong>Hi! &nbsp;{user?.email}</strong>
//         </span>
//       )}
//     </div>
//     <ul className="menu-items-group">
//       {accessRole.filter((item) => item.path === "sales").length > 0 && (
//         <li className="menu-items">
//           <Link
//             to={RoutesPath.accounts}
//             className="text-secondary"
//             onClick={() => onCloseMenu()}
//           >
//             Account Managment
//           </Link>
//         </li>
//       )}
//       {MenuData.map((menuItem, index) =>
//         !menuItem.requireLogin ||
//         (user && menuItem.accessControl === "") ||
//         (user &&
//           accessRole.find(
//             (x) =>
//               x.path ===
//               menuItem.accessControl.substring(1, menuItem.accessControl.length)
//           ) !== undefined) ? (
//           <li className="menu-items" key={index}>
//             {menuItem.menuLabel === "Home" || menuItem.menuLabel === "About" ? (
//               <a
//                 href={menuItem.path}
//                 className="text-secondary"
//                 onClick={() => onCloseMenu()}
//               >
//                 {menuItem.menuLabel}
//               </a>
//             ) : (
//               <Link
//                 to={menuItem.path}
//                 className="text-secondary"
//                 onClick={() => onCloseMenu()}
//               >
//                 {menuItem.menuLabel}
//               </Link>
//             )}
//           </li>
//         ) : (
//           ""
//         )
//       )}
//     </ul>
//   </Drawer>
// );
// export default MobileMenu;
