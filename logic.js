var typingText, inputField, mainMistakeTag, timeTag, wpmTag, cpmMainTag, resetBtn, accMainTag, chars, words;

const puncParagraphs = [
    "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside, their band was, in this moment, a racemed suit. The clutch of a joke becomes a togaed chair. The first pickled chess is.",
    "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective. A hygienic is the cowbell of a skin. Few can name a dun brazil that isn't a highbrow playroom. The unwished beast comes from a thorny oxygen. An insured advantage's respect comes with it the thought that the lucid specialist is a fix.",
    "In ancient times the legs could be said to resemble stroppy vegetables. We can assume that any instance of a centimeter can be construed as an enate paste. One cannot separate pairs from astute managers. Those americas are nothing more than fish. If this was somewhat unclear, authors often misinterpret the gosling as an unfelt banjo, when in actuality it feels more like a professed galley. A bow of the squirrel is assumed.",
    "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective. Few can name a limbate leo that isn't a sunlit silver. The bow is a mitten. However, the drawer is a bay. If this was somewhat unclear, few can name a paunchy blue that isn't a conoid bow. The undrunk railway reveals itself as a downstage bamboo to those who look.",
    "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
    "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
    "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt. A fighter of the scarecrow is assumed to be a leisured laundry. A stamp can hardly be considered a peddling payment without also being a crocodile. A skill is a meteorology's fan. Their scent was, in this moment, a hidden feeling. The competitor of a bacon becomes a boxlike cougar.",
    "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
    "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
    "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
    "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians. Few can name a quartered semicolon that isn't a rounding scooter. Though we assume the latter, the literature would have us believe.",
    "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet. Some posit the tonal brother-in-law to be less than newborn. We know that the sizes could be said to resemble sleepwalk cycles. Before seasons, supplies were only fighters. Their stew was, in this moment.",
    "The vision of an attempt becomes a lawny output. Dibbles are mis womens. The olden penalty reveals itself as a bustled field to those who look. Few can name a chalky force that isn't a primate literature. However, they were lost without the gamy screen that composed their beret. Nowhere is it disputed that a step-uncle is a factory from the right perspective. One cannot separate paints from dreary windows. What we don't know for sure is whether.",
    "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil. The nest is a visitor. Far from the truth, they were lost without the released linen that composed their step-sister. A vibraphone can hardly be considered a pardine process without also being an archaeology. The bay of a hyacinth becomes.",
    "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama. The first combined ease is, in its own way, a pantyhose. Extending this logic, the guides could be said to resemble reddest monkeies. Framed in a different way, an addle hemp is a van.",
    "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
    "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle. Though we assume the latter, the first vagrom report is, in its own way, a tower. We know that the octopus of a cd becomes an unrent dahlia.",
    "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily. In modern times a butcher of the birth is assumed to be a spiral bean.",
    "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches."
];

