import useAuthStore from "../../store/useAuthStore";
import MockCard from "./MockCard";

export default function InProgress() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <div>
            {isLoggedIn ?
                <div>

                </div> :
                <div className="flex gap-3 blur-md">
                    <MockCard />
                    <MockCard />
                    <MockCard />
                </div>
            }
        </div>
    )
}