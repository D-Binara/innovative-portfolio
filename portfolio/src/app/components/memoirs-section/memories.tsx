import {AnimatedTestimonials} from "@/app/components/memoirs-section/animated-testimonials";


export function Memories() {
    const testimonials = [
        {
            quote:
                "Participated in ACES Coders 11.0 with Dev NinjaZ—an intense 12-hour coding challenge at the University of Peradeniya. Proud of our teamwork and growth! ",
            name: "Michael RodriguezACES Coders 11.0",
            designation: "ACES Coders 11.0",
            src: "/memories/coders.jpg",
        },
        {
            quote:
                "Proud to have contributed to the SUSL Hall Reservation System! This platform has made event planning smoother and more efficient—excited to see its impact on campus!",
            name: " ",
            designation: "Proud Contribution to SUSL's New Hall Reservation System 🎉",
            src: "/memories/hall_booking.jpg",
        },
        {
            quote:
                "Thrilled to participate in Duothan 4.0 at NSBM Green University! An amazing experience of learning, growth, and teamwork.",
            name: "Duothan 4.0",
            designation: "Duothan 4.0",
            src: "/memories/duthon.jpg",
        },
        {
            quote:
                "Exciting memories from the Cloud Connect event by GDG Cloud Sri Lanka! Gained invaluable insights into Google Cloud tech, connected with industry experts, and left inspired for future projects.",
            name: "GDG Cloud Sri Lanka",
            designation: "GDG Cloud Sri Lanka",
            src: "/memories/cloud.jpg",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
