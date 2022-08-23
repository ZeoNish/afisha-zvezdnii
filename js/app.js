var movieDB = [
    {
        ID: 1,
        title: "Снежная Королева: Зазеркалье",
        rating: 7.8,
        age: 6, // 0, 6, 10, 12, 16, 18
        startdate: '',

        new: true, // true or false
        // watched: false, // true or false
        // hasWatched: false, // true or false
        buy: false,

        timeView: {
            "01.01.2019" : "10:00,11:00,12:00",
            "02.01.2019" : "10:00,11:00,12:00",
            "03.01.2019" : "10:00,11:00,12:00,13:00,14:00,15:00,16:00",
            "04.01.2019" : "10:00,11:00,22:00"
        },

        runtime: 80,

        synopsis: "Могущественный король Харальд чуть не потерял семью из-за Снежной Королевы. Он находит способ очистить мир от волшебства — все обладатели магических способностей отныне заточены в Зазеркалье. Остановить его и не дать сказке навсегда исчезнуть из нашего мира может только Герда. Ведь ее главная сила не в волшебстве, а вере в добро и дружбу. В новом приключении на помощь Герде придут тролли, пираты и даже сама Снежная Королева.",
        // background: "url('./img/movie/toystory3.jpg')"
        background: "url('https://i.ytimg.com/vi/DbwoT5Ck6F4/maxresdefault.jpg')"
    },




    // ---------------------------------------------
    {
        ID: 2,
        title: "The Incredibles 2",
        rating: 5,
        age: 0, // 0, 6, 10, 12, 16, 18
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 92,
        synopsis: "Helen is called on to lead a campaign to bring Supers back, while Bob navigates the day-to-day heroics of 'normal' life at home with Violet, Dash and baby Jack-Jack - whose superpowers are about to be discovered.",
        background: "url('./img/movie/incredibles-2.jpg')"
    },
    {
        ID: 3,
        title: "Spider-Man: Homecoming",
        rating: 3.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 130,
        synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        background: "url('./img/movie/spider-man.jpg')"
    },
    {
        ID: 4,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности — артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту — судьба Земли никогда ещё не была столь неопределённой.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 5,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 6,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 7,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 8,
        title: "Toy Story",
        rating: 4,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 124,
        synopsis: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        background: "url('./img/movie/toystory3.jpg')"
    },
    {
        ID: 9,
        title: "The Incredibles 2",
        rating: 5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 92,
        synopsis: "Helen is called on to lead a campaign to bring Supers back, while Bob navigates the day-to-day heroics of 'normal' life at home with Violet, Dash and baby Jack-Jack - whose superpowers are about to be discovered.",
        background: "url('./img/movie/incredibles-2.jpg')"
    },
    {
        ID: 10,
        title: "Spider-Man: Homecoming",
        rating: 3.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 130,
        synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        background: "url('./img/movie/spider-man.jpg')"
    },
    {
        ID: 11,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 12,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 13,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    },
    {
        ID: 14,
        title: "The Avengers",
        rating: 2.5,
        startdate: '21.12.2018',
        watched: false,
        hasWatched: false,
        buy: false,
        timeView: '',
        runtime: 118,
        synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        background: "url('./img/movie/avengers.jpg')"
    }
];


function printMovieInfo(element) {
    if (element.hasWatched)
        console.log("You have watched " + element.title + " - " + element.rating + " звезды");
    else
        console.log("You have not seen " + element.title + " - " + element.rating + " звезды");
}

// console stuff
movieDB.forEach(printMovieInfo);

movieDB.forEach(createCard);

function createCard(element, i) {
    // item
    var item = document.createElement('div');
    item.setAttribute("class", "item");
    item.setAttribute("id", element.ID);
    item.setAttribute("buy", element.buy);
    item.setAttribute("timeView", JSON.stringify(element.timeView));
    item.setAttribute("tabindex", i + 1);
    item.setAttribute("age", element.age);


    // id
    var idBox = document.createElement('div');
    idBox.setAttribute("class", "idBox");
    idBox.innerText = element.ID;

    /*
    // ribbon
    var ribbon = document.createElement('div');
    ribbon.setAttribute("class", "corner-ribbon bottom-right green shadow");
    // ribbon.innerText = element.ID;
    ribbon.innerText = element.ID;
    */

    // ribbon box
    var ribbonBox = document.createElement('div');
    ribbonBox.setAttribute("class", "ribbon-box");
    ribbonBox.innerText = 'Новое';

    // age
    var age = document.createElement('img');
    age.setAttribute("class", "age");
    age.setAttribute("title", "Ограничение по возрасту " + element.age + ' лет');
    age.setAttribute("src", "img/age/age_" + element.age + '.png');
    age.setAttribute("age", element.age);


    // box
    var box = document.createElement('div');
    box.setAttribute("class", "box");

    // card
    var card = document.createElement('div');
    card.setAttribute("class", "movie-card");
    card.style.backgroundImage = element.background;

    // title
    var title = document.createElement('h1');
    title.setAttribute("class", "title");
    title.innerText = element.title;
    card.appendChild(title);

    // runtime
    var clock = document.createElement("i");
    clock.setAttribute("class", "far fa-clock");

    var runtime = document.createElement('span');
    runtime.setAttribute("class", "runtime");
    runtime.setAttribute("title", "Продолжительность");
    runtime.innerText = element.runtime + " мин" + " ";
    runtime.appendChild(clock);
    card.appendChild(runtime);

    // rating
    var star = document.createElement("i");
    star.setAttribute("class", "fas fa-star");
    var rating = document.createElement('span');

    rating.innerText = element.rating + " ";
    rating.setAttribute("class", "rating");
    rating.setAttribute("rating", element.rating);
    rating.setAttribute("title", "Рейтинг фильма");

    // ВЫВОД --------------------->
    rating.appendChild(star);
    // card.appendChild(idBox);
    // card.appendChild(ribbon);
    if(element.age !== undefined && element.age !== false && element.age !== '') { card.appendChild(age); }
    if(element.new === true) { card.appendChild(ribbonBox); }
    card.appendChild(rating);

    // startdate
    var clock = document.createElement("i");
    clock.setAttribute("class", "far fa-calendar-alt");

    var startdate = document.createElement('span');
    if(element.startdate === '') {
        element.startdate = 'Скоро';
    }
    startdate.innerText =  element.startdate + " ";
    startdate.setAttribute("class", "startdate");
    startdate.setAttribute("startdate", element.startdate);
    startdate.setAttribute("title", "Дата начала показа");

    // ВЫВОД --------------------->
    startdate.appendChild(clock);
    card.appendChild(startdate);

    // synopsis
    var synopsis = document.createElement('p');
    synopsis.setAttribute("class", "synopsis");
    synopsis.innerText = element.synopsis;
    card.appendChild(synopsis);

    // watch / watch again
    if (element.watched == true) {
        var watch = document.createElement('button');
        watch.setAttribute("class", "watch");
        if (element.hasWatched == false) {
            watch.innerText = "ПОСМОТРЕТЬ";
        } else {
            watch.innerText = "СМОТРЕТЬ СНОВА";
        }

        card.appendChild(watch);
    } else {}


    // Вывод
    box.appendChild(card);
    item.appendChild(box);

    // document.body.appendChild(card);
    document.getElementById('movie').appendChild(item);
}