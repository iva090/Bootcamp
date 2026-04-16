import useAuthStore from "../../store/useAuthStore";
import CoursesInProgress from "./CoursesInProgress";
import MockCard from "./MockCard";
import SignInOverlay from "./SignInOverlay";

export default function InProgress() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    return (
        <div>
            {isLoggedIn ?
                <div>
                    <CoursesInProgress />
                </div> :
                <div className="relative">
                    <div className="flex gap-3 blur-md">
                        <MockCard />
                        <MockCard />
                    </div>
                    <SignInOverlay />
                </div>
            }
            <MockCard />
        </div>
    )
}