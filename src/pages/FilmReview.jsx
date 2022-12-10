import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faPrint, faStar as faFilledStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

function Navigation() {
    return (
            <nav className="bg-stone-800 h-24 print:h-12 text-stone-50 flex items-center px-8 justify-between print:justify-center">
            <a className="lg:text-4xl text-2xl hover:text-stone-300 hover:bg-stone-700 p-2 rounded-2xl transition-colors duration-200 ease-in-out flex items-center" href={window.location.href}>
                <img className="h-12" src="/src/assets/book.png" /><h1 className="mx-2">Book-Smart Reviews</h1>
            </a>
            <ul className="flex md:flex-nowrap flex-wrap justify-between basis-2/5 md:text-lg text-md print:hidden">
                <a className="after:w-0 after:h-[1px] after:block after:bg-stone-50 after:hover:w-full after:transition-all after:m-auto" href={window.location.href}><li>Films</li></a>
                <a className="after:w-0 after:h-[1px] after:block after:bg-stone-50 after:hover:w-full after:transition-all after:m-auto" href={window.location.href}><li>Novels</li></a>
                <a className="after:w-0 after:h-[1px] after:block after:bg-stone-50 after:hover:w-full after:transition-all after:m-auto" href={window.location.href}><li>Short Stories</li></a>
                <a className="after:w-0 after:h-[1px] after:block after:bg-stone-50 after:hover:w-full after:transition-all after:m-auto" href={window.location.href}><li>Poems</li></a>
            </ul>
        </nav>
    );
}

function Header() {
    return (
    <header>
        <h1 className="text-5xl mb-4 text-center"><i>The Grizzlies</i> Review</h1>
        <div className="flex justify-between items-center mb-4">
            <div className="basis-1/3">
                <span className="text-md">Andrew Chu</span>
                <i className="mx-2">|</i>
                <span className="text-md">December 9, 2022</span>
            </div>
            <div className="flex justify-center">
                <Rating rating={3} outOf={5}/>
            </div>
            <div className="flex justify-between basis-1/6 items-center print:hidden">
                <FontAwesomeIcon icon={faShare} className="rounded-full border-[1px] border-black p-2 hover:cursor-pointer hover:bg-stone-300 transition-color duration-100 bg-stone-200" onClick={copyLink} />
                <FontAwesomeIcon icon={faPrint} className="rounded-full border-[1px] border-black p-2 hover:cursor-pointer hover:bg-stone-300 transition-color duration-100 bg-stone-200" onClick={window.print} />
            </div>
        </div>
        <img className="block mx-auto mb-4" src="/src/assets/the-grizzlies-hero.jpg" draggable="false" />
        <h4 className="italic text-center text-md mb-4">A set of characters as diverse as the clothes they wear.</h4>
    </header>
    );
}

function Rating({rating, outOf}) {
    const numFilledStars = rating;
    const numEmptyStars = outOf - rating;

    console.log(numFilledStars);
    let stars = [];

    for (let i = 0; i < numFilledStars; i++) {
        stars.push(
            <FontAwesomeIcon icon={faFilledStar} className="text-orange-400" />
        );
    }

    for (let i = 0; i < numEmptyStars; i++) {
        stars.push(
            <FontAwesomeIcon icon={faEmptyStar} className="text-orange-400" />
        )
    }


    return (
    <div>
        {stars}
    </div>
    );
}

