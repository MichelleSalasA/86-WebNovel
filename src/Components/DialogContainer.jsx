import ChapterSelect from './ChapterSelect';
import './DialogContainer.css';

const DialogContainer = ({ chapter, setChapter }) => {
    const dialogs = [
        <p className="para-1">There were no casualties on that battlefield.
            <br/>
            “—And now, we have an update regarding the war.
            <br/>
            “A group of the unmanned Imperial weapons known as the Legion have invaded the seventeenth ward today. 
            The force was intercepted, severely crippled, and forced to retreat by the might of our unmanned drones, 
            the Juggernauts, pride and joy of the Republic of San Magnolia. Damage to equipment was light, and no loss 
            of life was reported on our side today yet again.”
            <br/>
            The main street of the Republic of San Magnolia's capital, Liberté et
            Égalité, was so peaceful and beautiful one would be hard pressed to believe
            the country had been at war for the past nine years.
            <br/>
            Carved white marble graced the facades of the city's high-rise buildings.
            The greenery of the roadside trees and the black cast-iron lampposts mingled
            to create a picturesque contrast with the spring sunlight and the clear blue
            sky. The cafés on the street corners were populated by students and couples,
            their naturally silver hair glittering as they laughed loudly.
            <br/>
            The city hall's blue roof was adorned with a flag bearing the visage of the
            saint of the revolution, Saint Magnolia, and the Republic's five-colored
            national flag. Its five colors stood for freedom, equality, brotherhood, justice,
            and nobility. The main street was paved with vast, delicately carved stones,
            the result of meticulous urban planning.
        </p>,
        <p className="para-2">
            A young boy passed by Lena, his silver hair shining like the moon as he
            laughed, holding his parents' hands. Dressed so neatly, they were probably
            going out somewhere. Sparing a final glance at the backs of the happy family,
            she turned her silver eyes to the street-side television's holo-screen, the smile
            fading from her lips.
            <br/>
            She was clad in the Republic military's dark-blue collared uniform for
            female officers. The sixteen-year-old girl had a snow-white beauty and a
            certain glasswork delicacy that fit her age—and an elegant demeanor that
            reflected her upbringing and pedigree. Her softly flowing, silken hair and
            long eyelashes were a striking silver, and her large, equally silver eyes served
            as proof of her being not only an Alba, a descendant of the race native to this
            land since ages past, but also a pureblood Celena, who were considered to be
            of noble birth.
            <br/>
            “Under the capable command of our skilled Handlers, these highly
            efficient drones allow us to defend the nation while eliminating the need to
            dispatch precious lives to the front lines. There can be no doubting the
            usefulness of the Republic's humane and advanced combat system. The day
            when the Republic's righteous ways defeat the fallen Empire's evil relics will
            surely come even before the entire Legion shuts down in two years' time.
            Hail the Republic of Magnolia. Glory to the five-hued flag.”
            <br/>
            Lena's expression darkened at the sight of the snowy-haired, silver-eyed
            alabaster newscaster's brilliant smile. This optimistic, or rather unrealistic,
            news report had been repeated countless times since the war began, and the
            majority of civilians didn't doubt its authenticity. They believed it in spite of
            the fact that after being driven out of more than half its territory less than a
            month into the war, the Republic had failed to regain any of it in nine years of
            fighting.
        </p>
    ];

    return  (
        <div className="article-container">
            <article>
                <ChapterSelect chapter={chapter} setChapter={setChapter}/>
                <h3>A battlefield with zero casualities</h3>
                {dialogs[chapter - 1]}
            </article>
        </div>
    )
};

export default DialogContainer;