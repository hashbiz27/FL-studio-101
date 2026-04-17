export interface AudioEngineState {
  isPlaying: boolean
  bpm: number
}

export function useAudioEngine(): AudioEngineState & {
  play: () => void
  stop: () => void
  setBpm: (bpm: number) => void
} {
  return {
    isPlaying: false,
    bpm: 120,
    play: () => {},
    stop: () => {},
    setBpm: () => {},
  }
}
