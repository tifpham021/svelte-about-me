<script>
  import { elasticOut } from "svelte/easing";
  import ImageCard from "./lib/ImageCard.svelte";
  import blindBoxes from "./lib/blindboxes.svelte.png";
  import tswift from "./lib/tswift.svelte.png";
  import beach from "./lib/beach.svelte.png";
  import pfp from "./lib/tiff.jpg";
  import ordinary from "./lib/ordinary.png";
  import invisibleString from "./lib/invisibleString.png";
  import ellie from "./lib/ellie.png";
  import gracie from "./lib/gracie.png";
  import tsitp from "./lib/tsitp.png";
  import spyxfam from "./lib/spyxfamily.png";
  import tangled from "./lib/tangled.png";
  import back from "./lib/back.png";
  import play from "./lib/play.png";
  import next from "./lib/next.png";
  let cardData = [
    {
      image: blindBoxes,
      title: "Coding",
      description: "I love opening blind boxes.",
    },
    {
      image: tswift,
      title: "Reading",
      description: "I'm a Swiftie.",
    },
    {
      image: beach,
      title: "States I've Lived In",
      description: "I've lived in CA, GA, and now FL.",
    },
  ];

  let songs = [
    {
      image: ordinary,
      title: "Ordinary - Alex Warren",
    },
    {
      image: invisibleString,
      title: "invisible string - Taylor Swift",
    },
    {
      image: ellie,
      title: "My Blood - Ellie Goulding",
    },
    {
      image: gracie,
      title: "I Love You I'm Sorry - Gracie Abrams",
    },
  ];

  let entertainment = [
    {
      image: tsitp,
      title: "The Summer I Turned Pretty",
    },
    {
      image: spyxfam,
      title: "SpyxFamily",
    },
    {
      image: tangled,
      title: "Tangled",
    },
  ];

  let showName = false;
  let name = "TIFFANY"; // Change this to your name

  let bio = `Hi there! I’m Tiffany Pham, a rising third year at Georgia Tech, where 
          I’m studying computer science. I’m a developer and designer who enjoys 
          building websites that are not only functional, but also visually appealing 
          and easy to use. I’m especially interested in front-end development and creating 
          intuitive, engaging user experiences.`;

  function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  let currSongIdx = 0;

  function prevSong() {
    currSongIdx = (currSongIdx - 1 + songs.length) % songs.length;
  }

  function nextSong() {
    currSongIdx = (currSongIdx + 1) % songs.length;
  }

  let currEntertainmentIdx = 0;

  function prevEntertainment() {
    currEntertainmentIdx =
      (currEntertainmentIdx - 1 + entertainment.length) % entertainment.length;
  }

  function nextEntertainment() {
    currEntertainmentIdx = (currEntertainmentIdx + 1) % entertainment.length;
  }
</script>

