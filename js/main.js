var signs = [
	{
		name: 'Aquarius',
		desc: 'Aquarius born are shy and quiet but on the other hand they can be eccentric and energetic. However, in both cases they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice on both sides, which makes them people who can easily solve problems.',
		img: "img/aquarius.jpg"
	},
	{
		name: 'Aries',
		desc: 'Aries is the leading sign in the roll-call of the Zodiac, and people born in this group strive to win, and be the best in every activity they undertake. This is the moving force that gives members of this sign the competitive streak which drives them to the forefront of the action.',
		img: "img/aries.jpg"
	},
	{
		name: 'Taurus',
		desc: 'Possessions are therefore very important, acting as they do as anchors, keeping their lives on a steady even keel. Patience is a strong suit, and they like to take their time to consider their options fully. However, determined and steadfast – once Taureans have a goal in mind, there is very little that will deflect them from their chosen course of action.',
		img: "img/taurus.jpg"
	},
	{
		name: 'Gemini',
		desc: 'Blessed with intelligence and wit, most Gemini people are born with a special talent for putting difficult concepts and ideas into words. In short, they have a gift for communication and many members of this sign excel in languages and literature.',
		img: "img/gemini.jpg"
	},
	{
		name: 'Cancer',
		desc: 'Many Cancerians are happy to devote themselves entirely to the care and protection of their loved ones, striving hard to create a warm and harmonious domestic life so essential to their well being.',
		img: "img/cancer.jpg"
	},
	{
		name: 'Leo',
		desc: 'Proud as peacocks, their stately bearing and noble manner confers upon them a regal presence which attracts respect from others. Just as well, since they thrive on praise and adulation – so much so in fact, that many are all too often taken in by empty flattery.',
		img: "img/lion.jpg"
	},
	{
		name: 'Virgo',
		desc: 'High standards of excellence characterize Virgo people. Cool, careful and analytical, their razor-sharp mentality can pick things up at a glance, and focus in on very small details in a flash. It’s true that they can be fussy, but on the otherhand, all Virgos display great intelligence, and are blessed with powers of reasoning which are hard to match.',
		img: "img/virgo.jpg"
	},
	{
		name: 'Libra',
		desc: 'High standards of excellence characterize Virgo people. Cool, careful and analytical, their razor-sharp mentality can pick things up at a glance, and focus in on very small details in a flash. It’s true that they can be fussy, but on the otherhand, all Virgos display great intelligence, and are blessed with powers of reasoning which are hard to match.',
		img: "img/libra.jpg"
	},
	{
		name: 'Scorpio',
		desc: 'Yet, no matter how much they try, it is unlikely that anyone will succeed in completely penetrating a Scorpio’s mysterious and puzzling soul, for members of this Sign are secretive individuals, who are fiercely protective of their own privacy. Whether at home, work or in love, Scorpios need to be the one in control.',
		img: "img/scorpio.jpg"
	},
	{
		name: 'Sagittarius',
		desc: 'Incorrigibly cheerful and optomistic, Sagittarian enthusiasm gives the members of this Sign a zest for life. Sporty and firm, these dynamic people are driven by seemingly blind faith, telling themselves that all is for the best in the best of possible worlds.',
		img: "img/sagittarius.jpg"
	},
	{
		name: 'Capricorn',
		desc: 'Arguably the most mature sign of the Zodiac, Capricorns are serious and sober individuals with a strong sense of built-in responsibility to protect and provide for others. These are solid-as-a-rock individuals who aim for the top, and usually get there.',
		img: "img/capricorn.jpg"
	},
	{
		name: 'Pisces',
		desc: 'Arguably the most mature sign of the Zodiac, Capricorns are serious and sober individuals with a strong sense of built-in responsibility to protect and provide for others. These are solid-as-a-rock individuals who aim for the top, and usually get there.',
		img: "img/pisces.jpg"
	},

];

var myH1 = document.getElementById("myH1");
var myP = document.getElementById("myP");
var myImage = document.getElementById("myImage");

var userInput = document.getElementById("userInput");


function getInfo() {

	for(var i = 0; i < signs.length; i++) {
		console.log("now checking if " + userInput.value + " is equal to " + signs[i].name);
		if(userInput.value.toLowerCase() == signs[i].name.toLowerCase()) {
			myH1.innerText = signs[i].name;
			myP.innerText = signs[i].desc;
			myImage.src = signs[i].img;
			return;
		}
	}

	alert("That's not a Zodiac Sign");

}
