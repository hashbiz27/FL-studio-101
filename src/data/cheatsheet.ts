export type ShortcutCategory =
  | 'Global'
  | 'Playback'
  | 'Piano Roll'
  | 'Playlist'
  | 'Channel Rack'
  | 'Mixer'
  | 'Browser'

export interface Shortcut {
  action: string
  keys: string[]
  category: ShortcutCategory
}

export type ChecklistPhase =
  | 'Gain Staging'
  | 'EQ & Frequency'
  | 'Dynamics'
  | 'Space & Effects'
  | 'Stereo & Width'
  | 'Balance & Translation'
  | 'Pre-Bounce'

export interface ChecklistItem {
  id: string
  phase: ChecklistPhase
  text: string
  note?: string
}

export type PluginCategory = 'Synthesis' | 'Sampling' | 'Drums' | 'Effects' | 'Utility'

export interface PluginEntry {
  task: string
  plugins: string[]
  category: PluginCategory
  tip: string
}

export const SHORTCUTS: Shortcut[] = [
  // Global
  { action: 'Undo', keys: ['Ctrl', 'Z'], category: 'Global' },
  { action: 'Redo', keys: ['Ctrl', 'Y'], category: 'Global' },
  { action: 'Save project', keys: ['Ctrl', 'S'], category: 'Global' },
  { action: 'Save new version', keys: ['Ctrl', 'N'], category: 'Global' },
  { action: 'Open project', keys: ['Ctrl', 'O'], category: 'Global' },
  { action: 'Audio settings', keys: ['F10'], category: 'Global' },
  { action: 'Toggle full screen', keys: ['F11'], category: 'Global' },
  { action: 'Open Mixer', keys: ['F9'], category: 'Global' },
  { action: 'Open Piano Roll', keys: ['F7'], category: 'Global' },
  { action: 'Open Channel Rack', keys: ['F6'], category: 'Global' },
  { action: 'Open Browser', keys: ['F8'], category: 'Global' },
  { action: 'Open Playlist', keys: ['F5'], category: 'Global' },
  { action: 'Close all windows', keys: ['Esc'], category: 'Global' },
  // Playback
  { action: 'Play / Pause', keys: ['Space'], category: 'Playback' },
  { action: 'Stop (return to start)', keys: ['Space', 'Space'], category: 'Playback' },
  { action: 'Record', keys: ['Ctrl', 'R'], category: 'Playback' },
  { action: 'Toggle Song / Pattern mode', keys: ['P'], category: 'Playback' },
  { action: 'Metronome on/off', keys: ['Ctrl', 'M'], category: 'Playback' },
  { action: 'Set tempo', keys: ['Alt', 'T'], category: 'Playback' },
  // Piano Roll
  { action: 'Select all notes', keys: ['Ctrl', 'A'], category: 'Piano Roll' },
  { action: 'Delete selected', keys: ['Delete'], category: 'Piano Roll' },
  { action: 'Duplicate selection', keys: ['Ctrl', 'D'], category: 'Piano Roll' },
  { action: 'Quantize', keys: ['Ctrl', 'Q'], category: 'Piano Roll' },
  { action: 'Zoom in/out', keys: ['Ctrl', 'Scroll'], category: 'Piano Roll' },
  { action: 'Shift notes up one semitone', keys: ['Shift', '↑'], category: 'Piano Roll' },
  { action: 'Shift notes down one semitone', keys: ['Shift', '↓'], category: 'Piano Roll' },
  { action: 'Shift notes up one octave', keys: ['Shift', 'Ctrl', '↑'], category: 'Piano Roll' },
  { action: 'Shift notes down one octave', keys: ['Shift', 'Ctrl', '↓'], category: 'Piano Roll' },
  { action: 'Draw mode', keys: ['D'], category: 'Piano Roll' },
  { action: 'Select mode', keys: ['E'], category: 'Piano Roll' },
  { action: 'Stamp / paint mode', keys: ['B'], category: 'Piano Roll' },
  { action: 'Flip selection vertically', keys: ['Alt', 'Y'], category: 'Piano Roll' },
  { action: 'Reverse selection horizontally', keys: ['Alt', 'R'], category: 'Piano Roll' },
  { action: 'Stretch selection', keys: ['Alt', 'S'], category: 'Piano Roll' },
  // Playlist
  { action: 'Select all clips', keys: ['Ctrl', 'A'], category: 'Playlist' },
  { action: 'Delete clip', keys: ['Delete'], category: 'Playlist' },
  { action: 'Duplicate clip', keys: ['Ctrl', 'D'], category: 'Playlist' },
  { action: 'Zoom horizontal', keys: ['Ctrl', 'Scroll'], category: 'Playlist' },
  { action: 'Draw mode', keys: ['D'], category: 'Playlist' },
  { action: 'Select mode', keys: ['E'], category: 'Playlist' },
  // Channel Rack
  { action: 'Add channel (last plugin)', keys: ['Ctrl', 'L'], category: 'Channel Rack' },
  { action: 'Clone channel', keys: ['Alt', 'C'], category: 'Channel Rack' },
  { action: 'Rename channel', keys: ['F2'], category: 'Channel Rack' },
  { action: 'Move channel up', keys: ['Shift', 'Ctrl', '↑'], category: 'Channel Rack' },
  { action: 'Move channel down', keys: ['Shift', 'Ctrl', '↓'], category: 'Channel Rack' },
  { action: 'Toggle step seq / Piano Roll', keys: ['Ctrl', 'P'], category: 'Channel Rack' },
  { action: 'Mute channel', keys: ['Alt', 'Click'], category: 'Channel Rack' },
  // Mixer
  { action: 'Solo track', keys: ['Alt', 'Click'], category: 'Mixer' },
  { action: 'Rename track', keys: ['F2'], category: 'Mixer' },
  { action: 'Route to new track', keys: ['Shift', 'Ctrl', 'L'], category: 'Mixer' },
  { action: 'Add effect plugin', keys: ['Click +'], category: 'Mixer' },
  // Browser
  { action: 'Search in browser', keys: ['Ctrl', 'F'], category: 'Browser' },
  { action: 'Preview sample', keys: ['Click'], category: 'Browser' },
  { action: 'Send to Channel Rack', keys: ['Enter'], category: 'Browser' },
  { action: 'Refresh browser', keys: ['F5'], category: 'Browser' },
]

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Gain Staging
  { id: 'gs-1', phase: 'Gain Staging', text: 'All channels are gain-staged pre-plugin (peaks averaging −18 dBFS)', note: 'Consistent levels prevent surprises when stacking plugins later' },
  { id: 'gs-2', phase: 'Gain Staging', text: 'Master fader is at 100% (0 dB) — not compensating for poor gain staging' },
  { id: 'gs-3', phase: 'Gain Staging', text: 'Loudest element sits no higher than −6 dBFS before the limiter' },
  { id: 'gs-4', phase: 'Gain Staging', text: 'No channels are clipping in the Mixer (all green/yellow, none red)' },
  // EQ
  { id: 'eq-1', phase: 'EQ & Frequency', text: 'High-pass filter applied to non-bass elements to remove sub rumble' },
  { id: 'eq-2', phase: 'EQ & Frequency', text: 'Mud (200–400 Hz) addressed on any element that sounds boxy or unclear' },
  { id: 'eq-3', phase: 'EQ & Frequency', text: 'Kick and bass are not masking each other — checked with a spectrum analyser' },
  { id: 'eq-4', phase: 'EQ & Frequency', text: 'No harsh frequencies jumping out (2–5 kHz region swept and addressed)' },
  { id: 'eq-5', phase: 'EQ & Frequency', text: 'Mix compared against a reference track — overall spectral balance matches the genre' },
  // Dynamics
  { id: 'dy-1', phase: 'Dynamics', text: 'Drums have transient punch — not over-compressed or "sausage-flat"' },
  { id: 'dy-2', phase: 'Dynamics', text: 'Sustained elements (pads, strings) are gelled with gentle compression' },
  { id: 'dy-3', phase: 'Dynamics', text: '808 / bass sidechain is breathing naturally with the kick', note: 'Should sound musical, not like a volume knob being turned' },
  { id: 'dy-4', phase: 'Dynamics', text: 'No unintentional pumping artifacts from parallel or bus compression' },
  // Space
  { id: 'sp-1', phase: 'Space & Effects', text: 'Reverb tails do not wash out clarity in the low mids' },
  { id: 'sp-2', phase: 'Space & Effects', text: 'Delay throws are tempo-synced and sit behind the dry signal' },
  { id: 'sp-3', phase: 'Space & Effects', text: 'Elements occupy different depth planes (close, mid, far)' },
  { id: 'sp-4', phase: 'Space & Effects', text: 'Reverb on bass elements is high-pass filtered (no low-end on reverb returns)' },
  // Stereo
  { id: 'st-1', phase: 'Stereo & Width', text: 'Kick and bass are centred in mono' },
  { id: 'st-2', phase: 'Stereo & Width', text: 'Mix sounds good collapsed to mono — no key elements disappear' },
  { id: 'st-3', phase: 'Stereo & Width', text: 'No phase issues — stereo correlation stays positive (checked with correlation meter)' },
  { id: 'st-4', phase: 'Stereo & Width', text: 'Wide elements are balanced left and right — not skewed to one side' },
  // Balance
  { id: 'ba-1', phase: 'Balance & Translation', text: 'Mix checked at low volume (whisper test) — every element still audible' },
  { id: 'ba-2', phase: 'Balance & Translation', text: 'Mix checked on headphones AND speakers' },
  { id: 'ba-3', phase: 'Balance & Translation', text: 'Lead element (vocal/melody) is clearly the loudest in the mix' },
  { id: 'ba-4', phase: 'Balance & Translation', text: 'Compared against a reference track at loudness-matched levels (LUFS matched)' },
  // Pre-Bounce
  { id: 'pb-1', phase: 'Pre-Bounce', text: 'No automation lanes left accidentally open or unresolved at the end' },
  { id: 'pb-2', phase: 'Pre-Bounce', text: 'Song ends cleanly — reverb and delay tails are given space to fade' },
  { id: 'pb-3', phase: 'Pre-Bounce', text: 'Export settings correct: 44.1 kHz / 24-bit WAV for master delivery' },
  { id: 'pb-4', phase: 'Pre-Bounce', text: 'Project saved before bouncing' },
  { id: 'pb-5', phase: 'Pre-Bounce', text: 'Dithering enabled if downconverting to 16-bit (CD or distribution-requested)' },
]

