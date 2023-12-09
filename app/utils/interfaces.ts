import { IconType } from "react-icons";

export interface INavItem {
    name: string;
    path: string; 
    icon: IconType; 
    active: boolean 
}