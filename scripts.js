

let currentSong = new Audio();
let songs = [];
let currfolder = "";
const playBtn = document.querySelector("#play");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let playlists = {
  "ncs": [
    "Bachana_ by Bilal Khan.mp3",
    "DAY & NIGHT _ Tarna _ Byg Byrd _ .mp3",
    "JUDGE _ AMRINDER GILL _ SIMI CHAHAL _ CHANDRA BRAR _ DR ZEUS _.mp3",
    "ONE THOUSAND MILES _ Yo Yo Honey Singh _ Mandy Takhar _ Desi Kalakaar _Bhushan Kumar .mp3",
    "Thodi Si Daaru _ AP Dhillon _ Shreya Ghoshal _ Tara Sutaria .mp3"
  ],
  "Angry_(mood)": [
    "Apna Time Aayega - Gully Boy - Ranveer Singh & Alia Bhatt - DIVINE - Dub Sharma - Zoya Akhtar.mp3",
    "Get Ready To Fight Again- Baaghi 2 - Tiger Shroff - Disha Patani - Ahmed Khan.mp3",
    "Heropanti  - Tiger Shroff  - Arijit Singh, Shreya Ghoshal.mp3"
  ],
  "Bright_(mood)": [
    "Champion's Mindset _ Champion's mindset lyrics .mp3",
    "Nightcore - Unity (Alan Walker) _ Lyrics.mp3"
  ],
  "Chill_(mood)": [
    "'Abhi Toh Party Shuru Hui Hai' FULL VIDEO Song - Khoobsurat - Badshah - Aastha.mp3",
    "Blue Eyes Full Video Song Yo Yo Honey Singh - Blockbuster Song Of 2013.mp3",
    "Chaar Botal Vodka Full Song Feat. Yo Yo Honey Singh, Sunny Leone _ Ragini MMS 2.mp3"
  ],
  "Dark_(mood)": [
    "2 NUMBER - BILAL SAEED & AMRINDER GILL FT. DR. ZEUS & YOUNG FATEH.mp3",
    "Baarish - Bilal Saeed - Punjabi Song.mp3",
    "Suroor - Neha Kakkar & Bilal Saeed - Official Video.mp3"
  ],
  "Diljit": [
    "DILJIT DOSANJH - DAARU MUKGI (Official Video)  Jasmeen Akhtar - MixSingh - SARDAAR JI 3 Songs.mp3",
    "Diljit Dosanjh - G.O.A.T. (Official Music Video).mp3",
    "Diljit Dosanjh- Born To Shine (Official Music Video) G.O.A.T.mp3"
  ],
  "Funky_(mood)": [
    "Blah Blah Blah - Bilal Saeed.mp3",
    "BROWN MUNDE - AP DHILLON - GURINDER GILL - SHINDA KAHLON .mp3",
    "Koka Deke Dil Mangda - Koka - Pranjal Dahiya - Mankirt Aulakh .mp3"
  ],
  "karan aujla": [
    "COURTSIDE KARAN AUJLA  -.mp3",
    "For A Reason  Karan Aujla _ Tania  _ Ikky .mp3",
    "WAVY KARAN AUJLA - .mp3"
  ],
  "Love_(mood)": [
    "Dil Ne Yeh Kaha Hain Dil Se - Akshay, Suniel & Shilpa - Dhadkan .mp3",
    "Jeene Laga Hoon  - Ramaiya Vastavaiya-Girish Kumar, Shruti Haasan -Atif Aslam, Shreya Ghoshal.mp3",
    "Phir Bhi Tumko Chaahunga 💖 Arijit Singh - Arjun K & Shraddha K.mp3"
  ],
  "Uplifting_(mood)": [
    "Ek Din Aap Yun .mp3",
    "Tujh Mein Rab Dikhta Hai - Rab Ne Bana Di Jodi - Shah Rukh Khan, Anushka Sharma - Roop Kumar.mp3",
    "Yeh Ladka Hai Allah- K3G-Shah Rukh Khan-Kajol-Udit Narayan-Alka Yagnik.mp3"
  ],
  "cs": [
    "GOAT _Sidhu Moose Wala - Wazir Patar - Sukh Sanghera - Moosetape.mp3",
    "Hath Fadke _Sidhu Moose Wala X Daljeet Chahal X Pankajj.mp3",
    "LOCK_ SIDHU MOOSE WALA  - THE KIDD  - NAVKARAN BRAR.mp3"
  ],
  "Atif": [
    "Moonrise - Atif Aslam - Amy Jackson - Raj Ranjodh .mp3",
    "Rafta Rafta - Raj Ranjodh - Atif Aslam Ft. Sajal Ali.mp3",
    "Woh Lamhe Woh Baatein  Atif Aslam - Emraan Hashmi .mp3"
  ]
};
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function getSongs(folder) {
  currfolder = "songs/" + folder;
  songs = playlists[folder] || [];
  const songUL = document.querySelector(".songList ul");
  if (!songUL) return;

  songUL.innerHTML = "";
  songs.forEach(song => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="img/music.svg">
      <div class="info">
        <div data-full="${song}">${song.replace(".mp3","").trim()}</div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
        <img src="img/play.svg">
      </div>
    `;
    li.addEventListener("click", () => PlayMusic(song));
    songUL.appendChild(li);
  });
}

function PlayMusic(track, pause = false) {
  currentSong.src = `${currfolder}/${track}`;
  if (!pause) currentSong.play();
  playBtn.src = currentSong.paused ? "img/play.svg" : "img/pause.svg";
  document.querySelector(".songinfo").textContent = track.replace(".mp3", "");
  document.querySelector(".songtime").textContent = "00:00 / 00:00";
}

function displayAlbums() {
  const albums = [
    { folder: "ncs", title: "Happy Hits", description: "Stay happy.", cover: "songs/ncs/cover.jpg" },
    { folder: "Angry_(mood)", title: "Angry Mood", description: "Energetic beats", cover: "songs/Angry_(mood)/cover.jpg" },
    { folder: "Bright_(mood)", title: "Bright Songs", description: "Bright Songs for you", cover: "songs/Bright_(mood)/cover.jpg" }, 
    { folder: "Chill_(mood)", title: "Chill Mood", description: "Relax & enjoy", cover: "songs/Chill_(mood)/cover.jpg" },
    { folder: "Dark_(mood)", title: "Dark Mood", description: "Deep intense tracks", cover: "songs/Dark_(mood)/cover.jpg" },
    { folder: "Diljit", title: "Diljit Hits", description: "Punjabi Vibes", cover: "songs/Diljit/cover.jpg" },
    { folder: "Funky_(mood)", title: "Go Funky", description: "Lets go Funky", cover: "songs/Funky_(mood)/cover.jpg" },
    { folder: "karan aujla", title: "Karan Aujla", description: "Best of Karan Aujla", cover: "songs/karan aujla/cover.jpg" },
    { folder: "Love_(mood)", title: "Love Mood", description: "Romantic tracks", cover: "songs/Love_(mood)/cover.jpg" },
    { folder: "Uplifting_(mood)", title: "Uplifting Mood", description: "Feel good songs", cover: "songs/Uplifting_(mood)/cover.jpg" },
    { folder: "cs", title: "Copyright Songs", description: "Cover Songs for you", cover: "songs/cs/cover.jpg" },
    { folder: "Atif", title: "Atif Aslam", description: "Atif Aslam Songs ", cover: "songs/Atif/cover.jpg" }
  ];

  const cardContainer = document.querySelector(".cards");
  cardContainer.innerHTML = "";

  albums.forEach(album => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.folder = album.folder;
    div.innerHTML = `
      <div class="play"><img src="https://cdn-icons-png.flaticon.com/128/4340/4340106.png"></div>
      <img src="${album.cover}" alt="${album.title}">
      <h2>${album.title}</h2>
      <p class="description">${album.description}</p>
    `;
    div.addEventListener("click", () => {
      getSongs(album.folder);
      if (songs[0]) PlayMusic(songs[0]);
    });
    cardContainer.appendChild(div);
  });
}

function main() {
  getSongs("ncs");
  if (songs[0]) PlayMusic(songs[0], true);
  displayAlbums();

  playBtn.addEventListener("click", () => {
    if (currentSong.paused) currentSong.play();
    else currentSong.pause();
    playBtn.src = currentSong.paused ? "img/play.svg" : "img/pause.svg";
  });

  currentSong.addEventListener("timeupdate", () => {
    const duration = currentSong.duration || 0;
    const currentTime = currentSong.currentTime || 0;
    document.querySelector(".songtime").textContent =
      `${secondsToMinutesSeconds(currentTime)} / ${secondsToMinutesSeconds(duration)}`;
    const circle = document.querySelector(".circle");
    if (circle && duration > 0) circle.style.left = (currentTime / duration) * 100 + "%";
  });

  if (previous) previous.addEventListener("click", () => {
    let index = songs.indexOf(decodeURI(currentSong.src.split("/").pop()));
    if (index > 0) PlayMusic(songs[index - 1]);
  });

  if (next) next.addEventListener("click", () => {
    let index = songs.indexOf(decodeURI(currentSong.src.split("/").pop()));
    if (index < songs.length - 1) PlayMusic(songs[index + 1]);
  });
      // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".sidebar").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".sidebar").style.left = "-120%"
    })
     // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })
  document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })
    // Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
}

main();

let signupbtn=document.querySelector("#btns");
signupbtn.addEventListener("click",()=>{
    window.location.href="index.html";
})

let loginbtn=document.querySelector("#btnl");
loginbtn.addEventListener("click",()=>{
    window.location.href="index.html";
})
let homebtn=document.querySelector(".home");
homebtn.addEventListener("click",()=>{
    document.querySelector(".sidebar").style.left = "-120%";
})