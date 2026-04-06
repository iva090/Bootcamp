export default function LogFooter() {
    return (
        <div className="mt-4">
            <div className="relative flex items-center justify-center ">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm font-light">or</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="text-center text-sm text-gray-500 pt-4">
                Don't have an account?
                <button className="font-semibold text-black ml-2 underline hover:cursor-pointer hover:text-gray-800">Sign Up</button>
            </div>
        </div>
    )
}