export const PLUGIN_ENTRIES: PluginEntry[] = [
  // Synthesis
  { task: 'Warm analog pad', plugins: ['Harmor', 'Flex'], category: 'Synthesis', tip: 'In Harmor, use Image Synthesis for harmonic warmth and evolving textures. In Flex, browse the "Pads" preset category.' },
  { task: 'Pluck / arp lead', plugins: ['Sytrus', 'Flex'], category: 'Synthesis', tip: 'Sytrus FM operators excel at punchy plucks. Start with a sine carrier and a fast decay envelope on the modulator.' },
  { task: 'Sub bass / 808', plugins: ['3xOsc', 'Flex'], category: 'Synthesis', tip: 'Use 3xOsc with a single sine oscillator. Pitch-envelope the note for 808 character — set decay to match BPM.' },
  { task: 'Mid-range distorted bass', plugins: ['Sytrus', 'Harmor'], category: 'Synthesis', tip: 'Add gentle saturation after a sine sub to generate upper harmonics that translate on small speakers.' },
  { task: 'Supersaw / trance lead', plugins: ['3xOsc', 'Flex'], category: 'Synthesis', tip: 'In 3xOsc, detune three saw oscillators by ±5–10 cents. Layer with a second instance panned wide for chorus depth.' },
  { task: 'FM electric piano / DX-style', plugins: ['Sytrus'], category: 'Synthesis', tip: 'Sytrus is a full 6-operator FM synth. Use operator 6 as carrier, operators 1–5 as modulators for classic DX7 tones.' },
  { task: 'Textured ambient / granular pad', plugins: ['Harmor', 'Flex'], category: 'Synthesis', tip: 'Load a noise image in Harmor\'s Image Synthesis section for evolving, granular-style textures.' },
  { task: 'Chord stab / house stab', plugins: ['Flex', 'Sytrus'], category: 'Synthesis', tip: 'Layer a plucked patch with a short pad patch. Use Piano Roll chord mode to voice inversions across registers.' },
  // Sampling
  { task: 'Vocal chop / melodic vocal', plugins: ['Flex', 'Gross Beat'], category: 'Sampling', tip: 'Chop a vocal in Edison, load slices into the Sampler, then use Gross Beat volume/pitch tables for rhythmic stutter effects.' },
  { task: 'Drum loop / sample flip', plugins: ['Fruity Slicer', 'Edison'], category: 'Sampling', tip: 'Edison records and trims audio. Fruity Slicer auto-chops on transients — each slice is triggered by a different MIDI note.' },
  { task: 'One-shot samples / foley', plugins: ['Flex', 'Fruity Sampler'], category: 'Sampling', tip: 'Fruity Sampler gives per-note control over pitch, envelope, and loop. Flex presets include many high-quality one-shots.' },
  // Drums
  { task: 'Punchy kick drum', plugins: ['FPC', 'Flex', '3xOsc'], category: 'Drums', tip: 'FPC is the go-to for sample-based kicks. For a synthetic kick, use 3xOsc with a fast sine pitch-drop (no oscillator detuning).' },
  { task: 'Snare / clap layer', plugins: ['FPC', 'Flex'], category: 'Drums', tip: 'In FPC, layer a short snare sample with a clap sample. Offset the clap 10–20 ms after the snare for depth and width.' },
  { task: 'Hi-hats (open/closed/choke)', plugins: ['FPC', 'Flex'], category: 'Drums', tip: 'FPC has built-in choke groups — open hats cut off when the closed hat fires, just like an acoustic kit.' },
  { task: 'Trap triplet hi-hats', plugins: ['FPC'], category: 'Drums', tip: 'Draw 1/32nd note triplet patterns in the Piano Roll for FPC. Vary velocity on each hit (40–100) for human groove.' },
  // Effects
  { task: 'Sidechain compression (pumping)', plugins: ['Fruity Peak Controller', 'Gross Beat'], category: 'Effects', tip: 'Link Fruity Peak Controller (set to "Peak" mode, source = kick channel) to the volume of the bass channel via right-click.' },
  { task: 'Distortion / saturation', plugins: ['Fruity Blood Overdrive', 'Effector'], category: 'Effects', tip: 'Blood Overdrive adds harmonic saturation. On bass, use low wet signal (20–30%) — a little goes a long way.' },
  { task: 'Reverb (algorithmic)', plugins: ['Fruity Reeverb 2'], category: 'Effects', tip: 'Reeverb 2 is CPU-light and great on sends. Use pre-delay (10–30 ms) to keep the dry signal upfront before the reverb tail.' },
  { task: 'Reverb (convolution / IR)', plugins: ['Fruity Convolver'], category: 'Effects', tip: 'Fruity Convolver loads IR files for realistic room, hall, and plate sounds. Use "stereo enhancer" mode for lush pads.' },
  { task: 'Delay / echo (tempo-synced)', plugins: ['Fruity Delay 3'], category: 'Effects', tip: 'Fruity Delay 3 supports ping-pong, tempo sync, and per-tap feedback. Set feedback to 40–60% for musical echoes.' },
  { task: 'Lo-fi / degraded texture', plugins: ['Gross Beat', 'Effector'], category: 'Effects', tip: 'Gross Beat volume/pitch tables create vinyl-skip effects. Effector\'s bit-crush mode adds lo-fi grit and crunch.' },
  { task: 'Pitch correction / autotune', plugins: ['NewTone', 'Pitcher'], category: 'Effects', tip: 'NewTone edits pitch destructively on audio clips. Pitcher is the real-time autotune effect for live or rendered channels.' },
  { task: 'Chorus / flanger / phaser', plugins: ['Fruity Flangus', 'Effector'], category: 'Effects', tip: 'Fruity Flangus handles classic flanger/chorus tones. Effector includes chorus, phaser, and ring modulator in one plugin.' },
  { task: 'Stutter / rhythmic gating', plugins: ['Gross Beat'], category: 'Effects', tip: 'Gross Beat has 36 built-in volume pattern slots. Automate the pattern number to switch between gate rhythms mid-track.' },
  // Utility
  { task: 'EQ — surgical / mix', plugins: ['Parametric EQ 2'], category: 'Utility', tip: 'Parametric EQ 2 includes a built-in spectrum analyser. Use its spectrum view for visual frequency analysis — no separate plugin needed.' },
  { task: 'Modulated / creative filter', plugins: ['Fruity Love Philter'], category: 'Utility', tip: 'Love Philter is a 8-stage multimode filter with LFO and envelope modulation — ideal for automatable filter sweeps on pads and synths.' },
  { task: 'Multiband compression / limiting', plugins: ['Maximus'], category: 'Utility', tip: 'Maximus has three frequency bands. Use gentle ratios on the master bus — it\'s extremely powerful and easy to over-process.' },
  { task: 'Stereo shaping / mid-side', plugins: ['Fruity Stereo Shaper', 'Stereo Enhancer'], category: 'Utility', tip: 'Fruity Stereo Shaper gives mid-side control. Keep everything below 150 Hz in mono by cutting the side channel there.' },
]