const numbersPara = ["456 789 234 101 222 777 1234 9876 546 938 7654 314 5555 654 777 2468 2345 7777 121 1111 42 4567 999 555 876 8888 37 123 2345 555 2222 777 987 222 654 888 123 3456 37 1001 314 546 73 9876 111 567 221 746 1000 234 4567 120 8888 333 1111 2345 546 654 888 999 7777 37 7890 314",
    "2345 555 876 938 654 42 9876 1234 121 1111 654 8888 546 234 222 4567 7654 7777 777 987 314 456 123 938 2345 777 1001 37 546 9876 1234 999 746 314 654 2222 2468 123 888 37 546 7777 1000 111 456 789 101 221 7890 333 5555 8888 234 73 7654 876 121 1111 555 777 888 999 314 765",
    "1234 2345 456 876 1111 938 7777 654 121 7890 2468 9876 2222 314 234 1001 5555 37 4567 8888 42 987 746 777 123 654 777 546 222 888 7654 314 555 8888 546 37 121 1234 938 5555 1234 111 221 876 2345 2468 2222 234 4567 7654 888 1000 9876 73 7777 789 101 9999 314 746 888 999 546",
    "654 123 121 4567 876 5555 938 9876 1234 7777 314 2345 777 546 42 234 1000 221 888 333 987 111 7890 2468 7654 546 8888 73 654 37 888 234 314 7777 2345 876 1111 1234 456 121 7890 2222 7654 37 9876 222 555 8888 123 1001 746 546 5555 2345 888 9999 555 777 888 999 314 221",
    "7594306805 8430507962 7084512396 1364920875 5783016942 2143560987 4930275861 9813456702 7620519348 1257034896 2104987563 9078536142 5429871306 6891342570 3590281476 9708246531 7684910532 2081639475 3142658970 5324960817 1974853026 0563719284 6701248593 8213645907 9485120736 4059863217 9824361570 4273965081 7320598641 2897054613 7031289465 4906831572 5830124697 4061987253 9821076543 5193670842 0967543102 8569041327 0198453627 1978264305 8069352714 9560328471 7280639145 2930678514 0872615394 1564892730 2083469571 3058964270 4692830157 9813740625",
    "5291874063 3147960285 9270846358 7104298563 1249683705 4568209371 9463875201 8657402391 7346259180 5832740691 3260495871 0587639142 0374198652 6849203157 3985726041 2567893041 6230948571 9867314025 8352061974 0612397485 7398105423 0659173842 7049582316 2893457106 5739284061 3740598213 9054178623 4089276351 6203974851 0847562391 9536108724 0562497831 9854062713 2765409182 7941062538 9510847263 4678901523 8395067124 5069784213 5942870361 1095873462 8742315960 1034857629 7152068493 8260491537 8295174063 5421980376"];



