/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require("ask-sdk");

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "LaunchRequest" ||
      (request.type === "IntentRequest" &&
        request.intent.name === "GetNewFactIntent")
    );
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .withSimpleCard(SKILL_NAME, randomFact)
      .getResponse();
  }
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  }
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      (request.intent.name === "AMAZON.CancelIntent" ||
        request.intent.name === "AMAZON.StopIntent")
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak(STOP_MESSAGE).getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    console.log(
      `Session ended with reason: ${
        handlerInput.requestEnvelope.request.reason
      }`
    );

    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak("Sorry, an error occurred.")
      .reprompt("Sorry, an error occurred.")
      .getResponse();
  }
};

const SKILL_NAME = "Year Facts";
const GET_FACT_MESSAGE = "Here's your random year fact: ";
const HELP_MESSAGE =
  "You can say tell me a year fact, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const data = [
  "1919 is the year that the Hungarian Soviet Republic is established by Béla Kun on March 21st.",
  "1748 is the year that the building of Sveaborg begins near Helsinki.",
  "681 is the year that Wilfrid of York is expelled from Northumbria by Ecgfrith, and retires into Sussex.",
  "800 is the year that December 25 - Pope Leo III crowns Charlemagne Emperor of the Holy Roman Empire in Saint Peter's Basilica in Rome.",
  "413 is the year that Kumaragupta I succeeds his father Chandragupta II as emperor of the Gupta Empire (India).",
  "66 BC is the year that Cicero becomes praetor of Sicily.",
  "760 is the year that Emperor Xuanzong is placed under house arrest by Li Fuguo with the support of Emperor Suzong.",
  "1458 is the year that the Jewish community is expelled from Erfurt (Germany), their houses are sold and the synagogue turned into an arsenal.",
  "1831 is the year that Slave trading is forbidden in Brazil on November 7th.",
  "489 is the year that the first Confucian Temple is constructed in north China (outside the ancestral temple at Qufu).",
  "629 is the year that Muslim attack and capture of this fortified Jewish oasis, 150 kilometers from Medina on Arabia: Battle of Khaybar NaNth.",
  "1260 is the year that the Sena Dynasty of Bengal falls.",
  "281 is the year that Emperor Probus returns to Rome, where he celebrates his triumph over the Vandals and the usurpers (Bonosus, Julius Saturninus and Proculus).",
  "1385 is the year that Castello Estense in Ferrara (present-day Italy).",
  "400 is the year that the mausoleum of Galerius in Salonica (Greece) is converted into a church.",
  "1068 is the year that William the Conqueror takes Exeter after a brief siege.",
  "904 is the year that the Abbasids invade the Tulunid emirate of Egypt.",
  "605 is the year that the Chinese Zhaozhou Bridge is completed under the Sui Dynasty, the earliest known fully stone open-spandrel segmental arch bridge in the world.",
  "1721 is the year that Pope Innocent XIII succeeds Pope Clement XI as the 244th pope on May 8th.",
  "1055 is the year that the Seljuk Turks capture Baghdad; Al-Malik al-Rahim is taken prisoner on December 18th.",
  "1895 is the year that Konstantin Tsiolkovsky proposes a space elevator.",
  "342 is the year that a large earthquake strikes Cyprus.",
  "1296 is the year that Edward I storms Berwick-upon-Tweed, sacking the then Scottish border town with much bloodshed on March 30th.",
  "856 is the year that Ordoño I of Asturias is said to have begun the repopulation of the town of León.",
  "1911 is the year that the Encyclopædia Britannica Eleventh Edition is published under American management in England by Cambridge University Press.",
  "928 is the year that Pope Leo VI succeeds Pope John X as the 123rd pope on May NaNth.",
  "75 is the year that Temple of Peace, also known as the Forum of Vespasian, is built in Rome.",
  "901 is the year that Zhu Wen seizes the imperial Tang Dynasty capital.",
  "491 is the year that Anastasius I becomes emperor on April 11th.",
  "726 is the year that Umayyad forces under Maslamah ibn Abd al-Malik sack the Byzantine city of Caesarea.",
  "1201 is the year that Attempted usurpation of John Komnenos the Fat on July 31st.",
  "117 is the year that the silver content of the Roman denarius falls to 87 percent under emperor Hadrian, down from 93 percent in the reign of Trajan.",
  "1447 is the year that Pope Nicholas V succeeds Pope Eugene IV as the 208th pope on March 6th.",
  "962 is the year that Indulf, King of the Scots and Picts, dies and is succeeded by Dubh.",
  "963 is the year that Nikephoros II Phokas is proclaimed emperor by his troops in Caesarea on 2 July.",
  "1903 is the year that the Hay-Bunau-Varilla Treaty is signed by the United States and Panama, giving the U.S. exclusive rights over the Panama Canal Zone on November 18th.",
  "957 is the year that the Chandra Hindu Dynasty ends, thus beginning a time of chaos in areas belonging to modern-day India.",
  "1142 is the year that Failed Norman raid against the city of Tripoli.",
  "187 is the year that Clodius Albinus defeats the Chatti, a highly organized German tribe that controlled the area that includes the Black Forest.",
  "846 is the year that the Moors recapture León.",
  "1958 is the year that the first successful American satellite, Explorer 1, is launched into orbit on January 31st.",
  "1314 is the year that Amda Seyon starts to rule.",
  "1715 is the year that a Spanish treasure fleet of 10 ships under General Don Juan Ubilla leaves Havana, Cuba for Spain on July 24th.",
  "2020 is the year that Vietnam becomes a developed country.",
  "340 is the year that Constantinople, capital of Emperor Constantius II, becomes the largest city of the world, taking the lead from Rome, capital of his brother Constans I.",
  "1479 is the year that Ferdinand II ascends the throne of Aragon and rules together with his wife Isabella I, Queen of Castile over most of the Iberian peninsula on January 20th.",
  "1764 is the year that a Level 5 tornado hits Woldegk, Germany on June 29th.",
  "1548 is the year that Sigismund II of Poland starts to rule.",
  "310 is the year that Constantine I begins to build the Basilica of Constantine in Augusta Treverorum (Trier).",
  "1283 is the year that an earthquake destroys two thirds of the cave city of Vardzia, Georgia.",
  "274 is the year that Pope Felix I dies in Rome after a 5-year reign on December 30th.",
  "1837 is the year that Charles Dickens's Oliver Twist begins publication in serial form on February NaNth.",
  "723 is the year that Saint Boniface fells Thor's Oak near Fritzlar, marking the decisive event in the Christianization of the northern Germanic tribes.",
  "781 is the year that Alcuin becomes Charlemagne's chief adviser on religious and educational matters.",
  "798 is the year that Coenwulf of Mercia invades Kent, deposes and imprisons King Eadbert Praen, and makes his own brother Cuthred king.",
  "1209 is the year that the army of the Kingdom of Georgia raids the Muslim principalities in north Iran.",
  "570 is the year that Abraha failed attack on the Kaaba in Mecca.",
  "1874 is the year that the United States Greenback Party is established as a political party, made primarily of farmers financially hurt by the Panic of 1873 on November 25th.",
  "966 is the year that Mieszko I, the first duke of Poland, is baptized a Christian on April or April 30 14th.",
  "549 is the year that Archbishop Maximianus of Ravenna consecrates the Basilica of Sant'Apollinare in Classe.",
  "171 is the year that Emperor Marcus Aurelius forms a new military command, the praetentura Italiae et Alpium.",
  "1327 is the year that Edward III becomes King of England on February 1st.",
  "1676 is the year that Emperor Yohannes I decrees that Muslims must live separately from Christians throughout Ethiopia.",
  "346 is the year that the Visigoths are converted to Arianism by Wulfila.",
  "416 is the year that the Visigoths continue their invasion of Hispania and take control of Tarraconensis.",
  "101 is the year that the Tibetans introduce their Buddhist Religion into Indonesia.",
  "274 is the year that the Kingdom of Aksum attains great prosperity thanks to its control of Red Sea trade.",
  "650 is the year that St. Martin's Church is built in Canterbury, England.",
  "1333 is the year that a famine (lasting until 1337) breaks out in China, killing six million.",
  "204 is the year that the Daysan River floods Edessa.",
  "1419 is the year that John the Fearless, Duke of Burgundy is assassinated by adherents of the Dauphin on September 10th.",
  "1035 is the year that Harthacanute becomes king of Denmark.",
  "1419 is the year that the first Defenestration of Prague occurs on July 30th.",
  "193 is the year that Pertinax suspend the food programs established by Trajan, this provokes the ire of the Praetorians.",
  "61 BC is the year that Pompey, the Great celebrates his third triumph for victories over the pirates and the end of the Mithridatic Wars on September 29th.",
  "1427 is the year that Celestine Order established in France.",
  "429 is the year that Emperor Theodosius II starts to reform the Codex Theodosianus in Constantinople.",
  "1355 is the year that Ottoman Turks defeat Bulgarian Empire in the Battle of Ihtiman.",
  "1073 is the year that Pope Gregory VII (Cardinal Hildebrand) succeeds Pope Alexander II as the 157th pope on April 22nd.",
  "1727 is the year that the Royal Bank of Scotland is founded by royal charter in Edinburgh.",
  "171 is the year that Marcus Aurelius signs a peace treaty with the Quadi and the Sarmatian Iazyges.",
  "764 is the year that Offa of Mercia conquers Kent, and installs Egbert II on the Kentish throne.",
  "64 BC is the year that Pompey destroys the kingdom of Pontus; Mithridates VI commits suicide after escaping to the Crimea.",
  "1274 is the year that the Marinid amir, Abu Yusuf Yaqub, enters peacefully into Ceuta putting an end to some forty years of independence of the city.",
  "53 is the year that Nero marries Claudia Octavia.",
  "997 is the year that Saint Adalbert of Prague is sent to Prussia by Boleslaus I of Poland.",
  "1740 is the year that Maria Theresia of Austria inherits the Habsburg hereditary dominions (Austria, Bohemia, Hungary and present-day Belgium) on October 20th.",
  "1129 is the year that Henry of Blois becomes bishop of Winchester.",
  "1610 is the year that Louis XIII of France is crowned on October 17th.",
  "1123 is the year that the Venetian fleet defeats the Egyptian fleet off Ascalon.",
  "1106 is the year that Boleslaus III of Poland begins a war against his brother Zbigniew for control of Poland.",
  "1133 is the year that Geoffrey of Monmouth and Jeff de Hosson produce the Historia Regum Britanniae.",
  "1586 is the year that the first HMS Vanguard is launched in England.",
  "966 is the year that Mieszko I, the first duke of Poland, is baptized a Christian on April or April 30 14th.",
  "240 is the year that the Roman Empire is threatened on several fronts at the same time.",
  "538 is the year that Buddhism is introduced formally into Japan (by some accounts; see also 552).",
  "442 is the year that the Monastery of St. Shenouda the Archimandrite (White Monastery) near Sohag (Egypt) is built.",
  "371 is the year that Martin of Tours becomes bishop of Tours (approximate date).",
  "1312 is the year that Henry VII, Holy Roman Emperor is crowned in the Lateran Palace due to St Peter's Basilica being occupied by Romans hostile to him on June 29th.",
  "396 is the year that Stilicho, Roman general (magister militum), controls the young emperor Honorius as his regent and becomes the actual ruler of the Western Roman Empire."
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
