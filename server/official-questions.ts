import type { InsertQuestion, InsertStudyMaterial, InsertFlashcard } from "@shared/schema";

/**
 * Official questions based on "Australian Citizenship: Our Common Bond" (2020)
 * Source: https://immi.homeaffairs.gov.au/citizenship-subsite/files/our-common-bond-testable.pdf
 * 
 * Categories mapping (matching official PDF structure):
 * 1 - Part 1: Australia and its people
 * 2 - Part 2: Australia's democratic beliefs, rights and liberties
 * 3 - Part 3: Government and the law in Australia
 * 4 - Part 4: Australian values
 */

// PART 1: AUSTRALIA AND ITS PEOPLE
export const officialQuestions: Omit<InsertQuestion, 'createdAt'>[] = [
  // Indigenous Australia Questions (Part 1)
  {
    categoryId: 1,
    question: "Who are Australia's first inhabitants?",
    optionA: "British settlers",
    optionB: "Aboriginal and Torres Strait Islander peoples",
    optionC: "Dutch explorers",
    optionD: "Asian migrants",
    correctAnswer: "B",
    explanation: "Aboriginal and Torres Strait Islander peoples are Australia's first inhabitants, with the oldest continuous cultures and traditions in the world.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Aboriginal and Torres Strait Islander peoples",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 5,
    question: "How long have Aboriginal and Torres Strait Islander peoples lived in Australia?",
    optionA: "Between 10,000 and 20,000 years",
    optionB: "Between 25,000 and 30,000 years",
    optionC: "Between 65,000 and 40,000 years",
    optionD: "Between 100,000 and 80,000 years",
    correctAnswer: "C",
    explanation: "Archaeological records indicate that Aboriginal peoples arrived in Australia between 65,000 and 40,000 years ago.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Aboriginal and Torres Strait Islander peoples",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 5,
    question: "Where are Torres Strait Islander people from?",
    optionA: "Mainland Australia",
    optionB: "Tasmania",
    optionC: "Islands between Queensland and Papua New Guinea",
    optionD: "New Zealand",
    correctAnswer: "C",
    explanation: "Torres Strait Islander people are from islands between the northern tip of Queensland and Papua New Guinea.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Aboriginal and Torres Strait Islander peoples",
    isValuesQuestion: false,
    isActive: true
  },

  // History Questions (Category 2)
  {
    categoryId: 2,
    question: "When did European settlement begin in Australia?",
    optionA: "1788",
    optionB: "1801",
    optionC: "1770",
    optionD: "1851",
    correctAnswer: "A",
    explanation: "European settlement started when the First Fleet arrived from Great Britain on 26 January 1788.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Early days of European settlement",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What was the First Fleet?",
    optionA: "A naval battle fleet",
    optionB: "The first 11 convict ships from Great Britain",
    optionC: "Trading ships from Asia",
    optionD: "Exploration vessels",
    correctAnswer: "B",
    explanation: "The First Fleet refers to the first 11 convict ships that arrived from Great Britain in 1788.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Early days of European settlement",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Who was the first Governor of the colony of New South Wales?",
    optionA: "Captain James Cook",
    optionB: "Captain Arthur Phillip",
    optionC: "Governor Lachlan Macquarie",
    optionD: "Sir Edmund Barton",
    correctAnswer: "B",
    explanation: "Captain Arthur Phillip was the first Governor of the colony of New South Wales.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Early days of European settlement",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "When did the Australian gold rush begin?",
    optionA: "1788",
    optionB: "1901",
    optionC: "1851",
    optionD: "1967",
    correctAnswer: "C",
    explanation: "The gold rush began in 1851 when gold was discovered in New South Wales and Victoria.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Early days of European settlement",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "When did the separate colonies unite to form the Commonwealth of Australia?",
    optionA: "1788",
    optionB: "1851",
    optionC: "1901",
    optionD: "1967",
    correctAnswer: "C",
    explanation: "In 1901, the separate colonies were united into a federation of states called the Commonwealth of Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - The nation of Australia",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "When were Aboriginal and Torres Strait Islander peoples included in official population estimates?",
    optionA: "1788",
    optionB: "1901",
    optionC: "After the 1967 Referendum",
    optionD: "1851",
    correctAnswer: "C",
    explanation: "Aboriginal and Torres Strait Islander peoples were not included in official population estimates until after the Referendum in 1967.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - The nation of Australia",
    isValuesQuestion: false,
    isActive: true
  },

  // PART 2: AUSTRALIA'S DEMOCRATIC BELIEFS, RIGHTS AND LIBERTIES
  // Australian Values Questions (Category 1)
  {
    categoryId: 1,
    question: "What type of government does Australia have?",
    optionA: "Monarchy",
    optionB: "Democracy",
    optionC: "Dictatorship",
    optionD: "Republic",
    correctAnswer: "B",
    explanation: "Australia is a democracy where the government is elected by the people.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Australia's democratic beliefs",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What is the common bond that unites all Australians?",
    optionA: "Religion",
    optionB: "Language",
    optionC: "Citizenship",
    optionD: "Ethnicity",
    correctAnswer: "C",
    explanation: "Citizenship is the common bond uniting all Australians, regardless of their background.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - A message to you",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What does the Australian Citizenship Pledge require you to pledge loyalty to?",
    optionA: "The British Crown",
    optionB: "Australia and its people",
    optionC: "The Prime Minister",
    optionD: "The United Nations",
    correctAnswer: "B",
    explanation: "The Citizenship Pledge requires pledging loyalty to Australia and its people.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - The Australian Citizenship Pledge",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What freedoms are guaranteed in Australia?",
    optionA: "Freedom of speech and freedom of religion",
    optionB: "Freedom to disobey laws",
    optionC: "Freedom from taxation",
    optionD: "Freedom from government",
    correctAnswer: "A",
    explanation: "Australia guarantees freedom of speech and freedom of religion, among other freedoms.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Australia's democratic beliefs",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "In Australia, can you encourage violence against a person or group?",
    optionA: "Yes, if you disagree with them",
    optionB: "Yes, as part of free speech",
    optionC: "No, it is against Australian values and the law",
    optionD: "Yes, in certain circumstances",
    correctAnswer: "C",
    explanation: "Encouraging violence against a person or group is against Australian values and the law.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "Should people in Australia make an effort to learn English?",
    optionA: "No, it is not important",
    optionB: "Yes, it helps you to participate in Australian society",
    optionC: "Only if you work in government",
    optionD: "No, you can use interpreters for everything",
    correctAnswer: "B",
    explanation: "Learning English helps you to participate fully in Australian society and is encouraged.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "Are men and women equal in Australia?",
    optionA: "No, men have more rights",
    optionB: "No, women have more rights",
    optionC: "Yes, they have equal rights and opportunities",
    optionD: "Only in certain situations",
    correctAnswer: "C",
    explanation: "Australian values include equality between men and women. Both have equal rights and opportunities.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What does 'mateship' mean in Australian values?",
    optionA: "Only helping your friends",
    optionB: "Friendship, support and looking out for each other",
    optionC: "Competing against others",
    optionD: "Avoiding strangers",
    correctAnswer: "B",
    explanation: "Mateship is an important Australian value meaning friendship, support and looking out for each other.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },

  // PART 3: GOVERNMENT AND THE LAW IN AUSTRALIA
  // Government Questions (Category 4)
  {
    categoryId: 4,
    question: "What is the name of Australia's system of government?",
    optionA: "Parliamentary democracy",
    optionB: "Presidential democracy",
    optionC: "Communist system",
    optionD: "Absolute monarchy",
    correctAnswer: "A",
    explanation: "Australia has a parliamentary democracy, where the Parliament makes laws and the government is formed by the party with majority support.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Who is the head of state of Australia?",
    optionA: "The Prime Minister",
    optionB: "The Governor-General",
    optionC: "The British Monarch",
    optionD: "The President",
    correctAnswer: "C",
    explanation: "The British Monarch (currently King Charles III) is Australia's head of state, represented in Australia by the Governor-General.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Who represents the King/Queen in Australia?",
    optionA: "The Prime Minister",
    optionB: "The Governor-General",
    optionC: "The Chief Justice",
    optionD: "The Speaker of the House",
    correctAnswer: "B",
    explanation: "The Governor-General represents the King/Queen in Australia and is appointed by the Monarch on the advice of the Prime Minister.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "How many levels of government are there in Australia?",
    optionA: "One",
    optionB: "Two",
    optionC: "Three",
    optionD: "Four",
    correctAnswer: "C",
    explanation: "Australia has three levels of government: federal (Commonwealth), state/territory, and local.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "What are the colors of the Australian flag?",
    optionA: "Red, white and blue",
    optionB: "Green and gold",
    optionC: "Blue, red and white",
    optionD: "Blue, white and red",
    correctAnswer: "A",
    explanation: "The Australian flag has three colors: red, white, and blue.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "How many houses does the Australian Parliament have?",
    optionA: "One",
    optionB: "Two",
    optionC: "Three",
    optionD: "Four",
    correctAnswer: "B",
    explanation: "The Australian Parliament has two houses: the House of Representatives and the Senate.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Who has the power to make and change laws in Australia?",
    optionA: "The Prime Minister",
    optionB: "The Governor-General",
    optionC: "The Parliament",
    optionD: "The High Court",
    correctAnswer: "C",
    explanation: "The Parliament has the power to make and change laws in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "What is the minimum age for voting in Australia?",
    optionA: "16 years",
    optionB: "18 years",
    optionC: "21 years",
    optionD: "25 years",
    correctAnswer: "B",
    explanation: "Australian citizens aged 18 years and over have the right and responsibility to vote.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is voting compulsory in Australian federal and state elections?",
    optionA: "No, it is optional",
    optionB: "Yes, it is compulsory for citizens 18 and over",
    optionC: "Only for federal elections",
    optionD: "Only for state elections",
    correctAnswer: "B",
    explanation: "Voting is compulsory for all Australian citizens aged 18 years and over in federal and state elections.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "What is the official name of Australia?",
    optionA: "Australia",
    optionB: "The Commonwealth of Australia",
    optionC: "The Australian Federation",
    optionD: "The Australian Commonwealth",
    correctAnswer: "B",
    explanation: "The official name of Australia is the Commonwealth of Australia.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - The nation of Australia",
    isValuesQuestion: false,
    isActive: true
  },

  // Geography Questions (Category 3)
  {
    categoryId: 3,
    question: "What is the capital city of Australia?",
    optionA: "Sydney",
    optionB: "Melbourne",
    optionC: "Canberra",
    optionD: "Brisbane",
    correctAnswer: "C",
    explanation: "Canberra is the capital city of Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australia and its people",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "How many states and territories does Australia have?",
    optionA: "Six states and two territories",
    optionB: "Seven states and one territory",
    optionC: "Five states and three territories",
    optionD: "Eight states",
    correctAnswer: "A",
    explanation: "Australia has six states and two mainland territories.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Australia and its people",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What are Australia's national colors?",
    optionA: "Red and white",
    optionB: "Blue and white",
    optionC: "Green and gold",
    optionD: "Red and blue",
    correctAnswer: "C",
    explanation: "Green and gold are Australia's national colors.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },

  // Culture & Society Questions (Category 6)
  {
    categoryId: 6,
    question: "What is Australia's national flower?",
    optionA: "Rose",
    optionB: "Golden wattle",
    optionC: "Waratah",
    optionD: "Eucalyptus",
    correctAnswer: "B",
    explanation: "The golden wattle is Australia's national flower.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 6,
    question: "What is the name of Australia's national anthem?",
    optionA: "God Save the King",
    optionB: "Waltzing Matilda",
    optionC: "Advance Australia Fair",
    optionD: "I Am Australian",
    correctAnswer: "C",
    explanation: "Australia's national anthem is 'Advance Australia Fair'.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 6,
    question: "What do we remember on Anzac Day?",
    optionA: "The day Australia became a nation",
    optionB: "The landing of the First Fleet",
    optionC: "The sacrifice of Australians who served and died in wars",
    optionD: "The gold rush",
    correctAnswer: "C",
    explanation: "Anzac Day (25 April) commemorates the sacrifice of Australians who served and died in wars, conflicts and peacekeeping operations.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 6,
    question: "When is Australia Day?",
    optionA: "1 January",
    optionB: "26 January",
    optionC: "25 April",
    optionD: "1 July",
    correctAnswer: "B",
    explanation: "Australia Day is celebrated on 26 January each year, marking the arrival of the First Fleet in 1788.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australian symbols",
    isValuesQuestion: false,
    isActive: true
  },

  // PART 4: AUSTRALIAN VALUES - More values questions
  {
    categoryId: 1,
    question: "What does freedom of religion mean in Australia?",
    optionA: "Everyone must follow the same religion",
    optionB: "People can practice any religion or no religion",
    optionC: "Only Christian religions are allowed",
    optionD: "Religion is banned",
    correctAnswer: "B",
    explanation: "Freedom of religion means people can practice any religion they choose, or no religion at all.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Australia's democratic beliefs",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "Do Australian values include respect for the freedom and dignity of the individual?",
    optionA: "No",
    optionB: "Only for certain groups",
    optionC: "Yes",
    optionD: "Only for citizens",
    correctAnswer: "C",
    explanation: "Respect for the freedom and dignity of each individual is a core Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What does the Rule of Law mean?",
    optionA: "Rich people are above the law",
    optionB: "Everyone must follow the law, including those who make it",
    optionC: "Politicians don't have to follow laws",
    optionD: "Only some people have to follow laws",
    correctAnswer: "B",
    explanation: "The Rule of Law means that everyone, including those who make the laws, must follow them.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Australia's democratic beliefs",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "Is it acceptable in Australia to use violence to settle disagreements?",
    optionA: "Yes, if you are very angry",
    optionB: "Yes, in certain situations",
    optionC: "No, peaceful methods must be used",
    optionD: "Only in self-defense",
    correctAnswer: "C",
    explanation: "Violence is not acceptable for settling disagreements. Australians value peaceful conflict resolution.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What does equality of opportunity mean in Australia?",
    optionA: "Everyone gets exactly the same outcome",
    optionB: "People have the chance to achieve based on merit and hard work",
    optionC: "Some groups get special treatment",
    optionD: "Success is determined by family background",
    correctAnswer: "B",
    explanation: "Equality of opportunity means people have the chance to achieve and succeed based on merit and hard work, regardless of background.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },

  // Additional Government Questions
  {
    categoryId: 4,
    question: "What is the role of the courts in Australia?",
    optionA: "To make laws",
    optionB: "To interpret and apply the law",
    optionC: "To elect the government",
    optionD: "To write the Constitution",
    correctAnswer: "B",
    explanation: "The role of courts is to interpret and apply the law, and to ensure laws are administered fairly.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "What is the highest court in Australia?",
    optionA: "The Supreme Court",
    optionB: "The Federal Court",
    optionC: "The High Court",
    optionD: "The District Court",
    correctAnswer: "C",
    explanation: "The High Court of Australia is the highest court and final court of appeal.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Which political party or parties form the Australian Government?",
    optionA: "The party or coalition with the majority in the Senate",
    optionB: "The party or coalition with the majority in the House of Representatives",
    optionC: "The party chosen by the Governor-General",
    optionD: "All parties equally",
    correctAnswer: "B",
    explanation: "The party or coalition of parties with the majority of seats in the House of Representatives forms the government.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },

  // Additional Culture & Society
  {
    categoryId: 6,
    question: "From how many countries have people migrated to Australia?",
    optionA: "Around 50 countries",
    optionB: "Around 100 countries",
    optionC: "More than 200 countries",
    optionD: "Around 150 countries",
    correctAnswer: "C",
    explanation: "People from more than 200 countries have made Australia their home, making it one of the most diverse societies in the world.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - A message to you",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 6,
    question: "Who were the first large group of migrants to Australia not from Europe?",
    optionA: "Indian people",
    optionB: "Chinese people",
    optionC: "Japanese people",
    optionD: "Vietnamese people",
    correctAnswer: "B",
    explanation: "Chinese people arriving during the gold rush were the first large group of migrants not from Europe.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Early days of European settlement",
    isValuesQuestion: false,
    isActive: true
  },
];

// Study Materials Content - Extracted from Official Guide
export const studyMaterialsContent: Omit<InsertStudyMaterial, 'createdAt'>[] = [
  {
    categoryId: 5,
    partNumber: 1,
    title: "Aboriginal and Torres Strait Islander peoples",
    section: "Australia's First Inhabitants",
    content: `Australia's first inhabitants are the Aboriginal and Torres Strait Islander peoples, who have the oldest continuous cultures and traditions in the world.

Aboriginal people are from mainland Australia and Tasmania. Archaeological records indicate that Aboriginal peoples arrived in Australia between 65,000 and 40,000 years ago. However, Aboriginal peoples believe they are central to the creation stories of this land.

Torres Strait Islander people are from islands between the northern tip of Queensland and Papua New Guinea.

Aboriginal and Torres Strait Islander peoples have age-old beliefs and traditions that still guide them today. They have a deep connection with the land, which is expressed in their stories, art and dance. Indigenous cultures are diverse and an important part of Australia's national identity.`,
    orderIndex: 1,
    isActive: true
  },
  {
    categoryId: 2,
    partNumber: 1,
    title: "Early days of European settlement",
    section: "The First Fleet",
    content: `European settlement started when the first 11 convict ships, known as the 'First Fleet', arrived from Great Britain on 26 January 1788.

At this time, British laws were harsh and the jails could not hold the large number of people imprisoned for their crimes. To manage this problem, the British Government decided to transport convicts to the new colony of New South Wales.

The first Governor of the colony was Captain Arthur Phillip. The colony survived, and as more convicts and free settlers arrived, it grew and developed.

Early free settlers came from Great Britain and Ireland. This British and Irish heritage has had a major influence on Australia's recent history, culture and politics.`,
    orderIndex: 2,
    isActive: true
  },
  {
    categoryId: 2,
    partNumber: 1,
    title: "The Australian gold rush",
    section: "Gold Discovery",
    content: `In 1851, a 'gold rush' began when gold was discovered in the colonies of New South Wales and Victoria. People from all around the world came to try to make their fortunes.

Chinese people arriving at this time were the first large group of migrants not from Europe. In 10 years, Australia's population more than doubled.`,
    orderIndex: 3,
    isActive: true
  },
  {
    categoryId: 2,
    partNumber: 1,
    title: "The nation of Australia",
    section: "Federation",
    content: `In 1901, the separate colonies were united into a federation of states called the Commonwealth of Australia. Our national democratic institutions, including our national parliament, government and the High Court were established under the new Australian Constitution.

In 1901, Australia's population was about four million. This number did not include Aboriginal and Torres Strait Islander peoples. They were not included in official estimates until after a Referendum in 1967.`,
    orderIndex: 4,
    isActive: true
  },
  {
    categoryId: 1,
    partNumber: 2,
    title: "Australia's democratic beliefs",
    section: "Democracy and Freedom",
    content: `Australia is a democracy. In a democracy, the government is elected by the people and must respect the rights and freedoms of individuals.

Australian values include:
• Respect for the freedom and dignity of the individual
• Freedom of religion
• Commitment to the rule of law
• Parliamentary democracy
• Equality of men and women
• Equality of opportunity
• A spirit of egalitarianism that values mutual respect and compassion for those in need

These values are central to Australian citizenship and way of life.`,
    orderIndex: 5,
    isActive: true
  },
  {
    categoryId: 4,
    partNumber: 3,
    title: "Government and the law in Australia",
    section: "How Government Works",
    content: `Australia is a parliamentary democracy with three levels of government:
1. Federal (Commonwealth) government
2. State and territory governments
3. Local government

The Parliament makes and changes laws. It has two houses:
• The House of Representatives
• The Senate

The government is formed by the party or coalition with the majority in the House of Representatives.

The High Court is Australia's highest court and final court of appeal.`,
    orderIndex: 6,
    isActive: true
  },
  {
    categoryId: 1,
    partNumber: 4,
    title: "Australian values",
    section: "Core Values",
    content: `Australian citizenship is about living out shared values in everyday life. These values include:

• Respect for equal worth, dignity and freedom of the individual
• Freedom of speech and association
• Freedom of religion and a secular government
• Support for parliamentary democracy and the rule of law
• Equality under the law
• Equality of men and women
• Equality of opportunity
• Peacefulness
• Tolerance, mutual respect and compassion for those in need

All Australians are expected to uphold and promote these values.`,
    orderIndex: 7,
    isActive: true
  }
];

// Flashcards based on official content
export const officialFlashcards: Omit<InsertFlashcard, 'createdAt'>[] = [
  {
    categoryId: 5,
    front: "Who are Australia's first inhabitants?",
    back: "Aboriginal and Torres Strait Islander peoples, who have the oldest continuous cultures and traditions in the world.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "When did the First Fleet arrive in Australia?",
    back: "26 January 1788",
    isActive: true
  },
  {
    categoryId: 2,
    front: "When did Australia become a nation?",
    back: "1 January 1901, when the separate colonies united to form the Commonwealth of Australia",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What are the three levels of government in Australia?",
    back: "Federal (Commonwealth), State/Territory, and Local government",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the Rule of Law?",
    back: "Everyone must follow the law, including those who make it. No one is above the law.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Are men and women equal in Australia?",
    back: "Yes, Australian law and values support equality between men and women, giving them equal rights and opportunities.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is Australia's capital city?",
    back: "Canberra",
    isActive: true
  },
  {
    categoryId: 6,
    front: "What is Australia's national anthem?",
    back: "Advance Australia Fair",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Is voting compulsory in Australia?",
    back: "Yes, voting is compulsory for all Australian citizens aged 18 years and over in federal and state elections.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What does freedom of religion mean?",
    back: "People can practice any religion they choose, or no religion at all.",
    isActive: true
  }
];