const paras = [
    "the dog ran through forest to catch ball from girl over bridge by river near mountain top behind clouds without knowing where it would lead he felt excitement in his heart like never before as if he could conquer the world with just one bark under moonlight through fields of grass beside stream that flowed endlessly into unknown abyss beyond horizon without end in sight or path to follow just pure instinct driving him forward towards unknown adventure that awaited at the end of journey through wilderness of life",
    "the boy with the red hat on his head under the tree near the park bench with the green leaves in front of him and the flowers beside him saw a black cat run by him towards the street where the cars were driving at full speed on the road with the broken pavement that led to the old building beside the river that flowed past the city with the tall skyscrapers and the crowded streets filled with people of all kinds including the ones with the fancy cars and the expensive suits who walked past the homeless man sitting on the sidewalk with his dog and the sign that read 'anything helps' while the musicians played their instruments and the artists painted their masterpieces in the small alleyways hidden away from the main streets and the noisy traffic that never seemed to stop even at night when the stars shone brightly in the sky above the city that never slept.",
    "one of the most popular hobbies in the world is reading books people enjoy reading books for various reasons some read books to learn new things or to improve their skills some read books to relax or to escape from reality some read books to be inspired or to be entertained whatever the reason reading books can bring many benefits to the readers such as enhancing their vocabulary expanding their knowledge stimulating their imagination developing their critical thinking and enriching their life experience reading books can also help the readers to cope with stress anxiety or loneliness as books can provide comfort guidance or companionship reading books can also foster the readers creativity and curiosity as books can expose them to different perspectives cultures and possibilities reading books can also improve the readers communication and social skills as books",
    "this is a paragraph of two hundred words that does not have any capital letters or punctuations it is not easy to write a paragraph like this because it is hard to separate the sentences and the ideas without using any commas or periods or other marks it is also difficult to show the proper names or the titles of the books or the movies or the places without using any capital letters but it is not impossible to do it if you try hard enough and use some tricks like using numbers or symbols or abbreviations or contractions or hyphens or slashes or brackets or parentheses or quotation marks or apostrophes or dashes or colons or semicolons or question marks or exclamation points or ellipses or asterisks or underscores or at signs or hashtags or dollar signs or percent signs or ampersands or plus signs or equal signs or less than signs or greater than signs or tilde signs",
    "the sun was shining brightly over the green hills and the blue sky the birds were singing and the flowers were blooming it was a perfect day for a picnic and a hike in the woods she packed her basket with sandwiches and fruits and a bottle of water she put on her hat and sunglasses and grabbed her backpack she was ready to go she walked along the path that led to the forest she enjoyed the fresh air and the scenery she saw a squirrel running up a tree and a rabbit hopping in the grass she smiled and waved at them she reached the clearing where she planned to have her lunch she spread a blanket on the ground and took out her food she ate and drank and felt very happy she decided to take a nap under the shade of a big oak tree she closed her eyes and drifted off to sleep she dreamed of more adventures and wonders in the nature",
    "it is a beautiful day outside the sun is shining bright and the birds are singing in the trees i love to spend time in nature it always makes me feel so calm and peaceful just being surrounded by all the greenery and fresh air it is truly the best medicine for the soul i am so grateful to have this opportunity to enjoy nature every day and i never take it for granted i think it is important to take a break from the hustle and bustle of everyday life and just slow down and appreciate the simple things in life like a quiet walk in the park or a picnic with friends i also enjoy taking photos of the beautiful scenery i see around me it is a great way to capture the moment and share it with others who may not be able to experience it firsthand i hope that everyone can take some time to enjoy nature and all the amazing things it has to offer",
    "today is a beautiful day the sun is shining and the birds are singing i woke up feeling grateful for another day of life and all the amazing opportunities that come with it i have a lot to do today but i am excited to get started i have a meeting with my boss this morning to discuss some new project ideas and i am looking forward to sharing my thoughts and hearing his feedback i also have a few errands to run later on in the day like grocery shopping and picking up some dry cleaning but i don't mind because i enjoy being productive and crossing things off my to-do list i think it is important to have a balance between work and personal life and to make time for the things that bring us joy and happiness like spending time with loved ones or pursuing hobbies and interests that we are passionate about life is a journey full of ups and downs but it is important to stay positive ",
    "the world is a beautiful and diverse place filled with many different cultures and traditions i believe that we should celebrate our differences and learn from one another to create a more peaceful and harmonious world i think it is important to be open-minded and to embrace diversity in all its forms whether it is different religions ethnicities or lifestyles we should treat everyone with kindness and respect and work together to create a better future for all of us i also believe that education is key to promoting understanding and acceptance of others we should educate ourselves and our children about different cultures and histories to broaden our perspectives and to break down barriers that divide us i am optimistic about the future and i believe that we can create a more tolerant and inclusive world if we all work together towards this common goal it is up to each ",
    "life is a journey that is full of surprises and challenges we may not always know what lies ahead but we can choose how we respond to whatever comes our way i believe that resilience is one of the most important qualities that we can develop in life it is the ability to bounce back from setbacks and to keep moving forward even in the face of adversity i also think that it is important to have a sense of purpose in life and to pursue our passions and interests with enthusiasm and dedication when we are doing something that we truly love it gives us a sense of fulfillment and meaning that cannot be found in material possessions or external achievements at the same time it is important to find balance in life and to take care of our physical emotional and spiritual well-being we should prioritize self-care and make time for the things that bring us joy and relaxation like spending time in nature",
    "coding is a fascinating and rewarding field that allows us to create amazing things with just a few lines of code it is a language of the future that is essential for anyone who wants to stay relevant in todays digital age whether we are building websites developing apps or working on complex software systems coding gives us the power to bring our ideas to life and to solve problems in innovative ways it requires patience creativity and a willingness to learn from our mistakes but the rewards are endless when we are coding we enter into a state of flow where we are completely absorbed in the task at hand and lose track of time it is a meditative and rewarding experience that can bring us a sense of accomplishment and pride in our work the best part of coding is that it is accessible to anyone with a computer and an internet connection there are countless resources available online to help us learn and grow",
    "lj university is an esteemed institution of higher education that offers various undergraduate and graduate programs in fields such as business engineering law  with an experienced faculty of leading scholars and researchers the university is dedicated to nurturing a culture of excellence and innovation in education lj university's goal is to provide students with an enriching and diverse learning environment that is both stimulating and supportive regardless of the discipline lj university is committed to preparing students for success in their chosen fields of study lj university takes great pride in its inclusive and welcoming campus community the university is committed to promoting diversity and inclusivity in every aspect of student life students are encouraged to explore their passions and pursue meaningful research opportunities that contribute to society lj university's state-of-the-art facilities ",
    "cricket is a sport that is loved and celebrated by millions of people around the world it is a game that is played with a bat and a ball by two teams of eleven players each the objective of the game is for one team to score more runs than the other by hitting the ball and running between two sets of wickets that are placed at either end of the pitch cricket is known for its complex rules and strategies which require a great deal of skill and precision to master the sport has a rich history and has evolved significantly over the years with new formats and rules being introduced to keep up with the changing time  despite being a highly competitive sport cricket is also known for its sportsmanship and camaraderie players are expected to uphold the spirit of the game and respect their opponents at all times",
    "web development is a rapidly growing field that involves the creation and maintenance of websites and web applications with the increasing importance of the internet in todays world the demand for skilled web developers is higher than ever before web development requires a strong foundation in programming languages such as HTML CSS and JavaScript as well as an understanding of web frameworks databases and web servers web developers also need to have strong problem-solving and communication skills in order to work effectively in a team and meet the needs of clients there are many different areas of web development including front-end development which focuses on the visual and user-facing aspects of a website and back-end development which involves building the underlying infrastructure and functionality of a website full-stack developers are skilled in both front-end and back-end development and are in high demand in the industry",
    "the picket fence had stood for years without any issue thats all it was a simple white picket fence why it had all of a sudden become a lightning rod within the community was still unbelievable to most yet a community that had once lived in harmony was now divided in bitter hatred and it had everything to do with the white picket fence another option you have is choosing the number of syllables in the words you speak you probably have never considered this option before but you have it every time you open your mouth and speak you make so many choices like this that you never even think about but you have the choice with each one what are you going to do with this knowledge",
    "a cat is a domesticated mammal that belongs to the felidae family it is a carnivorous animal and typically has a short and sleek coat cats are known for their agility flexibility and gracefulness which makes them excellent hunters they have a keen sense of hearing smell and vision which allows them to easily locate prey cats are also known for their grooming habits and spend a significant amount of time cleaning themselves they use their rough tongue to remove loose hair and dirt from their fur cats are popular pets and are loved for their affectionate and playful nature they are known to be independent creatures that can adapt to various living conditions they are also believed to have therapeutic benefits and have been known to reduce stress and anxiety in their owners overall cats are fascinating animals that have been a part of human civilization for thousands of years their unique characteristics and behaviors continue to capture the hearts of many people around the world",
    "india is a country located in south asia it is the seventh largest country in the world by area and the second most populous country with over 1.3 billion people india is known for its rich history and cultural diversity it has been home to several ancient civilizations and empires and has a unique blend of religions languages and traditions india is also known for its diverse geography which includes the himalayan mountain range the thar desert and the coastline along the arabian sea and the bay of bengal india has a federal parliamentary democratic system of government and is divided into 28 states and 8 union territories the economy of india is the fifth largest in the world by nominal gdp and the third largest by purchasing power parity india is also known for its contributions to science and technology with achievements such as the discovery of zero and the invention of the decimal system and ayurvedic medicine india is also famous for its cuisine which is characterized by its use of spices and herbs overall india is a vibrant and fascinating country that has a lot to offer to visitors and residents alike."

]
const quotesPara = ["The only way to do great work is to love what you do. - Steve Jobs", "Be the change you wish to see in the world. - Mahatma Gandhi", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "Believe you can and you're halfway there. - Theodore Roosevelt", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey", "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean", "Happiness is not something ready made. It comes from your own actions. - Dalai Lama", "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein", "You miss 100% of the shots you don't take. - Wayne Gretzky", "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll", "The best way to predict your future is to create it. - Abraham Lincoln", "Strive not to be a success, but rather to be of value. - Albert Einstein", "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson", "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson", "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill", "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.", "Don't watch the clock; do what it does. Keep going. - Sam Levenson", "It does not matter how slowly you go as long as you do not stop. - Confucius", "The true test of leadership is how well you function in a crisis. - Brian Tracy", "If you want to make your dreams come true, the first thing you have to do is wake up. - J.M. Power"];

let timer, charIndex = 0, mistakes = 0, maxTime = 30, timeLeft = maxTime, isTyping = false, canBackSpace = true;
var wpm = 0, cpm = 0, accuracy = 0, rawwpm = 0, wordsIndex = 0, currentCharIndex = 0, extraCount = 0;
var isLastCharOfWord;
var buttons;
var timeButtons;
var timewordButton;
var finalPara = paras;
var settingsSvg;
var customTextOrNot = false;
document.addEventListener("DOMContentLoaded", function () {
    const themePresent = localStorage.getItem("prevTheme");
//     if (themePresent != "null") {
//         let theme = document.getElementById('theme-style');
//         theme.href = themePresent + '.css';
//     }
    const keyboardSound = document.querySelector('#keyboard-sound');
    const timeShow = document.getElementById("timer");
    const soundOff = document.querySelector('.soundOff');
    const typingContainer = document.querySelector(".typing-container")
    const customBtn = document.querySelector('#customBtn');

    inputField = document.querySelector(".typing-container .input-field"),
        mainMistakeTag = document.querySelector(".mistakes span"),
        timeTag = document.querySelector(".time span b"),
        wpmTag = document.querySelector(".speedwpm span"),
        cpmMainTag = document.querySelector(".speedcpm span"),
        resetBtn = document.querySelector("#resetBtn"),
        buttons = document.querySelectorAll(".game-button"),
        timeButtons = document.querySelectorAll(".time-button"),
        typingText = document.querySelector(".text-container");
    timeShow.innerHTML = "30";


    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (otherButton) {
                otherButton.classList.remove("active");
            });
            button.classList.add("active");
        });
    });


    timeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            timeButtons.forEach(function (otherButton) {
                otherButton.classList.remove("active");
            });
            button.classList.add("active");
        });
    });

    $('#customTextModal').on('shown.bs.modal', function () {
        setTimeout(() => {
            var myInput = document.querySelector('.usertext');
            var okBtn = document.getElementById("okbuttonText");
            // myInput.focus(); // Set focus to the input field
            okBtn.addEventListener('click', function () {
                var inputValue = myInput.value;
                finalPara = inputValue;
                console.log(finalPara); // Set flag to indicate custom time button was clicked
                customTextOrNot = true;
                randomParagraph();
            });
        }, 10);

    });
    soundOff.addEventListener('click', (event) => {
        if (soundOff.classList.contains('active')) {
            soundOff.classList.remove('active');
        }
        else {
            soundOff.classList.add('active');
        }
    });

    inputField.addEventListener('keydown', () => {
        if (!soundOff.classList.contains('active')) {
            keyboardSound.currentTime = 0; // Reset the audio file to the beginning
            keyboardSound.play();
        }
    });



    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.classList.contains("active")) {
                console.log(button.id);
                switch (button.id) {
                    case 'numberBtn':
                        finalPara = numbersPara;
                        break;
                    case 'punc':
                        finalPara = puncParagraphs;
                        break;
                    case 'quotesBtn':
                        finalPara = quotesPara;
                        break;
                    case 'onWords':
                        finalPara = paras;
                        break;
                    case 'customTextBtn':
                        $('#customTextModal').modal('show');
                        break;
                    default:
                        finalPara = paras;
                        break;
                }
                localStorage.setItem('buttonOn', button.id);
                randomParagraph();

            }
        });
    });

    $('#customTimeModal').on('shown.bs.modal', function () {
        var myInput = document.getElementById('usertime');
        var okBtn = document.getElementById("okbutton");
        myInput.focus(); // Set focus to the input field
        okBtn.addEventListener('click', function () {
            var inputValue = myInput.value;
            maxTime = parseInt(inputValue);
            timeShow.innerHTML = inputValue;
            timeLeft = maxTime;
            customTimeClicked = true; // Set flag to indicate custom time button was clicked
            randomParagraph();
        });
    });
    timeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.classList.contains("active")) {
                console.log(button.id);
                switch (button.id) {
                    case '15Btn':
                        maxTime = 15;
                        timeShow.innerHTML = "15";
                        break;
                    case '30Btn':
                        maxTime = 30;
                        timeShow.innerHTML = "30";
                        break;
                    case '60Btn':
                        maxTime = 60;
                        timeShow.innerHTML = "60";
                        break;
                    case '120Btn':
                        maxTime = 120;
                        timeShow.innerHTML = "120";
                        break;
                    case 'customTimeBtn':
                        $('#customTimeModal').modal('show'); // Show custom time modal
                        break;

                    default:
                        maxTime = 30;
                        break;
                }
                localStorage.setItem('timeOn', button.id);
                randomParagraph();
            }
        });
    });


    function randomParagraph() {

        let randomIndex = Math.floor(Math.random() * finalPara.length);
        typingText.innerHTML = "";
        var para;
        if (!customTextOrNot) {
            para = finalPara[randomIndex].split();

        }
        else {
            para = finalPara;
        }
        for (let i in para) {
            let words = para[i].split(" ");
            for (let j in words) {
                let chars = words[j].split("");
                let divTag = `<div class="word">`;
                for (let k in chars) {
                    let char = chars[k];
                    if (char === " ") {
                        divTag += `<span class="space">&nbsp;</span>`;
                    } else {
                        divTag += `<span>${char}</span>`;
                    }
                }
                divTag += `</div>`;
                typingText.innerHTML += divTag;
                if (j < words.length - 1) {
                    typingText.innerHTML += `<span class="space">&nbsp;</span>`;
                }
            }
            typingText.innerHTML += "<br>";
        }
        customTextOrNot = false;
        const initial = document.querySelector(".word");
        initial.classList.add("active");
        typingText.addEventListener("click", () => inputField.focus());

        inputField.value = "";
        clearInterval(timer);
        timeLeft = maxTime;
        charIndex = mistakes = isTyping = 0;
        timeTag.innerHTML = maxTime;
        mainMistakeTag.innerHTML = mistakes;
        cpmMainTag.innerHTML = 0;
        wpmTag.innerHTML = 0;
        charIndex = 0;
        wordsIndex = 0;
    }

    randomParagraph();
    typingContainer.addEventListener("input", initTyping);
    resetBtn.addEventListener("keydown", event => {
        if (event.key == "Enter") randomParagraph();
    });
    resetBtn.addEventListener("click", event => {
        if (customBtn.classList.contains('active')) {
            customTextOrNot = true;
        }
        randomParagraph();
    });

});