function FilmReview() {
    useEffect(() => {
        document.title = 'Book-Smart Reviews';
        const icon = document.getElementById('icon');
        icon.href = './book.png';
    }, []);

    return (
    <div className="lg:mx-32 mt-8 bg-stone-200 print:m-0 ">
        <h1 className="hidden print:block text-xl bold text-center">
            Please view the <a target="_blank" href="previouslynamedjeff.github.io/#/film-review" className="underline text-blue-700">website</a> for the proper experience.
        </h1>
        <Navigation />
        <main className="flex flex-col items-center bg-stone-100 py-8 md:px-[24%] px-20">
            <Header />
            <article className="font-serif">
                <p className="text-xl print:text-md mb-6 leading-relaxed">
                    <i>The Grizzlies</i> is a Canadian sports film directed by Miranda de Pencier based on a true story. The film first premiered at the 2018 Toronto International Film Festival, later leading to de Pencier’s Directors Guild of Canada award for Best Direction in a Feature Film and Paul Nutarariaq’s nomination at the 7th Canadian Screen Award for Best Actor. At first glance, <i>The Grizzlies</i> follows many aspects of the white-saviour trope. When Russ Sheppard, a white history teacher, first arrives in the Inuit town of Kugluktuk, he is shocked by the prevalence of suicide and substance abuse among the students at his school. He is unaware of the root causes of struggle in the town, yet feels determined to fix the lives of his students through the introduction of lacrosse. Under his guidance, the students grow past their struggles. <i>The Grizzlies</i> has many similarities with the white-saviour narrative. However, through the motivating montages and shaky handheld footage, it is clear that de Pencier sought to create a realistic film that inspires. de Pencier subverts the white-saviour genre by thoughtfully focusing on the portrayal of its Indigenous characters.
                </p>
                <p className="text-xl print:text-md mb-6 leading-relaxed">
                    Often, in white-saviour films, the non-white characters are given less depth and are merely victims of their situation. In <i>The Grizzlies</i>, the Inuit population is represented as a diverse and realistic people. Each character feels unique and human in their conflict: Zach is a leader who struggles financially to take care of his brother and alcoholic parents, Spring and Roger are teenage lovers with relationship problems, Adam is a hunter whose parents are against his participation in lacrosse and school, and Miranda is a hard-working student who faces scrutiny from her family. Throughout the film, the characters face their struggles, which they either overcome or fail to. It is the influence of one of the students, Kyle, that leads to the lacrosse team’s final goal, not Russ’. These instances show that the Indigenous characters, once given a small push, are capable of self-improvement. 
                </p>
                <p className="text-xl print:text-md mb-6 leading-relaxed">
                    Although most characters in the film are believable and portrayed well, there are still certain characters that I believe can be improved. For example, the characters of Adam’s parents seem influenced by the “Stoic Indian” stereotype due to their lack of dialogue and silent reactions. When Russ talks with Adam’s parents about his return to school, Russ is left puzzled after all they tell him is the story of Sedna. Adam explains that “elders often answer a question with a story”, thus attributing their quiet demeanour to their age and the value they have for their culture. In addition, the widespread use of alcohol by students and adults seems highly exaggerated. While there is a large presence of alcoholism in the real town of Kugluktuk, the number of characters with drinking addictions plays into negative Indigenous stereotypes. Finally, the awe experienced by the lacrosse team when they first see skyscrapers in Toronto contributes to the idea that Indigenous people do not know or belong in cities. These elements add little to the plot of the story and could have been removed.
                </p>
                <p className="text-xl print:text-md mb-6 leading-relaxed">
                    Russ Sheppard is a well-developed character by Ben Schnetzer. His frustration, failures, and setbacks demonstrate that he is more than just a perfect, moral person meant to be a saviour. At times, he says the wrong things or undervalues the sacrifices made by his students. But, he always tries to make up for his mistakes because he knows he would not be the first person to disappoint the Inuit community.
                </p>
                <p className="text-xl print:text-md mb-6 leading-relaxed">
                    By focusing on the individual struggles and growth of the non-white characters, de Pencier successfully tells a story that goes beyond the white-saviour narrative. <i>The Grizzlies</i> provides insight into Inuit communities without creating a messianic figure or downplaying the roles of Indigenous characters. It is a good example of how Indigenous people can be portrayed positively in the media.
                </p>
            </article>
        </main>
    </div>
    );
}

const copyLink = () => {
    let url = window.location.href;
    navigator.clipboard.writeText(url);
}

export default FilmReview;