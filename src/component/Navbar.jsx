import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"
function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={() => navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <p className=" bg-white text-black text-[15px] px-4 py-1 rounded-2xl hiddem md:block md:cursor-pointer">Explore Premium</p>
                    <p className=" bg-black  px-3 py-1 rounded-2xl hiddem md:block md:cursor-pointer">Install app</p>
                    <p className=" bg-pink-400 text-black w-7 h-7 rounded-full items-center text-center justify-center ">D</p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-balck  px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-balck  px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>
        </>
    )
}

export default Navbar