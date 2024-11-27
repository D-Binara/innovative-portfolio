import {FloatingDock} from "@/app/components/introduction_section/floating-dock";
import {
    IconBook,
    IconCode,
    IconHome,
    IconMail,
    IconTrophy,
    IconUser
} from "@tabler/icons-react";


const links = [
    {
        "title": "Home",

        "icon": (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#home"
    },
    {
        "title": "About Me",
        "icon": (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#about"
    },
    {
        "title": "Projects",
        "icon": (
            <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#projects"
    },
    {
        "title": "Achievements",
        "icon": (
            <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#achievements"
    },
    {
        "title": "Memoirs",
        "icon": (
            <IconBook  className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#memoirs"
    },
    {
        "title": "Contact",
        "icon": (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        "href": "#contact"
    }
];

export function NavBar () {
    return <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
    />
}