function initTyping() {
    chars = typingText.querySelectorAll("span");
    words = typingText.querySelectorAll(".word");
    let typeChar = inputField.value.split("")[charIndex];
    let visited = new Array(words.length).fill(false);
    if (charIndex > 0) {
        inputField.addEventListener("keydown", event => {
            if (event.ctrlKey && event.code === 'Backspace') {
                event.preventDefault();
            }
            if (event.code === 'Backspace' && chars[charIndex - 1].innerHTML === "&nbsp;") {
                event.preventDefault();
            }
        });
    }

    inputField.addEventListener("keydown", event => {
        if (chars[charIndex].innerHTML === "&nbsp;" && event.code != "Space" && event.code != "Backspace") {
            event.preventDefault();
        }
    });

    if (charIndex < chars.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typeChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (currentCharIndex > 0) {
                    currentCharIndex--;
                }
                chars[charIndex].classList.remove("correct", "incorrect");
            }
        }
        else {
            if (chars[charIndex].innerText.trim() === typeChar.trim()) {
                if (chars[charIndex].innerText.trim() === "" && typeChar.trim() === "") {
                    currentCharIndex--;
                    if (chars[charIndex].classList.contains("incorrect")) {
                        chars[charIndex].classList.remove("incorrect");
                        chars[charIndex].classList.add("correct");
                    }
                }
                else {
                    chars[charIndex].classList.add("correct");
                }
            }
            else {
                chars[charIndex].classList.add("incorrect");
                mistakes++;
            }
            charIndex++;
            currentCharIndex++;
        }
        chars.forEach(span => span.classList.remove("current"));
        chars[charIndex].classList.add("current");

        if (typeChar != null) {
            if (words[wordsIndex + 1] && currentCharIndex >= words[wordsIndex].innerText.length && typeChar.trim() === "" && !visited[wordsIndex]) {
                visited[wordsIndex] = true;
                words[wordsIndex].classList.remove("active");
                wordsIndex++;
                currentCharIndex = 0;
                words[wordsIndex].classList.add("active");
            }
        }
        inputField.addEventListener('keydown', (event) => {
            const textContainer = document.querySelector('.text-container');
            const activeWord = textContainer.querySelector('.word.active');

            // Get the position of the active word relative to the text-container
            const activeWordRect = activeWord.getBoundingClientRect();
            const textContainerRect = textContainer.getBoundingClientRect();
            const activeWordPosition = activeWordRect.top - textContainerRect.top;

            // Check if the active word is near the bottom of the visible area
            if ((activeWordPosition + activeWordRect.height) + 38 > textContainer.clientHeight) {
                // Scroll down by one line
                const lineHeight = parseFloat(getComputedStyle(textContainer).lineHeight);
                textContainer.scrollTop += lineHeight;
            }
        });
        wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft)) * 60);
        // if wpm value is zero,empty or infinite then set to 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        mainMistakeTag.innerHTML = mistakes;
        cpm = charIndex - mistakes;
        cpmMainTag.innerHTML = cpm;
        wpmTag.innerHTML = wpm;

    }
    else {
        inputField.value = "";
        clearInterval(timer);
    }
}



