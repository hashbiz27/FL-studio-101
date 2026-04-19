export interface GlossaryTerm {
  term: string
  definition: string
  flNote: string
  lessonLink?: { moduleSlug: string; lessonSlug: string; label: string }
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: '808',
    definition:
      'Originally the Roland TR-808 drum machine (1980). Today "808" refers specifically to its iconic bass drum — a long, booming sub-bass tone that slides in pitch. It is the defining sound of trap, hip-hop, and many electronic genres.',
    flNote:
      'Recreate an 808 in 3xOsc using a single sine oscillator with a pitch-envelope drop. Flex also has ready-made 808 presets under the Bass category.',
    lessonLink: { moduleSlug: 'module-13-trap', lessonSlug: 'trap-808-bass', label: 'The Trap Sound: 808s and Sub Bass' },
  },
  {
    term: 'ADSR',
    definition:
      'Attack, Decay, Sustain, Release — the four stages that describe how a sound evolves over time. Attack is how fast the sound rises; Decay is how fast it falls from peak to sustain level; Sustain is the level held while the key is pressed; Release is how long it fades after the key is released.',
    flNote:
      'Every FL Studio instrument has an ADSR panel (or ENV tab). In 3xOsc or Sytrus, find the envelope section and drag the four knobs to shape how your sound starts and ends.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'Attack',
    definition:
      'The first stage of an envelope — how quickly a sound rises from silence to its peak level after a note is triggered. Short attack = punchy and percussive. Long attack = the sound fades in slowly.',
    flNote:
      'On a compressor (Fruity Limiter or Maximus), attack controls how quickly the compressor kicks in after a loud transient. A slow attack lets the initial punch of a kick pass through before the compressor clamps down.',
    lessonLink: { moduleSlug: 'module-10-compression', lessonSlug: 'compression-by-ear', label: 'Compression by Ear' },
  },
  {
    term: 'Automation',
    definition:
      'Recording changes to a parameter (volume, filter cutoff, reverb mix, etc.) over time so the DAW replays those movements on every playback. Automation brings a mix to life — a filter sweeping open before a drop is automation.',
    flNote:
      'In FL Studio, right-click almost any knob or slider and choose "Create automation clip." The clip appears in the Playlist as a coloured lane you can draw and edit.',
    lessonLink: { moduleSlug: 'module-07-arrangement-song-structure', lessonSlug: 'automation-clips', label: 'Automation Clips' },
  },
  {
    term: 'BPM',
    definition:
      'Beats Per Minute — the tempo of a track. 140 BPM means 140 quarter-note beats occur every minute. Genre norms: lo-fi hip-hop 70–90, trap 130–160 (but with triplets that feel half-time), house 120–130, drum & bass 160–180.',
    flNote:
      'Set your project BPM in the toolbar at the top of the FL Studio window. Click and drag the tempo display up/down, or double-click to type a value. Delay and LFO effects can sync their rate to the project BPM.',
    lessonLink: { moduleSlug: 'module-02-your-first-beat', lessonSlug: 'kick-pattern', label: 'Programming a Kick Pattern' },
  },
  {
    term: 'Bus',
    definition:
      'A shared mixer channel that receives signal from multiple individual tracks. A "drum bus" might receive kick, snare, and hi-hat tracks — letting you apply compression and EQ to all drums at once without changing individual tracks.',
    flNote:
      'In the FL Mixer, set a channel\'s output to another mixer track. That destination track becomes the bus. Colour it differently (right-click the track name) so you can spot it at a glance.',
    lessonLink: { moduleSlug: 'module-08-the-fl-mixer', lessonSlug: 'bus-routing-track-groups', label: 'Bus Routing and Track Groups' },
  },
  {
    term: 'Channel Rack',
    definition:
      'The panel in FL Studio where instruments (synths, drum samples, audio clips) live as channels. Each channel has its own step sequencer pattern. The Channel Rack is where you build beats and melodies before arranging them in the Playlist.',
    flNote:
      'Open with F6. Left-click a channel name to open its instrument. Right-click for colour, rename, routing, and more. Drag channels up and down to reorganise.',
    lessonLink: { moduleSlug: 'module-01-getting-started', lessonSlug: 'channel-rack-basics', label: 'Channel Rack Basics' },
  },
  {
    term: 'Choke Group',
    definition:
      'A drum machine feature where triggering one sound immediately silences another. The classic use: an open hi-hat is "choked" when the closed hi-hat fires, mimicking how a real hi-hat works — you cannot have both open and closed simultaneously.',
    flNote:
      'In FPC, right-click a pad and set its Choke Group number. Any two pads with the same choke group will cut each other off when played.',
    lessonLink: { moduleSlug: 'module-02-your-first-beat', lessonSlug: 'hihats-and-snare', label: 'Adding Hi-Hats and Snare' },
  },
  {
    term: 'Compression',
    definition:
      'A dynamic processing effect that reduces the volume of audio when it exceeds a set threshold. Compressors even out the loudness of a performance, add punch to drums, glue a mix together, and can shape the character of a sound through attack and release settings.',
    flNote:
      'FL Studio\'s built-in compressors include Fruity Limiter (general purpose), Maximus (multiband), and the Compressor module inside mixer effects slots. Set Threshold, Ratio, Attack, and Release.',
    lessonLink: { moduleSlug: 'module-10-compression', lessonSlug: 'compression-by-ear', label: 'Compression by Ear' },
  },
  {
    term: 'Convolution Reverb',
    definition:
      'A type of reverb that uses a recording of a real acoustic space (called an impulse response, or IR) to simulate that space. Sounds more realistic than algorithmic reverb — you can make something sound like it was recorded in the Sydney Opera House.',
    flNote:
      'Fruity Convolver is FL Studio\'s convolution reverb. Load any WAV-format IR file. Many free IR packs are available online for halls, plates, rooms, and unusual spaces.',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'reverb-space-depth', label: 'Reverb: Space and Depth' },
  },
  {
    term: 'DAW',
    definition:
      'Digital Audio Workstation — software for recording, editing, arranging, and mixing audio and MIDI. FL Studio, Ableton Live, Logic Pro, and Pro Tools are all DAWs. The DAW is the central tool of modern music production.',
    flNote:
      'FL Studio is an image-line DAW known for its pattern-based workflow (Channel Rack + Playlist), making it particularly popular in beat-making, trap, and electronic music.',
    lessonLink: { moduleSlug: 'module-01-getting-started', lessonSlug: 'interface-overview', label: 'FL Studio Interface Overview' },
  },
  {
    term: 'Decay',
    definition:
      'The second stage of an ADSR envelope — how quickly the sound drops from its peak level down to the sustain level after the initial attack. On a snare drum, a short decay gives a tight snap; a longer decay gives a more ringy, open sound.',
    flNote:
      'Found in the ENV section of every FL Studio instrument. In 3xOsc, look for the "DEC" knob next to ATT (attack) and SUS (sustain).',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'Delay',
    definition:
      'An audio effect that plays back a copy of the signal after a set time interval, then feeds that copy back into itself at a reduced volume, creating echoes. Can be tempo-synced (echoes land on beats) or set in milliseconds for subtle thickening.',
    flNote:
      'Fruity Delay 3 is the main delay in FL Studio. Enable tempo sync, set note subdivision (1/4, 1/8, dotted 1/8 for "Edge of Tomorrow"-style triplet echoes), and control decay with the Feedback knob.',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'delay-rhythm-echo', label: 'Delay: Rhythm and Echo' },
  },
  {
    term: 'Dithering',
    definition:
      'The process of adding a tiny, mathematically shaped noise signal when converting audio from a higher bit depth (24-bit) to a lower one (16-bit). Without dithering, this conversion introduces harsh quantisation distortion. With dithering, the distortion becomes an inaudible noise floor.',
    flNote:
      'When exporting in FL Studio (File → Export → WAV), enable dithering only if you are exporting at 16-bit. For 24-bit or 32-bit exports, leave it off — dithering a 24-bit file adds noise for no benefit.',
    lessonLink: { moduleSlug: 'module-12-mastering', lessonSlug: 'exporting-formats-delivery', label: 'Exporting: Formats, Dithering, and Delivery' },
  },
  {
    term: 'Dynamic EQ',
    definition:
      'An equaliser where the gain of a band changes automatically in response to the signal level, like a frequency-specific compressor. Useful for controlling a boomy bass frequency that only becomes a problem on loud notes, or taming harsh vocals without dulling them at quieter moments.',
    flNote:
      'Parametric EQ 2 in FL Studio can be set to dynamic mode on individual bands. Alternatively, Maximus\'s multiband approach can achieve similar frequency-dependent compression results.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'dynamic-eq-multiband', label: 'Dynamic EQ and Multiband Processing' },
  },
  {
    term: 'Envelope',
    definition:
      'A shape that describes how a parameter changes over time, typically volume or filter cutoff. The most common envelope shape is ADSR (Attack, Decay, Sustain, Release). Envelopes are what make a piano note sound different from a sustained organ note — even when the same pitch is held.',
    flNote:
      'In FL Studio instruments, click the ENV/LFO tab to access the envelope controls. You can assign envelopes to volume, panning, pitch, filter cutoff, and filter resonance independently.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'EQ (Equaliser)',
    definition:
      'A tool that boosts or cuts the volume of specific frequency ranges. Used to remove problem frequencies (rumble, boxiness, harshness), shape the character of a sound, and carve space in a mix so elements don\'t mask each other.',
    flNote:
      'Parametric EQ 2 is the primary EQ in FL Studio. It has up to 7 bands, a built-in spectrum analyser, and a mid-side mode. Add it to any mixer insert slot. Use the spectrum view to visually identify problem frequencies.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'how-frequency-works', label: 'How Frequency Works in a Mix' },
  },
  {
    term: 'Filter',
    definition:
      'A circuit (hardware) or algorithm (software) that removes or reduces certain frequency ranges. Common filter types: Low-Pass (removes highs, keeps lows), High-Pass (removes lows, keeps highs), Band-Pass (keeps a range, removes everything outside), and Notch (removes a narrow band).',
    flNote:
      'Every FL Studio synth has a built-in filter. In 3xOsc, use the "CUT" (cutoff) and "RES" (resonance) knobs. Automating the cutoff knob over time creates filter sweeps — a classic DJ and electronic music effect.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'FM Synthesis',
    definition:
      'Frequency Modulation synthesis — a technique where one oscillator (the modulator) modulates the frequency of another (the carrier) at audio rate, producing complex, harmonically rich timbres. The basis of the Yamaha DX7 and countless "electric piano", bell, and metallic sounds.',
    flNote:
      'Sytrus is FL Studio\'s FM synthesizer. It has up to 6 operators (oscillators that can act as carriers or modulators), each with its own envelope and waveform. The routing matrix shows how operators modulate each other.',
    lessonLink: { moduleSlug: 'module-17-sound-design-advanced', lessonSlug: 'fm-synthesis', label: 'FM Synthesis Deep-Dive' },
  },
  // ── Part B: G–P ─────────────────────────────────────────────────────────
  {
    term: 'Gain',
    definition:
      'The level or amplitude of an audio signal at a particular point in the signal chain. Gain is measured in decibels (dB). Turning up the gain before a plugin increases the signal hitting that plugin; turning it down reduces it. Gain is distinct from volume — gain affects what a plugin "sees", volume affects what you hear at the output.',
    flNote:
      'Every FL Studio mixer track has a gain knob at the top of the channel strip. For precise gain staging, use the Fruity Balance plugin or add a Parametric EQ 2 band set to "None" type as a gain trim.',
    lessonLink: { moduleSlug: 'module-06-mixing-essentials', lessonSlug: 'gain-staging', label: 'Gain Staging: Getting Levels Right' },
  },
  {
    term: 'Gain Staging',
    definition:
      'The practice of setting appropriate signal levels at every stage of the signal chain — from individual instruments through insert effects to the master bus. Proper gain staging prevents clipping, reduces noise, and ensures plugins behave as intended (many are designed for signals averaging around −18 dBFS).',
    flNote:
      'In FL Studio, aim for channels peaking around −12 to −6 dBFS on the mixer meters before any processing. Use the channel volume knob (not the master fader) to adjust individual levels. Check the master meter — if it\'s clipping before your limiter, pull down individual channels.',
    lessonLink: { moduleSlug: 'module-06-mixing-essentials', lessonSlug: 'gain-staging', label: 'Gain Staging: Getting Levels Right' },
  },
  {
    term: 'Ghost Notes',
    definition:
      'In the Piano Roll, ghost notes are a visual display of notes from other patterns that share the same instrument channel. They appear as translucent/greyed-out notes behind the active pattern, letting you see how a melody in one pattern aligns with chords from another without switching views.',
    flNote:
      'Enable ghost notes via the Piano Roll\'s View menu → "Ghost channels." They are read-only — you can see them but not edit them. Extremely useful for aligning bass lines with chord voicings.',
    lessonLink: { moduleSlug: 'module-05-piano-roll-mastery', lessonSlug: 'ghost-notes', label: 'Ghost Notes' },
  },
  {
    term: 'Granular Synthesis',
    definition:
      'A synthesis method that breaks audio into thousands of tiny fragments called "grains" (typically 1–100 ms long) and reassembles them in various ways — changing pitch independently of playback speed, creating pads from any sound, or producing stuttery, glitchy textures.',
    flNote:
      'Harmor\'s Image Synthesis section can approximate granular behaviour by using audio images and the blur/prism settings. Flex also includes several granular-style presets under the "Pad" and "Texture" categories.',
    lessonLink: { moduleSlug: 'module-17-sound-design-advanced', lessonSlug: 'granular-synthesis', label: 'Granular Synthesis and Textures' },
  },
  {
    term: 'Gross Beat',
    definition:
      'An FL Studio effect plugin that manipulates the volume and pitch of audio in real time using user-drawn tables, synced to the project tempo. Used for gating, stutters, vinyl-scratch effects, rhythmic chopping, and sidechain-style pumping without a compressor.',
    flNote:
      'Add Gross Beat as an insert on any mixer channel. The left half controls volume (gate patterns), the right half controls pitch (scratch/stutter). Each half has 36 preset slots — automate the slot number to switch patterns mid-track.',
    lessonLink: { moduleSlug: 'module-17-sound-design-advanced', lessonSlug: 'sidechain-parallel-creative', label: 'Sidechain and Parallel Processing as Creative Tools' },
  },
  {
    term: 'High-Pass Filter (HPF)',
    definition:
      'A filter that passes (allows) frequencies above its cutoff point and removes (attenuates) frequencies below it. Also called a "low-cut" filter. The most common mixing tool — applied to most non-bass elements to remove unnecessary low-frequency rumble and mud.',
    flNote:
      'In Parametric EQ 2, the leftmost band type icons include a high-pass option (the ramp-up shape). Set it to 80–120 Hz on guitars, keys, and synths; 200–400 Hz on percussion. Steeper slopes (12 or 24 dB/octave) remove more low end.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'surgical-eq', label: 'Surgical EQ: Fixing Problem Frequencies' },
  },
  {
    term: 'Humanisation',
    definition:
      'The process of adding subtle randomness to MIDI note timing, velocity, and length to make programmed patterns feel less robotic and more like a human performance. Even small amounts of variation — ±5 ms timing, ±10% velocity — have a big effect on feel.',
    flNote:
      'In the Piano Roll, select all notes and use the "Humanize" function (right-click → Humanize, or Shift+H). You can also manually adjust individual note velocities in the velocity lane at the bottom of the Piano Roll.',
    lessonLink: { moduleSlug: 'module-05-piano-roll-mastery', lessonSlug: 'humanising-velocity-timing', label: 'Humanising with Velocity and Timing' },
  },
  {
    term: 'Impulse Response (IR)',
    definition:
      'A recording of a real acoustic space or hardware device\'s behaviour, captured by playing a brief test signal (a "sweep" or "click") and recording its decay. IRs are the raw material for convolution reverb — the recording is mathematically convolved with your audio to impose the same acoustic character.',
    flNote:
      'Fruity Convolver loads IR files in WAV format. A good starting library of free IRs (rooms, halls, plates, springs) can be found at sites like OpenAIR or Voxengo. Drag the IR WAV directly onto the Convolver interface.',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'reverb-space-depth', label: 'Reverb: Space and Depth' },
  },
  {
    term: 'Layering',
    definition:
      'Combining two or more sounds playing the same part to create a richer, fuller composite sound. Classic examples: layering a sine sub with a mid-bass for low-end that translates to small speakers; layering a transient-heavy snare sample with a deeper snare body.',
    flNote:
      'In FL Studio, create multiple Channel Rack channels and assign them all to the same MIDI pattern. Or stack them inside a Patcher instrument. Use the Mixer to blend their individual levels.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'layering-sounds', label: 'Layering Sounds' },
  },
  {
    term: 'LFO',
    definition:
      'Low-Frequency Oscillator — an oscillator running below the range of human hearing (typically 0.1–20 Hz) used as a modulation source. An LFO modulating filter cutoff creates a wah or sweep effect; modulating pitch creates vibrato; modulating volume creates tremolo.',
    flNote:
      'Every FL Studio instrument has an LFO panel next to the envelope controls. Set Speed (rate), Depth (amount), and waveform shape (sine, triangle, square, etc.). Enable tempo sync to lock the LFO to the project BPM.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'Limiter',
    definition:
      'A compressor with an extremely high ratio (often ∞:1) that sets a hard ceiling on the signal level. Audio cannot exceed the limiter\'s threshold. Used on the master bus to prevent digital clipping and to maximise loudness for streaming.',
    flNote:
      'Fruity Limiter is FL Studio\'s go-to limiter. Add it as the last insert effect on the master mixer track. Set the ceiling to −1.0 dBTP to prevent inter-sample peaks. Watch the gain reduction meter — if it\'s working hard constantly, the mix is too loud before the limiter.',
    lessonLink: { moduleSlug: 'module-12-mastering', lessonSlug: 'master-bus-comp-limiting', label: 'Master Bus Compression and Limiting' },
  },
  {
    term: 'LUFS',
    definition:
      'Loudness Units relative to Full Scale — the international standard for measuring perceived loudness (as opposed to peak loudness). Streaming platforms normalise tracks to a target LUFS level: Spotify targets −14 LUFS, Apple Music −16 LUFS, YouTube −14 LUFS. Mastering to these targets ensures your track won\'t be turned down.',
    flNote:
      'Fruity Limiter displays a loudness meter in LUFS mode. Aim for an integrated LUFS of −14 to −9 LUFS depending on genre when mastering for streaming. Going louder than −9 LUFS will be turned down by all major platforms anyway.',
    lessonLink: { moduleSlug: 'module-12-mastering', lessonSlug: 'loudness-lufs-streaming', label: 'Loudness, LUFS, and Streaming Targets' },
  },
  {
    term: 'Mastering',
    definition:
      'The final step of audio production — preparing and optimising a finished mix for distribution. Mastering involves final EQ, stereo enhancement, compression, limiting, loudness optimisation, and quality control. It is the bridge between your mix and the listener\'s ear.',
    flNote:
      'FL Studio is fully capable of mastering. A typical master chain on the master mixer track: Parametric EQ 2 → Stereo Enhancer → Maximus (multiband compression) → Fruity Limiter. Keep gain reduction on the limiter under 3 dB for transparent results.',
    lessonLink: { moduleSlug: 'module-12-mastering', lessonSlug: 'what-mastering-is', label: 'What Mastering Is (and Isn\'t)' },
  },
  {
    term: 'Mid-Side EQ',
    definition:
      'An equaliser mode that splits the stereo signal into its Mid (centre, mono) component and Side (difference, stereo width) component, allowing independent EQ on each. Lets you keep the low end tight in mono while boosting air only in the sides.',
    flNote:
      'Parametric EQ 2 has a mid-side mode — click the "ST" button in the EQ and it reveals separate M and S displays. Cut lows on the side channel (below 150–200 Hz) for a tighter, more mono-compatible low end.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'mid-side-eq', label: 'Mid-Side EQ' },
  },
  {
    term: 'Mixer',
    definition:
      'The mixing console of a DAW — where individual instrument and audio tracks are balanced, processed with effects, routed to buses, and combined into a stereo output. In FL Studio, the Mixer is separate from the Channel Rack and must be manually routed.',
    flNote:
      'Open with F9. Route each Channel Rack instrument to its own Mixer track by selecting the instrument and pressing Ctrl+L, or by clicking the target Mixer track\'s LED while the instrument is selected. Each track has insert effect slots on the right.',
    lessonLink: { moduleSlug: 'module-08-the-fl-mixer', lessonSlug: 'mixer-architecture-routing', label: 'Mixer Architecture and Routing' },
  },
  {
    term: 'Modulation',
    definition:
      'Using one parameter (the modulation source) to automatically vary another parameter (the modulation destination) over time. Modulation is what makes sounds move and evolve. LFOs, envelopes, velocity, and MIDI controllers are all modulation sources.',
    flNote:
      'In Sytrus and Harmor, the modulation matrix lets you route any source (LFO, envelope, operator level) to any destination. In simpler instruments like 3xOsc, right-click any knob and choose "Link to controller" to assign modulation sources.',
    lessonLink: { moduleSlug: 'module-17-sound-design-advanced', lessonSlug: 'advanced-modulation', label: 'Advanced Modulation Routing' },
  },
  {
    term: 'Mono',
    definition:
      'Single-channel audio — one signal sent identically to both speakers. As opposed to stereo (two different channels, left and right). Mono compatibility is critical: most club systems, phone speakers, and smart speakers play mono. A mix that sounds good in stereo but loses elements in mono has a phase problem.',
    flNote:
      'Check mono compatibility in FL Studio by inserting Fruity Stereo Shaper on the master track and temporarily collapsing the stereo field to mono. Or use the "Stereo" button on Parametric EQ 2 to switch between stereo and mono metering.',
    lessonLink: { moduleSlug: 'module-06-mixing-essentials', lessonSlug: 'panning-stereo-width', label: 'Panning and Stereo Width' },
  },
  {
    term: 'Multiband Compression',
    definition:
      'Compression applied to separate frequency bands independently. Instead of a compressor reacting to the entire signal, each band (low, mid, high) has its own threshold, ratio, attack, and release. Allows tightening up a boomy low end without affecting the high-frequency transients.',
    flNote:
      'Maximus is FL Studio\'s multiband compressor and maximizer. It splits the signal into Low, Mid, and High bands. Use conservative settings on the master bus — Maximus is very powerful and easy to over-process.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'dynamic-eq-multiband', label: 'Dynamic EQ and Multiband Processing' },
  },
  {
    term: 'Oscillator',
    definition:
      'The basic sound generator of a synthesizer — produces a continuous repeating waveform: sine (pure tone), sawtooth (bright, buzzy), square (hollow, buzzy), and triangle (softer, between sine and square). The oscillator\'s waveform determines the harmonic content and fundamental character of a synth sound.',
    flNote:
      '3xOsc has three oscillators per voice. You can detune them against each other for thickness, adjust volume and panning per oscillator, and mix waveform types. Each oscillator can also be set to a phase offset relative to the others.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'understanding-oscillators', label: 'Understanding Oscillators' },
  },
  {
    term: 'Parallel Compression',
    definition:
      'A mixing technique where a heavily compressed copy of a signal is blended back with the unprocessed dry signal. The result retains the dynamic punch and transients of the dry signal while gaining the density and sustain of the compressed copy. Often called "New York compression" when applied to drums.',
    flNote:
      'In FL Studio, set up a send from your drum bus to a new Mixer track. Apply heavy compression on the send track. Blend it back with the dry drum bus using the send track\'s volume fader. The main drum bus remains uncompressed.',
    lessonLink: { moduleSlug: 'module-10-compression', lessonSlug: 'parallel-compression', label: 'Parallel Compression' },
  },
  {
    term: 'Parametric EQ',
    definition:
      'An equaliser with fully adjustable parameters for each band: centre frequency (which frequency is affected), gain (how much boost or cut), and Q or bandwidth (how wide or narrow the affected range is). Parametric EQ is the most flexible and common EQ type in music production.',
    flNote:
      'Parametric EQ 2 is the primary EQ plugin in FL Studio. It includes up to 7 bands with adjustable type (peak, shelf, HPF, LPF, notch), a real-time spectrum analyser, and mid-side processing mode.',
    lessonLink: { moduleSlug: 'module-09-eq-frequency', lessonSlug: 'surgical-eq', label: 'Surgical EQ: Fixing Problem Frequencies' },
  },
  {
    term: 'Piano Roll',
    definition:
      'A grid-based MIDI editor where notes are represented as horizontal bars — their vertical position is pitch (higher = higher pitch), their horizontal position is time, and their length is note duration. Named after the paper rolls used in player pianos. The Piano Roll is where melodies, chords, and basslines are programmed.',
    flNote:
      'Open the Piano Roll with F7 (or double-click a pattern block in the Playlist). Draw notes with the pencil tool, select and move them with the select tool. The velocity lane at the bottom controls how hard each note is hit.',
    lessonLink: { moduleSlug: 'module-05-piano-roll-mastery', lessonSlug: 'drawing-melodies', label: 'Drawing Melodies' },
  },
  {
    term: 'Playlist',
    definition:
      'The arrangement view in FL Studio — a timeline where pattern blocks (from the Channel Rack) and audio clips are placed across tracks to build a full song structure. Patterns can be reused: drop the same chorus pattern three times in the Playlist without duplicating data.',
    flNote:
      'Open with F5. Each row is a track (instrument or audio). Drag pattern blocks from the left panel, or draw new blocks directly on the timeline. Patterns are reusable — right-click a block to clone it into a unique copy if you need to edit one instance separately.',
    lessonLink: { moduleSlug: 'module-01-getting-started', lessonSlug: 'playlist-basics', label: 'Playlist Basics' },
  },
  // ── Part C: R–W ─────────────────────────────────────────────────────────
  {
    term: 'Release',
    definition:
      'The fourth and final stage of an ADSR envelope — how long the sound takes to fade to silence after the note is released. A short release gives a tight, dry sound; a long release lets notes ring out. On a compressor, release sets how quickly the gain reduction stops after the signal drops below the threshold.',
    flNote:
      'On Fruity Limiter used as a compressor, the Release knob is labelled "REL." For transparent compression, try setting release to "Auto" and letting the plugin choose based on the programme material.',
    lessonLink: { moduleSlug: 'module-10-compression', lessonSlug: 'compression-by-ear', label: 'Compression by Ear' },
  },
  {
    term: 'Resampling',
    definition:
      'Recording the audio output of your own project back into the DAW as an audio clip. Used to "bake in" CPU-heavy effects, to process a full mix bus through an external device, or to create new source material by recording a bounced loop and then chopping and pitching it.',
    flNote:
      'In FL Studio, set the audio input to "FL Studio (Loopback)" and use Edison (mounted on the master mixer track) to record your output in real time. Resampling a loop through Edison is a classic way to give it grit and vibe.',
    lessonLink: { moduleSlug: 'module-04-sampling-chopping', lessonSlug: 'resampling', label: 'Resampling Your Own Sounds' },
  },
  {
    term: 'Reverb',
    definition:
      'An audio effect that simulates the reflections of a sound bouncing off surfaces in a space — a room, hall, plate, or spring. Reverb adds depth and dimension, making dry, close sounds feel like they exist in a real environment. Too much washes out clarity; too little sounds unnatural.',
    flNote:
      'FL Studio includes Fruity Reeverb 2 (algorithmic, CPU-light) and Fruity Convolver (convolution, uses IR files). Best practice: put reverb on a send track and feed it from multiple instruments so they share the same "room."',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'reverb-space-depth', label: 'Reverb: Space and Depth' },
  },
  {
    term: 'Routing',
    definition:
      'How audio signals are connected and directed through the mixer. Routing determines which tracks feed into which buses, which send tracks receive signal from inserts, and how the final mix reaches the master output. Poor routing leads to signal going nowhere or doubling up unexpectedly.',
    flNote:
      'In the FL Mixer, click a track to select it. The "send" buttons (small arrows on other tracks) light up to show routing. Click a send button to route the selected track\'s output to another track. Use the "Input" selector at the top to route audio recordings into specific tracks.',
    lessonLink: { moduleSlug: 'module-08-the-fl-mixer', lessonSlug: 'mixer-architecture-routing', label: 'Mixer Architecture and Routing' },
  },
  {
    term: 'Sampling',
    definition:
      'The practice of recording a portion of an existing sound recording and reusing it in a new composition — either as-is, pitched, chopped, or heavily processed. Sampling is foundational to hip-hop, lo-fi, and dance music. It also refers more broadly to the use of any pre-recorded audio material (drum samples, one-shots).',
    flNote:
      'FL Studio includes multiple samplers: Flex (preset-based), the Fruity Sampler (single samples with pitch and envelope), Slicex (loop slicing), DirectWave (multi-sample instruments), and Edison (audio recording/editing). FPC hosts drum sample pads.',
    lessonLink: { moduleSlug: 'module-04-sampling-chopping', lessonSlug: 'how-sampling-works', label: 'How Sampling Works' },
  },
  {
    term: 'Saturation',
    definition:
      'A form of soft harmonic distortion that adds warmth, colour, and presence to a sound by generating overtones (additional harmonics). Originally a by-product of pushing analog tape or tube amplifiers beyond their ideal range. In modern production, saturation is used deliberately to add life to digital sounds.',
    flNote:
      'Fruity Blood Overdrive adds saturation with adjustable pre-amp and band filter. For subtler tape-style saturation, try Maximus with the soft-clip ceiling engaged. Even a slight Drive on Fruity Limiter adds gentle saturation to the mix bus.',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'distortion-saturation', label: 'Distortion and Saturation' },
  },
  {
    term: 'Send Track',
    definition:
      'A mixer track that receives a copy of signal sent from other tracks (via send amounts), processes it with shared effects (usually reverb or delay), and feeds the result back into the mix. Using a send means multiple tracks share one reverb instance, keeping CPU low and the "room" sound consistent.',
    flNote:
      'In the FL Mixer, select the destination track (your "Reverb Return") and turn off its send to the master for a moment. Then on each source track, click the small arrow button pointing to the Reverb Return to enable the send. Adjust the send amount per-track.',
    lessonLink: { moduleSlug: 'module-06-mixing-essentials', lessonSlug: 'sends-return-tracks', label: 'Sends and Return Tracks' },
  },
  {
    term: 'Sidechain',
    definition:
      'A technique where one signal (the sidechain input) controls the behaviour of an effect processing another signal. The classic use: the kick drum sidechains a compressor on the bass, so the bass ducks every time the kick hits — creating the "pumping" sound in house and EDM.',
    flNote:
      'FL Studio has a dedicated sidechain routing system in the Mixer. Send the kick to a sidechain input (Sidechain tab on Fruity Peak Controller or via the Fruity Limiter\'s sidechain input selector). Alternatively, use Gross Beat\'s volume table for pattern-based gating without a compressor.',
    lessonLink: { moduleSlug: 'module-08-the-fl-mixer', lessonSlug: 'sidechain-routing', label: 'Sidechain Routing' },
  },
  {
    term: 'Signal Chain',
    definition:
      'The sequential path an audio signal travels through effects and processors. The order matters — EQ before compression gives different results than compression before EQ. A typical insert signal chain: Gate → EQ → Compressor → Saturation → Limiter.',
    flNote:
      'In the FL Mixer, insert effects are applied in top-to-bottom order within a track\'s effect slot list. Drag effects up and down to reorder them. Right-click an effect slot to move it or disable it without removing it.',
    lessonLink: { moduleSlug: 'module-08-the-fl-mixer', lessonSlug: 'insert-effects-signal-chain', label: 'Insert Effects and Signal Chain Order' },
  },
  {
    term: 'Step Sequencer',
    definition:
      'A pattern-based sequencer that divides a bar into equal steps (usually 16 for a standard 4/4 bar at 1/16th note resolution) and lets you toggle each step on or off for each instrument. The classic drum machine interface — simple, visual, and fast for programming beats.',
    flNote:
      'The Channel Rack in FL Studio defaults to the step sequencer view. Each row is an instrument; each button is a 1/16th note step. Right-click a lit button to adjust its volume and panning. Switch a channel to Piano Roll mode for more complex patterns.',
    lessonLink: { moduleSlug: 'module-02-your-first-beat', lessonSlug: 'step-sequencer-vs-piano-roll', label: 'Step Sequencer vs Piano Roll' },
  },
  {
    term: 'Sub Bass',
    definition:
      'The lowest octave of bass frequencies, roughly 20–80 Hz. Sub bass is felt as much as heard — it\'s the physical pressure in a club or car. Sub bass sits below the range of most laptop speakers, which is why many producers accidentally over-boost it when monitoring on small speakers.',
    flNote:
      'Design sub bass with a sine oscillator in 3xOsc or use an 808 preset in Flex. Always check your sub on headphones or a subwoofer. Use a spectrum analyser (inside Parametric EQ 2) to see the sub region — if it\'s very loud but inaudible on your monitors, it may be too loud for translation.',
    lessonLink: { moduleSlug: 'module-16-bass-low-end', lessonSlug: 'sub-vs-mid-bass', label: 'Sub Bass vs Mid Bass: Understanding the Low End' },
  },
  {
    term: 'Subtractive Synthesis',
    definition:
      'The most common synthesis method — start with a harmonically rich waveform (sawtooth, square) from an oscillator, then use filters to remove (subtract) harmonics until you get the desired tone. Filters and envelopes do the heavy shaping. Analogues to carving a sculpture from a block of marble.',
    flNote:
      '3xOsc is FL Studio\'s dedicated subtractive synthesizer. Use sawtooth or square waves from the oscillators, shape the tone with the filter cutoff and resonance, and sculpt the dynamics with the ADSR envelope. It is the fastest synth in FL for learning synthesis fundamentals.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'subtractive-synthesis-3xosc', label: 'Subtractive Synthesis with 3xOsc' },
  },
  {
    term: 'Sustain',
    definition:
      'The third stage of an ADSR envelope — the level at which a sound holds as long as a key is pressed, after the initial attack and decay transient. A piano note has a long sustain (held by the damper pedal) followed by gradual fade; a plucked note has very little sustain and a long natural release.',
    flNote:
      'In FL Studio instruments, sustain is the "SUS" knob in the envelope section. Setting sustain to zero creates a sound that decays away completely regardless of how long the key is held — useful for percussive or plucky sounds.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'filters-and-envelopes', label: 'Filters and Envelopes' },
  },
  {
    term: 'Swing / Shuffle',
    definition:
      'A rhythmic groove technique where off-beat (even-numbered) 16th or 8th notes are delayed slightly — making the groove feel like it "leans" forward and back rather than being perfectly on a grid. Swing is measured as a percentage: 50% is straight (no swing); 66% is full triplet swing.',
    flNote:
      'In FL Studio, the swing amount is set globally in the Channel Rack (the "SWING" knob). Individual steps in the step sequencer can be shifted by right-clicking them and adjusting their timing offset. The Piano Roll Humanize tool also offers a swing randomisation option.',
    lessonLink: { moduleSlug: 'module-15-house', lessonSlug: 'house-groove', label: 'Groove and Swing in House Music' },
  },
  {
    term: 'Tempo',
    definition:
      'The speed of a piece of music, measured in BPM (beats per minute). Tempo is fundamental — it affects everything from the energy of a track to how delay times and LFO rates sound. Changing tempo mid-track is called a tempo change and is used for drama, transitions, or genre-blending.',
    flNote:
      'The tempo is displayed and edited in the FL Studio toolbar. You can automate tempo changes by right-clicking the BPM display and choosing "Create automation clip." This automation clip can then be placed in the Playlist like any other.',
    lessonLink: { moduleSlug: 'module-02-your-first-beat', lessonSlug: 'kick-pattern', label: 'Programming a Kick Pattern' },
  },
  {
    term: 'Transient',
    definition:
      'The sharp, brief initial spike of a sound immediately after it is triggered — the "click" at the start of a kick, the "crack" of a snare, or the "attack" of a plucked string. Transients give percussion its punch and definition. Compressors\' attack settings control how much of the transient passes through before gain reduction kicks in.',
    flNote:
      'Use Transient Processor (or a compressor with a slow attack) to emphasise transients, or a fast attack to reduce them. In the Fruity Limiter, a slow attack lets transients through for punch; a fast attack squashes them for a flatter, more sustained sound.',
    lessonLink: { moduleSlug: 'module-10-compression', lessonSlug: 'transient-shaping', label: 'Transient Shaping' },
  },
  {
    term: 'Velocity',
    definition:
      'In MIDI, velocity represents how hard a note is played — a value from 0 to 127. Higher velocity typically means louder and sometimes brighter (if the instrument is velocity-sensitive). Varying note velocities across a pattern is one of the fastest ways to add musicality and groove to programmed drums and melodies.',
    flNote:
      'In the Piano Roll, the velocity lane at the bottom shows bars for each note. Drag individual bars to adjust velocity. Select notes and use the Randomise function to humanise velocities. In the step sequencer, right-click a lit button and drag to set its velocity.',
    lessonLink: { moduleSlug: 'module-05-piano-roll-mastery', lessonSlug: 'humanising-velocity-timing', label: 'Humanising with Velocity and Timing' },
  },
  {
    term: 'Voice Leading',
    definition:
      'The practice of moving from one chord to the next with the smoothest possible motion in each individual note (voice). Instead of jumping all chord notes up or down together, voice leading keeps common tones in place and moves other notes by the smallest interval possible, creating a sense of connection and flow.',
    flNote:
      'In the Piano Roll, use ghost notes to see the previous chord while drawing the next. Try to keep one or two notes stationary (common tones) between chords and move other notes up or down by only one or two semitones.',
    lessonLink: { moduleSlug: 'module-05-piano-roll-mastery', lessonSlug: 'chord-stacks', label: 'Chord Stacks That Sound Good' },
  },
  {
    term: 'Wavetable Synthesis',
    definition:
      'A synthesis method that uses stored snapshots of waveforms (wavetables) and sweeps or morphs through them to create evolving, complex timbres. The position within the wavetable can be modulated by an LFO or envelope, producing sounds that feel "alive" and constantly moving.',
    flNote:
      'Harmor can approximate wavetable-style synthesis using its Image Synthesis section. Flex includes many presets built from wavetable engines. For a dedicated wavetable workflow, explore third-party plugins like Serum or Vital (both have free tiers).',
    lessonLink: { moduleSlug: 'module-17-sound-design-advanced', lessonSlug: 'wavetable-synthesis', label: 'Wavetable Synthesis' },
  },
  {
    term: 'Wet / Dry',
    definition:
      'The balance between the processed (wet) signal and the original unprocessed (dry) signal from an effect. 100% wet = only the effect output; 100% dry = the effect is bypassed. Most mix decisions benefit from a blend: a reverb at 20% wet adds space without washing out the source.',
    flNote:
      'Almost every FL Studio effect plugin has a wet/dry knob. On the Fruity Reeverb 2, it\'s labelled "WET" and "DRY." When using effects on send tracks (the recommended approach for reverb/delay), set the send track\'s effect to 100% wet and control the blend via the send amount.',
    lessonLink: { moduleSlug: 'module-11-space-effects', lessonSlug: 'building-effects-chain', label: 'Building a Coherent Effects Chain' },
  },
  {
    term: 'White Noise',
    definition:
      'Audio containing all frequencies at equal energy — sounds like static or hiss. In synthesis, white noise is used as a sound source for snares and cymbals (filtered to taste), for breath and air sounds, and for transitions (a noise sweep rising into a drop).',
    flNote:
      'In 3xOsc, set any oscillator\'s waveform to the noise option. Apply a band-pass or high-pass filter to shape the colour — high-pass to taste gives you a hiss, narrow band-pass gives you a pitched noise texture. Automate the filter cutoff for a classic noise sweep riser.',
    lessonLink: { moduleSlug: 'module-03-sound-design-fundamentals', lessonSlug: 'understanding-oscillators', label: 'Understanding Oscillators' },
  },
]

