import React from "react";
import image from "../home.jpg";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="Dark Montain"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-green-100 font leading-none lg:leading-snug home-name">
                    Hello. I am Qikai.
                </h1>
            </section>
        </main>
    );
}