function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerHTML = timeLeft;
        if (timeLeft === 0) {
            calculateResult();
            window.location.href = "result.html";
            resultPage();
            clearInterval(timer);
        }
    }
}

function setTheme(themeName) {
    let theme = document.getElementById('theme-style');
    theme.href = themeName + '.css';
    localStorage.setItem("prevTheme", themeName);
}

function calculateResult() {
    accuracy = ((charIndex - mistakes) / charIndex) * 100;
    accuracy = accuracy.toFixed(2);
    rawwpm = ((charIndex - mistakes) / 5) / ((maxTime / 60));

    localStorage.setItem("wpm", wpm);
    localStorage.setItem("accuracy", accuracy);
    localStorage.setItem("rawwpm", rawwpm);
    localStorage.setItem("cpm", cpm);
    localStorage.setItem("mistakes", mistakes);
    localStorage.setItem("time", maxTime);

}

function focusOn() {
    const focusBtn = document.getElementById('focusbutton');
    const settingBar = document.querySelector('.settings-bar');
    const footer = document.querySelector('.footer');

    if (!focusBtn.classList.contains('active'))
        focusBtn.classList.add('active');
    else focusBtn.classList.remove('active');

    if (!settingBar.classList.contains('focusMode'))
        settingBar.classList.add('focusMode');
    else settingBar.classList.remove('focusMode');

    if (!footer.classList.contains('focusMode'))
        footer.classList.add('focusMode');
    else footer.classList.remove('focusMode');


}










