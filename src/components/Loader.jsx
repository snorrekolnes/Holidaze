import Spinner from "../assets/img/Spinner.svg"

const Loader = () => {
    return (
        <>
            <div
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white opacity-95 flex flex-col items-center justify-center">
                 <img src={Spinner} alt=""/>
            </div>
        </>
    );
};

export default Loader;