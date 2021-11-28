import { atom } from 'recoil'

export const currentTrackIdState = atom({
    key: "currentTrackIdState",
    default: null //"11R5wDK8PHFzGuteNTtP6G"
})

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false
})