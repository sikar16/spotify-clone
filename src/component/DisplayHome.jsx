import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"
import AlbemItem from "./AlbemItem"
import { songsData } from "../assets/assets"
import SongItem from "./SongItem"
function DisplayHome() {
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1>Feature Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbemItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
            <div className="mb-4">
                <h1>Today's biggiest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome