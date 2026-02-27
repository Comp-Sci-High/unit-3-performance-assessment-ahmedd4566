const express = require("express")
const app = express()

app.use((req,res,next) => {
console.log(req.method, req.url)
next()
})

const samples = [
  { id: 1, name: "Dark Trap Drums", type: "drum", bpm: 140, key: "N/A", genre: "Trap", durationSeconds: 12, fileUrl: "samples/dark-trap-drums.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 2, name: "Ambient Pad Melody", type: "melody", bpm: 130, key: "F Minor", genre: "Ambient", durationSeconds: 18, fileUrl: "samples/ambient-pad.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 3, name: "Detroit Bassline", type: "bass", bpm: 150, key: "G Minor", genre: "Detroit", durationSeconds: 10, fileUrl: "samples/detroit-bass.wav", producer: "Ahmed", isRoyaltyFree: false },
  { id: 4, name: "Jersey Club Kick Loop", type: "drum", bpm: 145, key: "N/A", genre: "Jersey Club", durationSeconds: 8, fileUrl: "samples/jersey-kick.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 5, name: "Sad Piano Chords", type: "melody", bpm: 120, key: "D Minor", genre: "Hip Hop", durationSeconds: 16, fileUrl: "samples/sad-piano.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 6, name: "Rage Synth Lead", type: "melody", bpm: 155, key: "E Minor", genre: "Rage", durationSeconds: 14, fileUrl: "samples/rage-lead.wav", producer: "Ahmed", isRoyaltyFree: false },
  { id: 7, name: "LoFi Drum Loop", type: "drum", bpm: 90, key: "N/A", genre: "LoFi", durationSeconds: 20, fileUrl: "samples/lofi-drums.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 8, name: "Vocal Chop FX", type: "vocal", bpm: 140, key: "C Minor", genre: "Trap", durationSeconds: 6, fileUrl: "samples/vocal-chop.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 9, name: "Boom Bap Snare", type: "drum", bpm: 95, key: "N/A", genre: "Boom Bap", durationSeconds: 5, fileUrl: "samples/boom-bap-snare.wav", producer: "Ahmed", isRoyaltyFree: true },
  { id: 10, name: "808 Glide Bass", type: "bass", bpm: 138, key: "A Minor", genre: "Trap", durationSeconds: 11, fileUrl: "samples/808-glide.wav", producer: "Ahmed", isRoyaltyFree: false }
]

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to the Music Sample Library API. View different music production samples created by Ahmed.</h1>")
})

app.get("/docs", (req, res) => {
     res.status(200).send("<h1>Use {/api/samples} to see all samples. Use {/api/samples/:id} to view a specific sample.</h1>")
})

app.get("/api/samples", (req, res) => {
    res.status(200).json(samples)
})

app.get("/api/samples/:id", (req, res) => {
    res.status(200).json(samples[req.params.id - 1])
})

app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>")
})

app.listen(3000, () => {
  console.log("Music Sample API is running")
})