import AmazonIcon from "../res/amazon.png";
import FacebookIcon from "../res/facebook.png";
import GithubIcon from "../res/github.png";
import GoogleIcon from "../res/google.png";
import InstagramIcon from "../res/instagram.png";
//import SpotifyIcon from "../res/spotify.png";
//import TwitchIcon from "../res/twitch.png";
import linkedInIcon from "../res/linkedin-logo.png";
import twitterIcon from "../res/twitter.png"


export const data = [{
    img: AmazonIcon,
    name: "amazon",
    href: "auth/amazon",
    alt: "amazon-icon",
    color: "#F9AE31",
    txt: "Login with Amazon"
},  {
    img: FacebookIcon,
    name: "facebook",
    href: "web/auth/facebook",
    alt: "facebook-icon",
    color: "#3B5899",
    txt: "Login with Facebook"
}, {
    img: GithubIcon,
    name: "github",
    href: "auth/github",
    alt: "github-icon",
    color: "#333333",
    txt: "Login with Github"
}, {
    img: GoogleIcon,
    name: "google",
    href: "web/auth/google",
    alt: "google-icon",
    color: "#CB4024",
    txt: "Login with Google"
}, {
    img: InstagramIcon,
    name: "instagram",
    href: "auth/instagram",
    alt: "instagram-icon",
    colors: {
        leftBot: "#fec564",
        leftTop: "#5258cf",
        rightTop: "#893dc2",
        rightBot: "#d9317a",
        baseCoat: "linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
    },
    color: "#d9317a",
    txt: "Login with Instagram"
}, {
    img: linkedInIcon,
    name: "LinkedIn",
    href: "web/auth/linkedin",
    alt: "spotify-icon",
    color: "#1EB954",
    txt: "Login with linkedin"
}, {
    img: twitterIcon,
    name: "Twitter",
    href: "web/auth/3/twitter",
    alt: "twitch-icon",
    color: "#5F3BAD",
    txt: "Login with twitter"
}];