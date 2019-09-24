import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		language: "bg",
		en: {
			nav: {
				link1: "Home",
				link2: "Menu",
				link3: "About us",
				link4: "Find us",
				link5: "Services",
			},
			home: {
				title: "Fall in love with our food",
				slogan: "",

				introText1:
					"Chushka is not just a spot in town where you can eat. This is a remarkable place with friendly staff where you can enjoy fresh, healthy cooked and absolutely delicious food. We offer highest level of customer service and exceptional meals for every taste. Our recipes are influenced by different parts of Europe and world, twisted through our vision for cooking. The products we use are fresh and carefully selected to give you the best experience and joy of tasting the food.",
				introText2:
					"Despite all these years we’ve spent abroad we love our beautiful country and are now trying to support all the Bulgarian producers and farmers. That’s why every day we choose to cook with the best local fresh meat, veggies and fruits. Our meals are perfectly balanced, dressed and topped before they reach you, but of course if you need something in extra or to be prepared individually just let us know.",
				introText3:
					"We do believe that our roasted slow cooked pork and chicken are the best you can choose in town and dare you to try it.",
			},
			about: {
				title1: "Why to choose us",
				title2: "Eat differently",
				title3: "High quality ingredients",
				slogan1: "What makes the difference",
				slogan2: "Fresh products every day",
				slogan3: "Tender meat and fresh veggies",

				text1: "",
				text2: "",
				text3:
					"Eating healthy requires consuming a variety of nutritious foods. Nowadays lots of people are trying to achieve balanced, healthy way of eating and we do understand this necessity. That’s why our team’s goal is to test, evaluate and develop healthy options of recipes that are beneficial, tasty, varied and nutritious. For us healthy is always equal to delicious.",
				text4:
					"Every day we are buying fresh salads, veggies and fruits grown in Bulgaria. The meat we cook is always fresh and certified. That is how we are trying to support our local production. The cheese we use is with BDS (BDS develops, accepts and approves Bulgarian standards, participates in the work of international and European organizations for standardization). The eggs in our salads are boiled every day. There are only few products we import directly from their home for authentic taste – Prosciutto, Parmesan, Mature Cheddar Cheese.",
				text5: "",

				stars: {
					star1: "Food prepared according to the World Standards of Quality",
					star2: "Never freeze or use of processed food ",
					star3: "Exceptional, high level of customer service",
					star4: "Low, affordable prices",
					star5: "Fast and efficient delivery",
					star6: "HACCP system trained staff",
					star7: "Extraordinary care, attention and attitude towards every client",
					star8:
						"First class packaging, corresponding to the quality of food you receive ",
					star9: "Support local farmers, fruits/vegetables producers",
					star10: "Perfect location in the city center ",
					star11: "Always fresh and tasty",
					star12: "Authentic, original and own recipes",
					star13: "Irresistible, obsessive and scrumptious taste",
					star14: "Catering",
				},
				offers: {
					offerName: "Offer",
					lunchMenu: "Lunch menu",
					offer1: "Call us for todays lunch menu - 0893 099 399",
					offer2: "Charcoal grilled whole chicken - 11lv",
					offer3: "FREE DELIVERY FOR CITY CENTER AND ORDERS ABOVE 25 lv",
				},
			},
			services: {
				title: "CATERING",
				slogan: "because you deserve the best",
				text:
					"After a few catering events organized lately, we are absolutely sure we can satisfy even the choosiest customers. We are open for your ideas with full willingness to make them happen. Please don’t hesitate to contact us for more details and a quote.",
				title2: "It will be an honour for us to prepare for you:",
				items: [
					"Company caterings",
					"Corporate holidays",
					"Official presentations",
					"Conferences",
					"Business cafe pauses",
					"Personal or family celebrations",
					"Anniversaries",
					"BBQ parties or other surprises for your loved ones, no special occasion needed",
				],
			},

			fixedStatement:
				"We have spent some time abroad, where we gain experience in the local restaurants and we actually realized that the small menu is prestige that first class restaurants possess. For that reason and because we learn from the best we decided to create a short menu which of course covers all tastes and preference",
			fixedStatement2:
				"It may sounds a little bit immodest but we do claim that our food is different. Every meal is absolutely 100 % healthy cooked. Everything is oven baked, roasted, poached, grilled, boiled or steamed and never fried",
			fixedStatement3:
				"We're proud to be working with such a team of professionals. For us the employees are a driving force on the path to success. Currently you can choose between our summer garden with around 50 seats, a small hall with 15 seats and our big hall with 80 seats, which is also perfect for planned events, workshops and others. Don't hesitate to contact us regarding additional information, questions and reservations",

			fs1: "Food matters",
			fs2: "Our food is different",
			fs3: "Service",
			promo1: "We prepare our products with exceptional care and passion...",
			promo2:
				"Every sauce, dressing or marinate is prepared in our fully equipped kitchen.We have a recipe for each of  them which has been inspired by special place or person. But the main ingredient behind everything in Chushka is LOVE",
			menu: {
				wine: {
					name: "Wine",
					items: [
						{
							name: "Logodaj Sauvignon Blanc",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Logodaj Chardonnay",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Logodaj Merlo",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Nobile Rose",
							price: "22.00",
							qty: "750ml",
						},
						{
							name: "Katarzyna Bio Rose",
							price: "32.00",
							qty: "750ml",
						},
						{
							name: "Chilensis Sauvignon Blanc",
							price: "26.00",
							qty: "750ml",
						},
						{
							name: "Melnik 55",
							price: "16.00",
							qty: "750ml",
						},
						{
							name: "Glass white wine",
							price: "2.50",
							qty: "200ml",
						},
						{
							name: "Glass rose",
							price: "2.50",
							qty: "200ml",
						},
					],
					promo: {
						name: "Menu",
						desc: "Download our menu!",
						color: "#2B3136",
						gotoSection: "brochure",
					},
					color: "#242424",
					image: "menu_2.jpg",
				},
				forWine: {
					name: "for wine",
					items: [
						{
							name: "Caeser salad",
							price: "7.50",
							ingredients:
								"/iceberg salad, delicious chicken, original caesar dressing, crispy bacon, home baked croutons, cherry tomatoes, parmesan/",
						},
						{
							name: "Chushka salad",
							price: "7.00",
							ingredients:
								'/mixed leaves "lolo rosso" and lettuce, pesto dressing, cucumber white cheese, egg, tender chicken/',
						},
						{
							name: "Vienna salad",
							ingredients:
								"/iceberg salad, crumbled blue cheese, citrus dressing, walnuts, fresh apple and pomegranate/",
						},
						{
							name: "Surprise salad (only for adventurers)",
						},
						{
							name: "Goat cheese salad",
							price: "7.00",
							ingredients:
								'/mixed leaves "lolo rosso", tocket, mature goat cheese, quail eggs, raspberry dressing, walnuts and pumpkin seeds/',
						},
						{
							name: "Mixed cheese, fruits and crackers (plate for 2)",
						},
						{
							name:
								"Fresh tagliatelle with prosciutto, white wine sauce, cherry tomatoes and parmesan",
						},
						{
							name: "Wild mushrooms risotto",
						},
						{
							name: "Bruschetta mix (4 pieces)",
							ingredients:
								"/garlic butter, olives, tomatoes and white cheese / cream cheese and prosciutto/",
						},
					],
					promo: {
						name: "",
						desc: "Healthy also means tasty",
						color: "#24292D",
						gotoSection: "second",
					},
					color: "#2B3136",
					image: "menu_3.jpg",
				},
				beer: {
					name: "Beer",
					items: [
						{
							name: "Aloha IPA exclusively from RHOMBUS brewery",
							price: "3.30",
							qty: "500ml",
						},
						{
							name: "Irish Red Ale exclusively from RHOMBUS brewery",
							price: "3.30",
							qty: "500ml",
						},
						{
							name: "Brennero Lager bottle",
							price: "3.50",
							qty: "500ml",
						},
						{
							name: "Brennero Dark bottle",
							price: "3.50",
							qty: "500ml",
						},
					],
					promo: {
						name: "Our beer",
						desc: "We only do real, craft beer!",
						color: "#242424",
						gotoSection: "first",
					},
					color: "#24292D",
					image: "menu_4.jpg",
				},
				forBeer: {
					name: "for BEER",
					items: [
						{
							name: "Blackrock Burger",
							price: "6.50",
							ingredients:
								"/slow cooked pulled pork, mature cheddar, home made pickles, coleslaw, tomatoes, lettuce and 1000 island sauce/",
						},
						{
							name: "Mississippi Burger",
							price: "6.50",
							ingredients:
								"/tender oven baked Cajun chicken, mature cheddar cheese, coleslaw, tomatoes, lettuce, Cajun sauce/",
						},
						{
							name: "Alabama Burger",
							price: "7.50",
							ingredients:
								"/beef burger, caramelized red onion, mature cheddar, egg, tomatoes, lettuce, Iowa sauce/",
						},
						{
							name: "New York Burger",
							ingredients:
								"/beef burger, crispy bacon, onion ring, mature cheddar, iceberg salad, tomatoes, blue cheese sauce/",
						},
						{
							name: "Veggie Burger",
							price: "5.50",
							ingredients:
								"/cream cheese with herbs, grilled zucchuni with thyme, roasted bell pepper, pesto dressing, mature cheddar, lettuce and tomatoes/",
						},
						{
							name: "American Hot Dog",
							ingredients:
								"/smoked grilled sausage, caramelized red onion, lettuce, mature cheddar, tomatoes, dijonaise and tomatoe sauce/",
						},
						{
							name: "Crispy chicken wings",
							price: "5.50",
						},
						{
							name: "Charcoal grilled whole chicken",
							price: "11.00",
						},
						{
							name: "Charcoal grilled ribs",
						},
						{
							name: "French fries",
							price: "1.50",
						},
						{
							name: "Onion rings",
						},
					],
					promo: {
						name: "The burgers",
						desc: "Fries as a side with every burger",
						color: "#2B3136",
						gotoSection: "first",
					},
					color: "#242424",
					image: "menu_2.jpg",
				},
				desserts: {
					name: "Desserts and beverages",
					items: [
						{
							name: "Panna cotta",
						},
						{
							name: "Brownie",
						},
						{
							name: "Red velvet cake",
						},
						{
							name: "Pancake with home made milk chocolate",
						},
						{
							name: "Thai ice cream",
							price: "5.00",
							ingredients: "/choose your flavour with out ice cream master/",
						},
						{
							name: "Tea",
						},
						{
							name: "Coffee KIMBO",
							price: "1.60",
						},
						{
							name: "Cappuchino",
							price: "2.20",
						},
						{
							name: "Nescafe 3 in 1",
						},
						{
							name: "Frappe",
						},
						{
							name: "San Benedetto ice tea",
							price: "2.30",
						},
						{
							name: "Pepsi / Mirinda / 7UP",
							price: "1.90",
						},
						{
							name: "Home made Lemonade - glass / pitcher 1L",
							price: "3.00 / 6.00",
						},
						{
							name: "San Benedetto sparkling water",
							price: "1.50",
						},
						{
							name: "Sonda juice",
						},
						{
							name: "Still water",
							price: "1.20",
							qty: "0.5L",
						},
					],
					promo: {
						name: "",
						desc: "Здравословно значи и вкусно",
						color: "#24292D",
						gotoSection: "second",
					},
					color: "#2B3136",
					image: "menu_3.jpg",
				},
				alcohol: {
					name: "Alcohol 50ml",
					items: [
						{
							name: "Bushmills whiskey",
							price: "3.50",
						},
						{
							name: "Jack Daniel's whiskey",
							price: "4.80",
						},
						{
							name: "Jameson whiskey",
							price: "3.50",
						},
						{
							name: "J&B Scotch whiskey",
							price: "3.50",
						},
						{
							name: "Johnnie Walker whiskey",
							price: "3.50",
						},
						{
							name: "Jim Beam bourbon",
							price: "3.50",
						},
						{
							name: "Captain Morgan spiced rum",
							price: "3.50",
						},
						{
							name: "Beefeater Gin",
							price: "3.00",
						},
						{
							name: "Savoy Club Gin",
							price: "2.00",
						},
						{
							name: "Finlandia vodka",
							price: "3.00",
						},
						{
							name: "Russian standart vodka",
						},
						{
							name: "Zytnia vodka",
							price: "2.50",
						},
						{
							name: "Plomari Ouzo",
							price: "2.40",
						},
						{
							name: "Martini Bianco",
							price: "3.00",
						},
						{
							name: "Baileys Irish Cream",
							price: "3.00",
						},
					],
					promo: {
						name: "",
						desc: "Защо сме номер едно",
						color: "#242424",
						gotoSection: "first",
					},
					color: "#24292D",
					image: "menu_4.jpg",
				},
			},
			menuEnd: "It's a pleasure for us to prepare your food",
			currency: "lv.",
			workHours: {
				name: "Working Hours",
				work1: "Mon - Fri | 9:30 - 20:00",
				work2: "Sat | 10:30 - 15:00",
				work3: "Sunday - Closed",
			},
			location: {
				name: "Address",
				address: "ul. 'Doctor Hristo Tatarchev' 12, 2700 Blagoevgrad Center, Blagoevgrad",
			},
		},
		bg: {
			nav: {
				link1: "Начало",
				link2: "Меню",
				link3: "За нас",
				link4: "Намерете ни",
				link5: "Услуги",
			},
			home: {
				title: "ще заобичате нашата храна",
				slogan: "",
				introText1:
					"Чушка е не просто заведение, а мястото което се отличава с винаги свежа, прясна и здравословно приготвена храна, перфектно обслужване и невероятни авторски специалитети, които няма да срещнете никъде в града. Рецептите ни са повлияни от различни краища на Европа и света, изцяло пречупени през нашия поглед и разбиране за храната. Продуктите, с които готвим са старателно подбрани и съчетани, за да ви предоставят неповторимо удоволствие и преживяване от храненето.",
				introText2:
					"Въпреки прекараните години в чужбина ние сме родолюбци и се стремим да подкрепяме родното производство. Поради тази причина всеки ден избираме за вас най-висококачествените родни зеленчуци, месо и млечни продукти. Ние, екипът на Чушка се грижим за това авторските ни рецепти да достигат до вас изпипани до съвършенство, като разбира се винаги има вариант да добавите нещо и от вас. Вярваме, че приготвяме най-вкусното бавно печено, свинско и пилешко месо и ви предизвикваме да го опитате.",
			},
			about: {
				title1: "Защо да изберете нас",
				title2: "Яж по-различно",
				title3: "Най-качествените съставки",
				slogan1: "Какво ни отличава от всички останали",
				slogan2: "Разнообрано и здравословно",
				slogan3: "Най-крехкото месо и най-свежите зеленчуци",
				text1: "",
				text2: "",
				text3:
					"Пълноценното хранене изисква консумация на разнообразни храни. Все повече хора се стремят към балансиран и здравословен начин на живот и ние разбираме тези потребности. Ето защо разработваме здравословни варианти на рецепти, които да са достатъчно хранителни и засищащи в забързаното ежедневие и хапването на крак. За нас, екипът на ЧУШКА, здравословно винаги е равно на вкусно.",
				text4:
					"Ежедневно зареждаме пресни и свежи зеленчуци, които са отгледани в България. Месото, което приготвяме, е само и единствено охладено и разбира се българско, като по този начин се стремим да подкрепяме и родното производство. Сиренето, което използваме е по Български Държавен Стандарт и с гарантиран произход. Яйцата,които добавяме в салатите се варят ежедневно. Единствените  продукти, които не са български, са прошутото и пармезана, които поръчваме от Италия , за да се насладите на 100% автентичния им вкус.",
				text5: "",
				stars: {
					star1: "Безкомпромисно, бързо и качествено обслужване",
					star2: "Храна приготвена съгласно всички световни стандарти за качество",
					star3: "Изключителна грижа, внимание и отношение към клиента",
					star4: "Вкусна и здравословна храна, приготвена с  много любов",
					star5: "Опаковка отговаряща на високия клас храна, която получавате в нея",
					star6: "Подкрепяме българските месо и зеленчукопроизводители",
					star7: "Не замразяваме храната, която готвим",
					star8: "Перфектна локация в идеален център",
					star9: "Винаги прясна и свежа храна",
					star10: "Пристрастяващ вкус",
					star11: "Авторски рецепти",
					star12: "Ниски цени",
				},
				offers: {
					offerName: "Оферта",
					lunchMenu: "Обедно меню",
					offer1: "Позвънете ни за днешното обедно меню - 0893 099 399",
					offer2: "Пиле на дървени въглища - 11лв.",
					offer3: "Безплатна доставка за поръчки над 25лв.",
				},
			},
			services: {
				title: "Кетъринг от Чушка",
				slogan: "защото заслужавате най-доброто",
				text:
					"След няколко успешно организирани кетъринг мероприятия сме сигурни, че ще задоволим и най-претенциозните ни клиенти. Отворени сме за вашите идеи с пълна готовност да ги реализираме.",
				title2: "За нас ще бъде чест да подготвим за вас:",
				items: [
					"фирмен кетъринг",
					"корпоративен празник",
					"служебна презентация",
					"конферентни събития",
					"бизнес кафе - пауза",
					"личен или семеен празник",
					"годишнина",
					"барбекю парти или просто изненада за любимите ви хора, без повод",
				],
			},
			fixedStatement:
				"Не се опитваме да се правим на готини, но малкото артикули в менюто са престиж, който притежават изисканите ресторанти, а ние се учим от най-добрите в бранша.  Ето защо нашето меню е малко, но за сметка на това разнообразно,здравословно и вкусно",
			fixedStatement2:
				"Колкото и нескромно да звучи, ние от екипът на Чушка твърдим, че нашата храна е различна. Тя е 100% здравословно приготвена – месото и зеленчуците се пекат, гриловат, пушират, но в никакъв случай не се пържат",
			fixedStatement3:
				"Горди сме, че работим с такъв екип от професионалисти. За нас, служителите са движеща сила в пътя към успеха.  В момента на ваше разположение е лятната ни градина с около 50 места , малка зала с около 15 седящи места и голямата ни зала с капацитет 80 седящи места, която е подходяща за планирани мероприятия, уъркшопове и други. За повече информация, запитвания и резервация, не се колебайте да се свържете с нас",
			fs1: "Защото храната има значение",
			fs2: "храната, която е различна",
			fs3: "Обслужване",
			promo1: "",
			promo2:
				"ВСИЧКИ СОСОВЕ, ДРЕСИНГИ И МАРИНАТИ В „ЧУШКА” СЕ ПРАВЯТ НА МЯСТО ОТ НАС. ЗА ВСЕКИ ОТ ТЯХ ИМА Специална рецепта, вдъхновена от нещо или някого. Основната съставка за всичко, приготвено в кухнята ни е голяма доза любов.",
			menu: {
				// Colors: #2B3136 | #242424 |---| #24292D | #2B3136 |---| #2B3136 | #242424
				forWine: {
					name: "За вино",
					items: [
						{
							name: "Салата Цезар",
							price: "7.50",
							ingredients:
								"/айсберг, пилешко, оригинален дресинг, хрупкав бекон, домашно печени крутони, чери домати, пармезан/",
						},
						{
							name: "Салата Чушка",
							price: "7.50",
							ingredients:
								'/микс салати "лоло росо", пилешко, краставица, яйце, краве сирене, босилеков дресинг/',
						},
						{
							name: "Салата Виена",
							price: "",
							ingredients:
								"/айсберг, натрошено синьо сирене, печени орехи, цитрусов дресинг, ябълка, нар/",
						},
						{
							name: "Салата Изненада (за авантюристи)",
							price: "",
						},
						{
							name: "Салата с козе сирене",
							price: "7.00",
							ingredients:
								'/микс салати "лоло росо", малинов дресинг, рукола, козе сирене, падпъдъчи яйца, ореги и тиквани семки/',
						},
						{
							name: "Плато сирена с крекери и плодове за двама",
							price: "",
						},
						{
							name: "Прясна паста с прошуто, сос бяло вино, чери домати и пармезан",
							price: "",
						},
						{
							name: "Ризото с диви гъби",
							price: "",
						},
						{
							name: "Брускети микс",
							price: "",
							ingredients:
								"/домати, маслини, сирене и чесново масло/крема сирене и прошуто/",
						},
					],
					promo: {
						name: "",
						desc: "Здравословно значи и вкусно",
						color: "#24292D",
						gotoSection: "second",
					},
					color: "#2B3136",
					image: "menu_3.jpg",
				},

				wine: {
					name: "Вино",
					items: [
						{
							name: "Katarzyna Bio Rose",
							price: "32.00",
							qty: "750ml",
						},
						{
							name: "Chilensis Sauvignon Blanc",
							price: "26.00",
							qty: "750ml",
						},
						{
							name: "Логодаж Розе Нобиле",
							price: "22.00",
							qty: "750ml",
						},
						{
							name: "Мелник 55",
							price: "16.00",
							qty: "750ml",
						},
						{
							name: "Логодаж Совиньон Блан",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Логодаж Мерло",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Логодаж Шардоне",
							price: "18.00",
							qty: "750ml",
						},
						{
							name: "Логодаж чаша розе",
							price: "2.50",
							qty: "200ml",
						},
						{
							name: "Логодаж чаша бяло вино",
							price: "2.50",
							qty: "200ml",
						},
					],
					promo: {
						name: "Меню",
						desc: "Свалете нашето меню!",
						color: "#2B3136",
						gotoSection: "brochure",
					},
					color: "#242424",
					image: "menu_2.jpg",
				},

				forBeer: {
					name: "За бира",
					items: [
						{
							name: "Блекрок Бургер",
							price: "6.50",
							ingredients:
								"/Бавно печено свинско, чедър, колсло, домашни кисели краставички, домат, марула, сос 1000 острова/",
						},
						{
							name: "Мисисипи Бургер",
							price: "6.50",
							ingredients:
								"/крехко пилешко, чедър, колсло, домат, марула, сос Cajun/",
						},
						{
							name: "Алабама Бургер",
							price: "7.50",
							ingredients:
								"/бургер от мляно телешко месо, карамелизиран червен лук, чедър, яйце, домат, марула, сос Айова/",
						},
						{
							name: "Ню Йорк Бургер",
							ingredients:
								"/бургер от мляно телешко месо, хрупкав бекон, лучено кръгче, чедър, айсберг, домат, сос синьо сирене/",
						},
						{
							name: "Вегетариански Бургер",
							price: "5.50",
							ingredients:
								"/крема сирене с подправки, грилована тиквичка с мащерка, печена червена чушка, песто дресинг, чедър, марула, домат/",
						},
						{
							name: "Америкън Хот Дог",
							ingredients:
								"/свински кренвирш, карамелизиран лук, чедър, марула, сос Дижонез, доматен сос/",
						},
						{
							name: "Пилешки крилца",
							price: "5.50",
						},
						{
							name: "Пиле на дървени въглища",
							price: "11.00",
						},
						{
							name: "Ребра на дървени въглища",
						},
						{
							name: "Пържени картофи",
							price: "1.50",
						},
						{
							name: "Лучени кръгчета",
						},
					],
					promo: {
						name: "Бургерите",
						desc: "Към всеки бургер получавате картофки",
						color: "#2B3136",
						gotoSection: "first",
					},
					color: "#242424",
					image: "menu_2.jpg",
				},

				beer: {
					name: "Бира",
					items: [
						{
							name: "Алоха ИПА ексклузивно от пивоварна Ромбус",
							price: "3.30",
							qty: "500ml",
						},
						{
							name: "Червен Ирландски ЕЙЛ ексклузивно от пивоварна Ромбус",
							price: "3.30",
							qty: "500ml",
						},
						{
							name: "Brennero Lager бутилка",
							price: "3.50",
							qty: "500ml",
						},
						{
							name: "Brennero Dark бутилка",
							price: "3.50",
							qty: "500ml",
						},
					],
					promo: {
						name: "Нашата бира",
						desc: "Предлагаме само истинска, заначтчийска крафт бира!",
						color: "#242424",
						gotoSection: "first",
					},
					color: "#24292D",
					image: "menu_4.jpg",
				},

				desserts: {
					name: "Десерти и безалкохолни",
					items: [
						{
							name: "Панакота",
						},
						{
							name: "Брауни",
						},
						{
							name: "Торта червено кадифе",
						},
						{
							name: "Палачинка с домашен течен шоколад",
						},
						{
							name: "Тайландски сладолед на плоча",
							price: "5.00",
						},
						{
							name: "Чай",
						},
						{
							name: "Еспресо KIMBO",
							price: "1.60",
						},
						{
							name: "Капучино",
							price: "2.20",
						},
						{
							name: "Мляко с какао / Мляко с нес",
							price: "2.00",
						},
						{
							name: "Фрапе",
						},
						{
							name: "Pepsi / Mirinda / 7UP",
							price: "1.90",
						},
						{
							name: "San Benedetto студен чай",
							price: "2.30",
						},
						{
							name: "San Benedetto газирана вода",
							price: "1.50",
						},
						{
							name: "Предела минерална вода",
							price: "1.20",
							qty: "0.5L",
						},
						{
							name: "Домашна лимонада чаша / кана",
							price: "3.00 / 6.00",
						},
					],
					promo: {
						name: "",
						desc: "Здравословно значи и вкусно",
						color: "#24292D",
						gotoSection: "second",
					},
					color: "#2B3136",
					image: "menu_3.jpg",
				},

				alcohol: {
					name: "Алкохол 50мл",
					items: [
						{
							name: "Bushmills whiskey",
							price: "3.50",
						},
						{
							name: "Jack Daniel's whiskey",
							price: "4.80",
						},
						{
							name: "Jameson whiskey",
							price: "3.50",
						},
						{
							name: "J&B Scotch whiskey",
							price: "3.50",
						},
						{
							name: "Johnnie Walker whiskey",
							price: "3.50",
						},
						{
							name: "Jim Beam bourbon",
							price: "3.50",
						},
						{
							name: "Captain Morgan spiced rum",
							price: "3.50",
						},
						{
							name: "Beefeater Gin",
							price: "3.00",
						},
						{
							name: "Savoy Club Gin",
							price: "2.00",
						},
						{
							name: "Finlandia vodka",
							price: "3.00",
						},
						{
							name: "Russian standart vodka",
						},
						{
							name: "Zytnia vodka",
							price: "2.50",
						},
						{
							name: "Plomari Ouzo",
							price: "2.40",
						},
						{
							name: "Martini Bianco",
							price: "3.00",
						},
						{
							name: "Baileys Irish Cream",
							price: "3.00",
						},
					],
					promo: {
						name: "",
						desc: "Защо сме номер едно",
						color: "#242424",
						gotoSection: "first",
					},
					color: "#24292D",
					image: "menu_4.jpg",
				},
			},
			menuEnd: "За нас е удоволствие да приготвяме храната ви!",
			currency: "лв.",
			workHours: {
				name: "Работно време",
				work1: "Пон - Пет | 9:30 - 20:00",
				work2: "Събота | 10:30 - 15:00",
				work3: "Неделя | Closed",
			},
			location: {
				name: "Местоположение",
				address: "ул. 'Доктор Христо Татарчев' 12, 2700 Благоевград Център, Благоевград",
			},
		},
	},
	mutations: {
		toogleLanguage(state) {
			if (state.language === "bg") state.language = "en";
			else state.language = "bg";
		},
	},
	actions: {},
	getters: {
		displayLang: state => {
			if (state.language === "bg") return state.bg;
			return state.en;
		},
	},
});
