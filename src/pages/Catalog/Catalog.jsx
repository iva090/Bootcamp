import { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore"
import PathBar from "../../components/pathbar";
import Filter from "./Filter";

export default function Catalog() {


    return (
        <div className="px-50 mt-10">
            <PathBar />
            <Filter />
        </div>
    )
}