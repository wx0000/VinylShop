import React from 'react';
import Article from '../components/Article';
import cover1 from '../images/cover1.jpg';
import cover2 from '../images/cover2.jpg';
import cover3 from '../images/cover3.jpg';
import cover4 from '../images/cover4.jpg';

const articles = [
    {
        id: 1,
        title: "Linked",
        author: "Bonobo",
        releaseDate: "July 1, 2019",
        cover: cover1,
        text: "Bonobo returns with new single ‘Linked’. The dance floor-ready new release from the LA-based producer (aka Simon Green) is an atmospheric slow-builder, perfectly tuned for festivals this summer. It follows his compiling of the inaugural “fabric Presents” compilation, which featured a new song ‘Ibrik’ (picked as Annie Mac’s Hottest Record in the World on BBC Radio 1), and comes after the career-defining 2017 album Migration, which reached the UK Top 5, received two GRAMMY nominations and saw him headline festivals and sell out multiple global tours with an expanded live show."
    },
    {
        id: 2,
        title: "Origin",
        author: "Jordan Rakel",
        releaseDate: "June 14, 2019",
        cover: cover2,
        text: "Soulful, intimate and expansive all at once, Jordan Rakei’s third album, “Origin”, cuts straight to the point, in every sense of the word. The melodies are brighter, the sound is bigger and the vision behind it more finely-tuned. Switching up from the highly personal and intimate portrait he painted with 2017’s “Wallflower”, which was a way of grappling with his experience of anxiety and introversion, “Origin” is overtly inspired by dystopian visions of our future - notably Charlie Brooker’s Black Mirror, Margaret Atwood’s The Handmaid’s Tale and David Lynch’s Twin Peaks. “I’m worried that we’re losing a sense of connection,” explains Jordan, with many of the album lyrics exploring technological growth, and how it affects our sense of humanity. For example, new single ‘Say Something’ is “about speaking up for what you believe in”, a call to arms for future humans to stand up against the AI systems which govern a now-dystopian world. It follows recent single ‘Mind’s Eye’, which envisions a future world where malfunctioning tech implanted in the human body has flooded the users mind with projections of chaos. He meditates daily, something he adopted partly in response to his issues with anxiety, and something which has shaped his worldview and informed his writing and production process. "
    },
    {
        id: 3,
        title: "The Return",
        author: "Sampa The Great",
        releaseDate: "March 13, 2019",
        cover: cover3,
        text: "Sampa The Great creates a sense of home on her debut album - “The Return”. A characterful record, its reference points range from classic hip-hop to ancient Southern African sounds. Built on four years of personal and musical soul-searching, it’s an assured statement, the product of meaningful musical connections and of Sampa having to redefine her self-identity away from the comforts of family and old friends."
    },
    {
        id: 4,
        title: "Chasing The Light",
        author: "Marie Davidson",
        releaseDate: "February 7, 2019",
        cover: cover4,
        text: "‘Chasing The Light’ is a track I composed last summer in Montreal specifically for the “Working Class Woman” tour. It’s a fast and energizing musical journey that is meant to keep you moving from start to finish. I’m particularly happy about the many melodic sequences and the bass line on this one. It’s my take on Trance music, but as with everything I do, I try not to pastiche a style but only take the references that inspire me to make something on my own terms. The foundation of the track was recorded at Nadel Eins Studio in Berlin, and the mixing and overdubs were done in Montreal with the help of Pierre Guerineau. It’s my final effort regarding Club music, as I’m ready to move on to a new project that is very dear to me, but before making this shift, I still have many touring dates on my agenda, so I hope to see you somewhere, chasing the light."
    },
]

const HomePage = () => {
    const artList = articles.map(article =>(
        <Article key={article.id} {...article}/>
    ))

    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;