import { useSession } from "next-auth/react"
import { useRecoilState } from "recoil"
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom"
import useSpotify from "../hooks/useSpotify"
import { useState } from "react"
import useSongInfo from "../hooks/useSongInfo"

function Player() {
    const spotifyApi = useSpotify()
    const songInfo = useSongInfo()
    const { data: session, status } = useSession()

    
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [volume, setVolume] = useState(50)

    console.log(songInfo)
    return (
        <div>
            <div>
                <img src={songInfo?.album?.images?.[0]?.url} alt=""/>
            </div>
        </div>
    )
}

export default Player