<div class="container">
  <div class="intro">
    <div class="name">
      <h2 transition:typewriter on:introend={() => (showName = true)}>
        HEY, I'M
      </h2>

      {#if showName}
        <h1 in:typewriter>{name}!</h1>
      {/if}
    </div>
    <img src={pfp} alt="tiff at the beach" class="pfp-img" />
  </div>
  <div class="about-me">
    <h1>ABOUT ME</h1>
    <p>{bio}</p>
  </div>

  <h2 class="facts-header">FUN FACTS</h2>
  <div class="card-container">
    {#each cardData as { image, title, description }}
      <ImageCard {image} {title} {description} />
    {/each}
  </div>

  <div class="favorites-container">
    <h2 class="favorites-header">MY FAVORITES</h2>
    <div class="all-favorites">
      <div class="songs">
        <div class="song-display">
          <img
            src={songs[currSongIdx].image}
            alt={songs[currSongIdx].title}
            class="song-img"
          />
        </div>
        <p class="song-title">{songs[currSongIdx].title}</p>
        <div class="controls-songs">
          <button on:click={prevSong}>
            <img src={back} />
          </button>
          <button><img src={play} /></button>
          <button on:click={nextSong}>
            <img src={next} />
          </button>
        </div>
      </div>
      <div class="entertainment">
        <div class="entertainment-display">
          <img
            src={entertainment[currEntertainmentIdx].image}
            alt={entertainment[currEntertainmentIdx].title}
            class="entertainment-img"
          />
          <p class="entertainment-title">
            {entertainment[currEntertainmentIdx].title}
          </p>
        </div>
        <div class="remote">
          <div class="remote-content">
            <div class="power"></div>
            <div class="outer-circle">
              <div class="inner-circle"></div>
            </div>
          </div>
          <div class="controls-remote">
            <button on:click={prevEntertainment}>
              <img src={back} />
            </button>
            <button on:click={nextEntertainment}>
              <img src={next} />
            </button>
          </div>
          <div class="random-buttons-upper">
            <div class="top-buttons">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="bottom-buttons">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="buttons-bottom">
            <div class="long-button"></div>
            <div class="stacked-buttons">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="long-button"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    text-align: center;
    background-color: #f4f2e6;
    overflow-x: hidden;
  }

  .card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .about-me {
    background-color: #657961;
    color: white;
    padding: 40px;
    margin: 40px 0px;
  }

  .about-me h1 {
    font-size: 4em;
  }

  .about-me p {
    margin: 40px 100px;
    font-size: 1.3em;
  }

  .intro {
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  .name {
    align-self: center;
    color: black;
  }

  .name h1 {
    font-size: 5em;
  }

  .name h2 {
    font-size: 3.5em;
  }

  .pfp-img {
    border-radius: 80px;
    width: 310px;
    margin-top: 30px;
  }

  .facts-header {
    font-size: 4em;
    margin: 0.3em;
  }

  .favorites-header {
    font-size: 4.5em;
  }

  .favorites-container {
    background-color: #657961;
    color: white;
    padding: 5px 0px 60px;
  }

  .all-favorites {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .songs {
    background-color: #465543d4;
    padding: 20px 40px;
    border-radius: 30px;
  }

  .song-img {
    background-color: #f4f2e66b;
    padding: 20px;
    border-radius: 30px;
    width: 210px;
  }

  .song-title {
    background-color: #f4f2e66b;
    padding: 20px;
    border-radius: 30px;
    font-size: 1.3em;
    font-weight: 700;
  }

  .entertainment {
    background-color: #465543d4;
    padding: 20px 40px;
    border-radius: 30px;
    display: flex;
    gap: 30px;
  }

  .entertainment-display {
    align-content: center;
    background-color: #f4f2e633;
    border-radius: 50px;
  }

  .entertainment-title {
    background-color: #f4f2e633;
    padding: 20px;
    border-radius: 30px;
    font-size: 1.5em;
    font-weight: 700;
    width: 350px;
    justify-self: center;
  }

  .entertainment-img {
    width: 380px;
    border-radius: 50px;
    padding: 20px 30px;
  }

  .power {
    background-color: #e94949c5;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    justify-self: flex-end;
    box-shadow: 1px 4px 2px rgb(107, 94, 94);
    margin-right: 20px;
    margin-top: 18px;
  }

  .outer-circle {
    background-color: #d0cfcf5d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    height: 85px;
    width: 85px;
    box-shadow: 1px 3px 4px rgb(107, 106, 106);
  }

  .inner-circle {
    background-color: #dfdfdf5d;
    border-radius: 50%;
    height: 48px;
    width: 50px;
    box-shadow: 0px 3px 2px rgb(104, 104, 104);
    margin-top: 5%;
  }

  .remote {
    background-color: #7f8f7c;
    border-radius: 70px;
    padding: 20px 30px;
  }

  .top-buttons,
  .bottom-buttons {
    display: flex;
    gap: 18px;
    justify-content: center;
  }

  .top-buttons div,
  .bottom-buttons div {
    background-color: rgba(255, 255, 255, 0.243);
    width: 48px;
    height: 24px;
    border-radius: 30px;
    box-shadow: 1px 4px 2px #667962;
  }

  .random-buttons-upper {
    padding: 5%;
    display: grid;
    gap: 15px;
  }

  .buttons-bottom {
    display: flex;
    justify-content: center;
    gap: 8%;
    margin-top: 5%;
  }

  .long-button {
    background-color: #444e4240;
    width: 48px;
    height: 115px;
    border-radius: 60px;
    box-shadow: 1px 3px 3px #667962;
  }

  .stacked-buttons {
    display: grid;
    gap: 10px;
  }

  .stacked-buttons div {
    background-color: rgba(255, 255, 255, 0.243);
    width: 45px;
    height: 30px;
    border-radius: 17px;
    box-shadow: 1px 4px 2px #667962;
  }

  button {
    background-color: rgba(255, 255, 255, 0.235);
    border: none;
    border-radius: 50%;
    box-shadow: 1px 3px 2px rgba(74, 73, 73, 0.672);
  }

  button:hover {
    transform: translateY(2px);
    box-shadow: 1px 4px 3px rgba(37, 37, 37, 0.672);
  }

  button:active {
    transform: scale(0.98);
    box-shadow: 1px 4px 3px #2c2c2c66;
  }

  .controls-songs {
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .controls-songs img {
    height: 40px;
    padding: 5px;
  }

  .controls-remote {
    display: flex;
    justify-content: center;
    gap: 50px;
  }

  .controls-remote button {
    background-color: #39443758;
    box-shadow: 2px 2px 2px #00000058;
  }

  .controls-remote button:hover {
    transform: translateY(2px);
    box-shadow: 1px 4px 3px #00000077;
  }

  .controls-remote button:active {
    transform: scale(0.98);
    box-shadow: 1px 4px 3px #0000006f;
  }

  .controls-remote img {
    height: 35px;
    padding: 5px;
    border: none;
  }
</style>
