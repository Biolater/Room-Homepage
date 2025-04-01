import Bookmark from "../assets/images/illustration-features-tab-1.svg";
import Search from "../assets/images/illustration-features-tab-2.svg";
import Share from "../assets/images/illustration-features-tab-3.svg";

export const FEATURES = [
    {
        id: 1,
        tabLabel: "Simple Bookmarking",
        tabTitle: "Bookmark in one click",
        tabDescription: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: Bookmark,
    },
    {
        id: 2,
        tabLabel: "Speedy Searching",
        tabTitle: "Intelligent search",
        tabDescription: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: Search,
    },
    {
        id: 3,
        tabLabel: "Easy Sharing",
        tabTitle: "Share your bookmarks",
        tabDescription: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: Share,
    },
]