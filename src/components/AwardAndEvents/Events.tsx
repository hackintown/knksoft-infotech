import React from "react";
import { getEventsMediaData } from "./events-media";
import {
    EventCard,
    VideoSlider,
    AnimatedSection,
    Gallery,
    HeroSection,
    UpcomingEvents,
    EventsTimeline,
} from "./EventsClients";
import AwardsShowcase from "./AwardsShowcase";

export default async function EventsPage() {
    const mediaData = await getEventsMediaData();

    return (
        <div className="min-h-screen bg-gray-100">
            <HeroSection banners={mediaData.banners} />

            {/* Add Upcoming Events Section */}
            <AnimatedSection>
                <UpcomingEvents />
            </AnimatedSection>

            {/* Recent Events Section */}
            <AnimatedSection>
                <section className="py-16 px-4 md:px-8 bg-white">
                    <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
                        Recent Events
                    </h2>
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mediaData.recentEvents.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Events Timeline Section */}
            <AnimatedSection>
                <EventsTimeline />
            </AnimatedSection>

            {/* Professional Event Gallery Section */}
            <AnimatedSection>
                <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-purple-800">
                            Event Gallery
                        </h2>
                    </div>
                    <div className="container mx-auto max-w-7xl">
                        <Gallery
                            ahmedabadEvents={mediaData.ahmedabadEvents}
                            delhiEvents={mediaData.delhiEvents}
                        />
                    </div>
                </section>
            </AnimatedSection>

            <AwardsShowcase />

            {/* Video Showcase Section */}
            <AnimatedSection>
                <section id="videos" className="py-16 px-4 md:px-8 bg-white">
                    <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
                        Event Highlights
                    </h2>
                    <div className="container mx-auto max-w-7xl">
                        <VideoSlider videos={mediaData.videos} />
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
}