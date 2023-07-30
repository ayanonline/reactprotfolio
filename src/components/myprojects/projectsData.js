import ytdownload from "../../assets/ytdownload.webp";
import myyoutube from "../../assets/my-youtube.webp";
import movie from "../../assets/movie.webp";
import kgf from "../../assets/kgf.webp";

const projects = [
  {
    title: "Youtube Clone",
    desc: `I have created this Youtube clone app using REACT JS, redux-tool-kit, react-router-dom, tailwindCSS`,
    image: myyoutube,
    link: "https://youtube-ayan.netlify.app/",
  },
  {
    title: "Youtube video Downloader",
    desc: `I have created this youtube video downloader app using REACT JS & EXPRESS . In backend I used "ytdl-core" npm package.`,
    image: ytdownload,
    link: "https://yt-download-ayan.netlify.app/",
  },
  {
    title: "Movie serch",
    desc: `I build this using simple free movie api, where you can serach movie by it's name. It also have "add to favourite" feature.`,
    image: movie,
    link: "https://ayan-movie.netlify.app/",
  },
  {
    title: "GYM",
    desc: "I have created fronted of this GYM website.",
    image: kgf,
    link: "https://kgf.netlify.app/",
  },
];

export default projects;
