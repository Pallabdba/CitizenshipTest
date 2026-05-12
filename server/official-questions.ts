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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 2,
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
    categoryId: 2,
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
    categoryId: 4,
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
    categoryId: 4,
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
    categoryId: 4,
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
    categoryId: 4,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 1,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 2,
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
    categoryId: 4,
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
    categoryId: 2,
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
    categoryId: 4,
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
    categoryId: 4,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 3,
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
    categoryId: 1,
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
    categoryId: 1,
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

  // Additional questions from the official PDF
  {
    categoryId: 1,
    question: "When is Australia Day celebrated?",
    optionA: "1 January",
    optionB: "26 January",
    optionC: "25 April",
    optionD: "25 December",
    correctAnswer: "B",
    explanation: "Australia Day is celebrated on 26 January each year, the anniversary of the arrival of the First Fleet in 1788.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Important days for Australians",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "When is Anzac Day commemorated?",
    optionA: "25 April",
    optionB: "26 January",
    optionC: "11 November",
    optionD: "1 July",
    correctAnswer: "A",
    explanation: "Anzac Day is commemorated on 25 April each year, remembering those who served and died in wars and peacekeeping operations.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Important days for Australians",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What is Australia's national flower?",
    optionA: "Rose",
    optionB: "Waratah",
    optionC: "Golden wattle",
    optionD: "Eucalyptus",
    correctAnswer: "C",
    explanation: "The golden wattle is Australia's national flower. It has bright green leaves and golden yellow flowers in spring.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What are Australia's national colours?",
    optionA: "Red and white",
    optionB: "Blue and white",
    optionC: "Green and gold",
    optionD: "Red and blue",
    correctAnswer: "C",
    explanation: "Australia's national colours are green and gold, the colours of the golden wattle.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What is the capital city of Western Australia?",
    optionA: "Adelaide",
    optionB: "Perth",
    optionC: "Darwin",
    optionD: "Brisbane",
    correctAnswer: "B",
    explanation: "Perth is the capital city of Western Australia, the largest state.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's states and territories",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "Which is the smallest mainland state in Australia?",
    optionA: "Tasmania",
    optionB: "Victoria",
    optionC: "South Australia",
    optionD: "Australian Capital Territory",
    correctAnswer: "B",
    explanation: "Victoria is the smallest of the mainland states. Its capital city is Melbourne.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's states and territories",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "What colours are on the Australian Aboriginal Flag?",
    optionA: "Red, yellow and green",
    optionB: "Black, red and yellow",
    optionC: "Blue, white and red",
    optionD: "Green, blue and white",
    correctAnswer: "B",
    explanation: "The Australian Aboriginal Flag is black (representing Aboriginal peoples), red (representing the earth) and yellow (representing the sun).",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's flags",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 1,
    question: "How many points does the Commonwealth Star have on the Australian National Flag?",
    optionA: "Five points",
    optionB: "Six points",
    optionC: "Seven points",
    optionD: "Eight points",
    correctAnswer: "C",
    explanation: "The Commonwealth Star has seven points - one for each of the six states and one for the territories.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 1 - Australia's flags",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What does 'a fair go' mean in Australian society?",
    optionA: "Everyone should receive government assistance",
    optionB: "What someone achieves should result from their talents, work and effort",
    optionC: "Everyone should earn the same income",
    optionD: "Only wealthy people should succeed",
    correctAnswer: "B",
    explanation: "A 'fair go' means equal opportunity - what someone achieves should result from their talents, work and effort, rather than their wealth or background.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Our equalities",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is Australia's government secular?",
    optionA: "No, it follows Christian law",
    optionB: "Yes, it operates separately from religious entities",
    optionC: "No, it follows Islamic law",
    optionD: "Yes, but only for certain states",
    correctAnswer: "B",
    explanation: "The government in Australia is secular, which means it operates separately from churches or other religious entities.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "How many senators does each state elect to the Senate?",
    optionA: "10 senators",
    optionB: "12 senators",
    optionC: "8 senators",
    optionD: "6 senators",
    correctAnswer: "B",
    explanation: "Each state elects 12 senators to represent them in the Senate, regardless of the state's size or population.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "How many senators are there in total in the Australian Senate?",
    optionA: "72 senators",
    optionB: "76 senators",
    optionC: "80 senators",
    optionD: "100 senators",
    correctAnswer: "B",
    explanation: "There are 76 senators in total: 12 from each of the 6 states (72) plus 2 each from the ACT and NT (4).",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Approximately how many members are in the House of Representatives?",
    optionA: "Over 100 members",
    optionB: "Over 150 members",
    optionC: "Over 200 members",
    optionD: "76 members",
    correctAnswer: "B",
    explanation: "There are over 150 members elected to the House of Representatives, with numbers based on each state's population.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is another name for the Senate?",
    optionA: "The Lower House",
    optionB: "The People's House",
    optionC: "The Upper House",
    optionD: "The Commonwealth House",
    correctAnswer: "C",
    explanation: "The Senate is also called the Upper House, the House of Review, or the States' House.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who is Australia's Head of State?",
    optionA: "The Prime Minister",
    optionB: "The Governor-General",
    optionC: "The King of Australia",
    optionD: "The President",
    correctAnswer: "C",
    explanation: "Australia's Head of State is the King of Australia, His Majesty King Charles III.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the role of the Governor-General?",
    optionA: "To lead the government",
    optionB: "To represent the King in Australia",
    optionC: "To make laws",
    optionD: "To judge court cases",
    correctAnswer: "B",
    explanation: "The Governor-General is the representative of the Head of State (the King) in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Is voting by secret ballot in Australia?",
    optionA: "No, everyone knows who you vote for",
    optionB: "Yes, no one is allowed to know whom you voted for unless you tell them",
    optionC: "Only in federal elections",
    optionD: "Only for people over 30",
    correctAnswer: "B",
    explanation: "In Australia, voting is by secret ballot, so you are free and safe to vote for any candidate without others knowing.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government and the law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 4,
    question: "What are Australian values based on?",
    optionA: "Wealth and prosperity only",
    optionB: "Freedom, respect, fairness and equality of opportunity",
    optionC: "Military strength",
    optionD: "Religious teachings",
    correctAnswer: "B",
    explanation: "Australian values are based on freedom, respect, fairness and equality of opportunity.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Do Australian laws apply to all people in Australia?",
    optionA: "No, only to citizens",
    optionB: "Yes, regardless of background or culture",
    optionC: "Only to permanent residents",
    optionD: "Only to people born in Australia",
    correctAnswer: "B",
    explanation: "Australian laws apply to all people in Australia, regardless of background or culture.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },

  // Additional Part 2 Questions - Democratic Beliefs, Rights and Liberties
  {
    categoryId: 2,
    question: "In Australia, are people free to choose their own religion?",
    optionA: "No, Australia has an official religion",
    optionB: "Yes, everyone is free to follow any religion or no religion",
    optionC: "Only Christian religions are allowed",
    optionD: "No, religion is banned",
    correctAnswer: "B",
    explanation: "Freedom of religion is a fundamental Australian value. People can practice any religion they choose, or no religion at all.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians peacefully protest against government decisions?",
    optionA: "No, protesting is illegal",
    optionB: "Yes, peaceful protest is a right",
    optionC: "Only if the government approves",
    optionD: "Only during elections",
    correctAnswer: "B",
    explanation: "The right to peaceful protest is an important democratic freedom in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are Australians free to say and write what they think?",
    optionA: "No, speech is controlled by the government",
    optionB: "Yes, within the limits of Australian law",
    optionC: "Only if it supports the government",
    optionD: "No, all speech must be approved",
    correctAnswer: "B",
    explanation: "Freedom of speech is a fundamental right in Australia, exercised within the limits of the law.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What does equality before the law mean?",
    optionA: "Rich people have more rights",
    optionB: "All people are treated equally by the law",
    optionC: "Citizens have more rights than non-citizens",
    optionD: "Men and women have different legal rights",
    correctAnswer: "B",
    explanation: "Equality before the law means all people are treated equally by the law, regardless of their background.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Our equalities",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Who has the right to freedom of speech and freedom of expression in Australia?",
    optionA: "Only citizens",
    optionB: "Only permanent residents",
    optionC: "All people in Australia",
    optionD: "Only people born in Australia",
    correctAnswer: "C",
    explanation: "Freedom of speech and expression are rights enjoyed by all people in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Does respect for the law make Australian society safer for everyone?",
    optionA: "No, laws don't affect safety",
    optionB: "Yes, respect for the law helps keep Australia safe",
    optionC: "Only in cities",
    optionD: "Only for some people",
    correctAnswer: "B",
    explanation: "Respect for the law helps make Australian society safer and more peaceful for everyone.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is English the national language of Australia?",
    optionA: "No, there is no national language",
    optionB: "Yes, English is the national language",
    optionC: "Yes, but only in some states",
    optionD: "No, multiple languages are equal",
    correctAnswer: "B",
    explanation: "English is the national language of Australia and is important for full participation in Australian society.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our values",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are Australians free to join any lawful organization?",
    optionA: "No, the government controls all organizations",
    optionB: "Yes, people can join any lawful organization",
    optionC: "Only political parties",
    optionD: "Only charities",
    correctAnswer: "B",
    explanation: "Freedom of association means Australians are free to join any lawful organization they choose.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What is parliamentary democracy?",
    optionA: "The military makes the laws",
    optionB: "Elected representatives make laws on behalf of the people",
    optionC: "The King makes all laws",
    optionD: "Judges create the laws",
    correctAnswer: "B",
    explanation: "Parliamentary democracy means elected representatives make laws on behalf of the people who elected them.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians choose their own spouse or partner?",
    optionA: "No, families must arrange marriages",
    optionB: "Yes, people are free to choose their own partner",
    optionC: "Only with government permission",
    optionD: "Only after age 30",
    correctAnswer: "B",
    explanation: "Freedom to choose your own spouse or partner is an important freedom in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is there equality of opportunity in Australia?",
    optionA: "No, opportunities depend on wealth",
    optionB: "Yes, everyone should have a fair chance to succeed",
    optionC: "Only for citizens",
    optionD: "Only in certain industries",
    correctAnswer: "B",
    explanation: "Equality of opportunity is a fundamental Australian value - everyone should have a fair chance to succeed through their own efforts.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our equalities",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What is the role of opposition parties in parliament?",
    optionA: "To support all government decisions",
    optionB: "To question and scrutinize the government",
    optionC: "To make laws without the government",
    optionD: "To appoint judges",
    correctAnswer: "B",
    explanation: "Opposition parties play an important role in questioning and scrutinizing government decisions in parliament.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are all Australians equal under the law?",
    optionA: "No, some have special privileges",
    optionB: "Yes, all are equal before the law",
    optionC: "Only citizens are equal",
    optionD: "Only people born in Australia",
    correctAnswer: "B",
    explanation: "All Australians are equal before the law, regardless of background, wealth or position.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our equalities",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians apply to work in any job they are qualified for?",
    optionA: "No, jobs are assigned by government",
    optionB: "Yes, people can apply for any job they're qualified for",
    optionC: "Only in certain sectors",
    optionD: "Only with special permits",
    correctAnswer: "B",
    explanation: "Australians have the freedom to apply for any job they are qualified for.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What does responsible government mean?",
    optionA: "The government can do whatever it wants",
    optionB: "The government is responsible to the people through parliament",
    optionC: "Only the Prime Minister is responsible",
    optionD: "The King controls the government",
    correctAnswer: "B",
    explanation: "Responsible government means the government is responsible to the people through their elected representatives in parliament.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is it a criminal offence to encourage violence against others?",
    optionA: "No, free speech allows this",
    optionB: "Yes, inciting violence is a crime",
    optionC: "Only in certain circumstances",
    optionD: "Only if someone gets hurt",
    correctAnswer: "B",
    explanation: "Inciting violence against others is a criminal offence in Australia, even though free speech is valued.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Do Australian courts operate independently from the government?",
    optionA: "No, the government controls the courts",
    optionB: "Yes, courts are independent",
    optionC: "Only the High Court is independent",
    optionD: "Only during elections",
    correctAnswer: "B",
    explanation: "The independence of the courts is fundamental to the rule of law in Australia.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What is the principle of 'innocent until proven guilty'?",
    optionA: "Everyone is guilty until they prove otherwise",
    optionB: "A person is considered innocent until proven guilty in court",
    optionC: "Only citizens get this protection",
    optionD: "It only applies to minor crimes",
    correctAnswer: "B",
    explanation: "The principle of 'innocent until proven guilty' is a fundamental right - a person is considered innocent until proven guilty in a court of law.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians publicly criticize the government?",
    optionA: "No, this is illegal",
    optionB: "Yes, within the limits of the law",
    optionC: "Only during elections",
    optionD: "Only in private",
    correctAnswer: "B",
    explanation: "Australians can publicly criticize the government within the limits of the law - this is part of freedom of speech.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What does freedom of religion prohibit?",
    optionA: "Having any religion",
    optionB: "The government establishing an official religion",
    optionC: "Private religious practices",
    optionD: "Religious buildings",
    correctAnswer: "B",
    explanation: "Freedom of religion means the government cannot establish an official religion and people are free to practice any religion or none.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are judges and magistrates independent from parliament?",
    optionA: "No, parliament controls judges",
    optionB: "Yes, they are independent",
    optionC: "Only in criminal cases",
    optionD: "Only federal judges",
    correctAnswer: "B",
    explanation: "Judges and magistrates are independent from parliament and make decisions based on law, not politics.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Does Australia have a free press?",
    optionA: "No, the government controls all media",
    optionB: "Yes, the press is free from government control",
    optionC: "Only government newspapers exist",
    optionD: "Only during elections",
    correctAnswer: "B",
    explanation: "Australia has a free press that is independent from government control, which is essential for democracy.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What is habeas corpus?",
    optionA: "The right to a lawyer",
    optionB: "The right not to be imprisoned unlawfully",
    optionC: "The right to vote",
    optionD: "The right to free speech",
    correctAnswer: "B",
    explanation: "Habeas corpus is the right not to be imprisoned unlawfully - authorities must show legal cause for detention.",
    difficulty: "hard",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can people in Australia join a trade union?",
    optionA: "No, unions are illegal",
    optionB: "Yes, joining a union is voluntary",
    optionC: "Only in certain industries",
    optionD: "Only with employer permission",
    correctAnswer: "B",
    explanation: "People in Australia are free to join a trade union, and membership is voluntary.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What does representative democracy mean?",
    optionA: "The people vote on every law",
    optionB: "Elected representatives make decisions on behalf of the people",
    optionC: "The King makes all decisions",
    optionD: "Judges make the laws",
    correctAnswer: "B",
    explanation: "Representative democracy means the people elect representatives who make decisions and laws on their behalf.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is there a separation of powers in Australia?",
    optionA: "No, one body has all power",
    optionB: "Yes, power is separated between parliament, executive and judiciary",
    optionC: "Only in federal government",
    optionD: "Only during wartime",
    correctAnswer: "B",
    explanation: "Australia has separation of powers between the legislature (parliament), executive (government) and judiciary (courts).",
    difficulty: "hard",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians start their own business?",
    optionA: "No, the government controls all business",
    optionB: "Yes, people are free to start lawful businesses",
    optionC: "Only with government approval",
    optionD: "Only certain types of businesses",
    correctAnswer: "B",
    explanation: "Australians are free to start their own lawful businesses as part of economic freedom.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Does respect for individual dignity and freedom mean forcing others to think like you?",
    optionA: "Yes, everyone must think the same",
    optionB: "No, people are free to have different beliefs and opinions",
    optionC: "Only in private",
    optionD: "Only about non-political matters",
    correctAnswer: "B",
    explanation: "Respect for individual dignity and freedom means allowing people to have different beliefs and opinions.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can political parties compete for election in Australia?",
    optionA: "No, only one party is allowed",
    optionB: "Yes, multiple parties compete freely",
    optionC: "Only two parties are allowed",
    optionD: "Only with royal permission",
    correctAnswer: "B",
    explanation: "Australia has a multi-party democracy where different political parties compete freely for election.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are women and men treated equally under Australian law?",
    optionA: "No, men have more rights",
    optionB: "Yes, men and women are equal under the law",
    optionC: "Only in certain states",
    optionD: "Only for citizens",
    correctAnswer: "B",
    explanation: "Men and women are equal under Australian law and have the same rights and opportunities.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our equalities",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is trial by jury available in Australia?",
    optionA: "No, only judges decide cases",
    optionB: "Yes, for serious criminal offences",
    optionC: "Only in civil cases",
    optionD: "Only for citizens",
    correctAnswer: "B",
    explanation: "Trial by jury is available for serious criminal offences in Australia, where citizens decide guilt or innocence.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians travel freely within Australia?",
    optionA: "No, travel requires permits",
    optionB: "Yes, people can move freely between states",
    optionC: "Only citizens can travel freely",
    optionD: "Only with government approval",
    correctAnswer: "B",
    explanation: "Australians have the freedom to travel and move freely anywhere within Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Is Australia's legal system based on English law traditions?",
    optionA: "No, it's based on European law",
    optionB: "Yes, based on British legal traditions",
    optionC: "No, it's entirely unique",
    optionD: "Yes, but only in some states",
    correctAnswer: "B",
    explanation: "Australia's legal system is based on British legal traditions, including common law and parliamentary democracy.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Does everyone have the right to a fair trial in Australia?",
    optionA: "No, only citizens",
    optionB: "Yes, everyone is entitled to a fair trial",
    optionC: "Only in criminal cases",
    optionD: "Only if they can afford it",
    correctAnswer: "B",
    explanation: "Everyone in Australia is entitled to a fair trial, regardless of who they are.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians belong to any political party they choose?",
    optionA: "No, the government assigns parties",
    optionB: "Yes, people can join any lawful political party",
    optionC: "Only approved parties",
    optionD: "Only during elections",
    correctAnswer: "B",
    explanation: "Australians are free to belong to any lawful political party they choose, or to no party at all.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "What is the importance of an independent judiciary?",
    optionA: "It makes laws faster",
    optionB: "It ensures fair application of laws without political interference",
    optionC: "It reduces the number of trials",
    optionD: "It helps the government control people",
    correctAnswer: "B",
    explanation: "An independent judiciary ensures laws are applied fairly without political interference, protecting individual rights.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 2 - Rule of law",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can Australians leave and return to Australia freely?",
    optionA: "No, exit visas are required",
    optionB: "Yes, Australian citizens can leave and return freely",
    optionC: "Only with government permission",
    optionD: "Only permanent residents can",
    correctAnswer: "B",
    explanation: "Australian citizens have the right to leave and return to Australia freely.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Does Australia protect freedom of assembly?",
    optionA: "No, gatherings are restricted",
    optionB: "Yes, people can gather peacefully for lawful purposes",
    optionC: "Only political gatherings",
    optionD: "Only with permits always",
    correctAnswer: "B",
    explanation: "Freedom of assembly allows people to gather peacefully for lawful purposes.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Are elections in Australia conducted fairly and regularly?",
    optionA: "No, only when government decides",
    optionB: "Yes, free and fair elections are held regularly",
    optionC: "Only at federal level",
    optionD: "Only every 10 years",
    correctAnswer: "B",
    explanation: "Free and fair elections are held regularly in Australia at all levels of government.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Democracy",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 2,
    question: "Can migrants maintain their cultural traditions in Australia?",
    optionA: "No, everyone must abandon their culture",
    optionB: "Yes, as long as they follow Australian laws",
    optionC: "Only in private",
    optionD: "Only certain cultures",
    correctAnswer: "B",
    explanation: "People can maintain their cultural traditions in Australia as long as they respect Australian laws and values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 2 - Our freedoms",
    isValuesQuestion: false,
    isActive: true
  },

  // Additional Part 3 Questions - Government and the Law
  {
    categoryId: 3,
    question: "What does the Commonwealth of Australia Constitution Act establish?",
    optionA: "The states of Australia",
    optionB: "The federal government and its powers",
    optionC: "Local councils",
    optionD: "The police force",
    correctAnswer: "B",
    explanation: "The Commonwealth of Australia Constitution Act establishes the federal government and defines its powers.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - The Constitution",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Can the Australian Constitution be changed?",
    optionA: "No, it is permanent",
    optionB: "Yes, by referendum where majority of voters and states agree",
    optionC: "Only by the Prime Minister",
    optionD: "Only by the King",
    correctAnswer: "B",
    explanation: "The Constitution can be changed by a referendum requiring a majority of voters nationally and a majority of states.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - The Constitution",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "How many territories does Australia have?",
    optionA: "One",
    optionB: "Two mainland territories",
    optionC: "Three",
    optionD: "Four",
    correctAnswer: "B",
    explanation: "Australia has two mainland territories: the Australian Capital Territory and the Northern Territory.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Government structure",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the lower house of federal parliament called?",
    optionA: "The Senate",
    optionB: "The House of Representatives",
    optionC: "The Legislative Assembly",
    optionD: "The House of Commons",
    correctAnswer: "B",
    explanation: "The lower house of federal parliament is called the House of Representatives.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Parliament",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who chooses the ministers in the Australian Government?",
    optionA: "The King",
    optionB: "The Prime Minister",
    optionC: "The Governor-General",
    optionD: "The voters directly",
    correctAnswer: "B",
    explanation: "The Prime Minister chooses ministers to form the government.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - The Executive",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the maximum term of the House of Representatives?",
    optionA: "2 years",
    optionB: "3 years",
    optionC: "4 years",
    optionD: "5 years",
    correctAnswer: "B",
    explanation: "The House of Representatives has a maximum term of 3 years.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Parliament",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the term length for senators?",
    optionA: "3 years",
    optionB: "4 years",
    optionC: "6 years",
    optionD: "8 years",
    correctAnswer: "C",
    explanation: "Senators are elected for a term of 6 years.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Parliament",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who signs bills to make them law?",
    optionA: "The Prime Minister",
    optionB: "The Governor-General",
    optionC: "The Chief Justice",
    optionD: "The Speaker",
    correctAnswer: "B",
    explanation: "The Governor-General signs bills to make them law after they pass through parliament.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - How laws are made",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What are the colors of the Australian flag?",
    optionA: "Red, white and blue",
    optionB: "Blue, white and red",
    optionC: "Green and gold",
    optionD: "Black, red and yellow",
    correctAnswer: "B",
    explanation: "The Australian National Flag is blue, white and red, featuring the Union Jack and Southern Cross.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - National symbols",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is Australia's system of government called?",
    optionA: "Republic",
    optionB: "Parliamentary democracy",
    optionC: "Dictatorship",
    optionD: "Absolute monarchy",
    correctAnswer: "B",
    explanation: "Australia has a parliamentary democracy system of government.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Government type",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is a referendum?",
    optionA: "A regular election",
    optionB: "A vote to change the Constitution",
    optionC: "Appointment of a minister",
    optionD: "A court case",
    correctAnswer: "B",
    explanation: "A referendum is a vote to change the Australian Constitution.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - The Constitution",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who do state governments represent?",
    optionA: "The federal government",
    optionB: "People of their state",
    optionC: "Local councils",
    optionD: "The King",
    correctAnswer: "B",
    explanation: "State governments are elected by and represent the people of their state.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - State government",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the role of local government?",
    optionA: "National defence",
    optionB: "Services like waste collection and local roads",
    optionC: "Foreign policy",
    optionD: "Immigration",
    correctAnswer: "B",
    explanation: "Local government provides services like waste collection, local roads, and community facilities.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Local government",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who appoints the Governor-General?",
    optionA: "The Prime Minister",
    optionB: "The King on advice of the Prime Minister",
    optionC: "The voters",
    optionD: "The High Court",
    correctAnswer: "B",
    explanation: "The Governor-General is appointed by the King on the advice of the Prime Minister.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - The Executive",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the leader of a state government called?",
    optionA: "Governor",
    optionB: "Premier",
    optionC: "Minister",
    optionD: "Mayor",
    correctAnswer: "B",
    explanation: "The leader of a state government is called the Premier (or Chief Minister in territories).",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - State government",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who can vote in federal elections?",
    optionA: "Anyone over 18",
    optionB: "Australian citizens aged 18 and over",
    optionC: "Only property owners",
    optionD: "Only men",
    correctAnswer: "B",
    explanation: "Australian citizens aged 18 years and over are entitled and required to vote in federal elections.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Voting",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is preferential voting?",
    optionA: "Voting for your preferred party only",
    optionB: "Ranking candidates in order of preference",
    optionC: "Voting twice",
    optionD: "Voting for multiple parties",
    correctAnswer: "B",
    explanation: "Preferential voting means ranking candidates in order of preference on the ballot paper.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Voting",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What happens if you don't vote in a federal election?",
    optionA: "Nothing",
    optionB: "You may receive a fine",
    optionC: "You lose citizenship",
    optionD: "You go to prison",
    correctAnswer: "B",
    explanation: "Voting is compulsory and you may receive a fine if you don't vote without a valid reason.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Voting",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "Who is the head of the Australian Government?",
    optionA: "The Governor-General",
    optionB: "The Prime Minister",
    optionC: "The King",
    optionD: "The Chief Justice",
    correctAnswer: "B",
    explanation: "The Prime Minister is the head of the Australian Government.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - The Executive",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What is the leader of a local council called?",
    optionA: "Premier",
    optionB: "Mayor or Shire President",
    optionC: "Governor",
    optionD: "Minister",
    correctAnswer: "B",
    explanation: "The leader of a local council is called the Mayor or Shire President.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 3 - Local government",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "What are the two main political parties in Australia?",
    optionA: "Democrats and Republicans",
    optionB: "Liberal Party and Australian Labor Party",
    optionC: "Conservative and Labour",
    optionD: "National and Green",
    correctAnswer: "B",
    explanation: "The two main political parties are the Liberal Party and the Australian Labor Party.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Political parties",
    isValuesQuestion: false,
    isActive: true
  },
  {
    categoryId: 3,
    question: "When must a federal election be held?",
    optionA: "Every 2 years",
    optionB: "At least every 3 years",
    optionC: "Every 4 years",
    optionD: "Every 5 years",
    correctAnswer: "B",
    explanation: "A federal election must be held at least every 3 years for the House of Representatives.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 3 - Elections",
    isValuesQuestion: false,
    isActive: true
  },

  // Additional Part 4 Questions - Australian Values
  {
    categoryId: 4,
    question: "Should people in Australia make an effort to learn English?",
    optionA: "No, it's not important",
    optionB: "Yes, English helps people participate fully in Australian society",
    optionC: "Only if they work in government",
    optionD: "Only if they are citizens",
    correctAnswer: "B",
    explanation: "Learning English helps people participate fully in Australian society and is an important part of integration.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is violence an acceptable way to resolve disputes in Australia?",
    optionA: "Yes, if provoked",
    optionB: "No, violence is not acceptable to resolve disputes",
    optionC: "Sometimes",
    optionD: "Only in self-defense",
    correctAnswer: "B",
    explanation: "Violence is never an acceptable way to resolve disputes or disagreements in Australian society.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians tolerate those who disagree with their views?",
    optionA: "No, only agree with like-minded people",
    optionB: "Yes, mutual respect and tolerance of different views is important",
    optionC: "Only on political matters",
    optionD: "Only if required by law",
    correctAnswer: "B",
    explanation: "Mutual respect and tolerance of different views and beliefs is a fundamental Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Are men and women equal partners in Australia?",
    optionA: "No, men are superior",
    optionB: "Yes, men and women have equal rights and opportunities",
    optionC: "Only in the workplace",
    optionD: "Only in public life",
    correctAnswer: "B",
    explanation: "Men and women have equal rights and are equal partners in Australian society.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to use violence against your spouse in Australia?",
    optionA: "Yes, within the family",
    optionB: "No, it is a serious crime",
    optionC: "Only if provoked",
    optionD: "It depends on the situation",
    correctAnswer: "B",
    explanation: "Family violence is a serious crime in Australia and is never acceptable.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians show compassion for those in need?",
    optionA: "No, people should only help themselves",
    optionB: "Yes, compassion for those in need is an important Australian value",
    optionC: "Only for family members",
    optionD: "Only if paid to do so",
    correctAnswer: "B",
    explanation: "Compassion for those in need is an important Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to humiliate or intimidate people because of their religion?",
    optionA: "Yes, if their religion is different",
    optionB: "No, everyone should be treated with dignity and respect",
    optionC: "Only certain religions",
    optionD: "It depends on the situation",
    correctAnswer: "B",
    explanation: "Everyone should be treated with dignity and respect regardless of their religion. Discrimination is not acceptable.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should people resolve disagreements through discussion and peaceful means?",
    optionA: "No, force is more effective",
    optionB: "Yes, peaceful resolution is a key Australian value",
    optionC: "Only in public places",
    optionD: "Only when required by police",
    correctAnswer: "B",
    explanation: "Resolving disagreements peacefully through discussion is a key Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Do Australian values include respect for freedom and dignity?",
    optionA: "No, collective needs are more important",
    optionB: "Yes, respect for individual freedom and dignity is fundamental",
    optionC: "Only for citizens",
    optionD: "Only in certain situations",
    correctAnswer: "B",
    explanation: "Respect for the freedom and dignity of the individual is a fundamental Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to force someone to marry against their will?",
    optionA: "Yes, if it's a cultural practice",
    optionB: "No, forced marriage is a crime",
    optionC: "Only arranged marriages",
    optionD: "It depends on the age",
    correctAnswer: "B",
    explanation: "Forced marriage is a crime in Australia. Everyone has the right to choose their own spouse.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should parents allow their children to participate in Australian society?",
    optionA: "No, children should stay isolated",
    optionB: "Yes, children should have opportunities to participate",
    optionC: "Only boys",
    optionD: "Only after age 18",
    correctAnswer: "B",
    explanation: "Children should have equal opportunities to participate in Australian society regardless of gender.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it important to respect different cultures and beliefs in Australia?",
    optionA: "No, everyone must be the same",
    optionB: "Yes, as long as they don't break Australian law",
    optionC: "Only certain cultures",
    optionD: "Only for citizens",
    correctAnswer: "B",
    explanation: "Respecting different cultures and beliefs is important, as long as they don't break Australian law.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Do both men and women have the right to work in Australia?",
    optionA: "No, only men should work",
    optionB: "Yes, men and women have equal rights to work",
    optionC: "Only unmarried women",
    optionD: "Only in certain jobs",
    correctAnswer: "B",
    explanation: "Men and women have equal rights to work and pursue careers in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians help people if they need assistance?",
    optionA: "No, everyone is on their own",
    optionB: "Yes, helping those in need shows compassion",
    optionC: "Only family members",
    optionD: "Only if paid",
    correctAnswer: "B",
    explanation: "The spirit of mateship and compassion means helping those who need assistance.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is religious extremism compatible with Australian values?",
    optionA: "Yes, all religious practices are acceptable",
    optionB: "No, violent extremism is not compatible with Australian values",
    optionC: "Only certain religions",
    optionD: "It depends on the situation",
    correctAnswer: "B",
    explanation: "Violent extremism, including religious extremism, is not compatible with Australian values and laws.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Can a person choose to be single or marry in Australia?",
    optionA: "No, marriage is compulsory",
    optionB: "Yes, people have the freedom to choose",
    optionC: "Only for men",
    optionD: "Only with family permission",
    correctAnswer: "B",
    explanation: "People in Australia have the freedom to choose whether to marry or remain single.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to prevent someone from working because of their gender?",
    optionA: "Yes, in certain jobs",
    optionB: "No, this is illegal discrimination",
    optionC: "Only for married women",
    optionD: "Only in private companies",
    correctAnswer: "B",
    explanation: "Preventing someone from working because of their gender is illegal discrimination in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians value giving others a 'fair go'?",
    optionA: "No, competition is all that matters",
    optionB: "Yes, giving everyone a fair chance is an Australian value",
    optionC: "Only in sports",
    optionD: "Only for citizens",
    correctAnswer: "B",
    explanation: "Giving everyone a 'fair go' - a fair chance to succeed - is an important Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to use threats or violence to settle arguments?",
    optionA: "Yes, if you're angry",
    optionB: "No, peaceful resolution is the Australian way",
    optionC: "Only minor violence",
    optionD: "Only in private",
    correctAnswer: "B",
    explanation: "Using threats or violence to settle arguments is not acceptable. Peaceful resolution is the Australian way.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Do girls and boys have equal access to education in Australia?",
    optionA: "No, only boys should be educated",
    optionB: "Yes, girls and boys have equal access to education",
    optionC: "Only in primary school",
    optionD: "Only in private schools",
    correctAnswer: "B",
    explanation: "Girls and boys have equal access to education in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is racial discrimination acceptable in Australia?",
    optionA: "Yes, against certain groups",
    optionB: "No, racial discrimination is illegal",
    optionC: "Only in private",
    optionD: "Only verbally",
    correctAnswer: "B",
    explanation: "Racial discrimination is illegal and goes against Australian values of equality and respect.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians respect the rule of law?",
    optionA: "No, laws can be ignored",
    optionB: "Yes, respect for the rule of law is essential",
    optionC: "Only when convenient",
    optionD: "Only major laws",
    correctAnswer: "B",
    explanation: "Respect for the rule of law is an essential Australian value. Everyone must follow the law.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Can people practice their culture as long as they respect Australian laws?",
    optionA: "No, all cultural practices must be abandoned",
    optionB: "Yes, cultural practices are welcome if they respect Australian laws and values",
    optionC: "Only at home",
    optionD: "Only certain cultures",
    correctAnswer: "B",
    explanation: "People can practice their culture in Australia as long as they respect Australian laws and values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it important to treat all people with equal respect?",
    optionA: "No, some people deserve less respect",
    optionB: "Yes, everyone deserves equal respect",
    optionC: "Only people you agree with",
    optionD: "Only people from your culture",
    correctAnswer: "B",
    explanation: "Treating all people with equal respect regardless of background is a fundamental Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians value equality of opportunity?",
    optionA: "No, only the wealthy should succeed",
    optionB: "Yes, everyone should have equal opportunity to succeed",
    optionC: "Only for certain groups",
    optionD: "Only in government jobs",
    correctAnswer: "B",
    explanation: "Equality of opportunity - everyone having a chance to succeed - is a core Australian value.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is female genital mutilation legal in Australia?",
    optionA: "Yes, if it's cultural",
    optionB: "No, it is a serious crime",
    optionC: "Only with consent",
    optionD: "Only in certain states",
    correctAnswer: "B",
    explanation: "Female genital mutilation is a serious crime in Australia and goes against Australian values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should people respect others' right to express their own culture?",
    optionA: "No, only one culture should exist",
    optionB: "Yes, as long as it respects Australian laws",
    optionC: "Only European cultures",
    optionD: "Only in designated areas",
    correctAnswer: "B",
    explanation: "People should respect others' right to express their culture, as long as it respects Australian laws and values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to discriminate against someone because of their disability?",
    optionA: "Yes, disabled people have fewer rights",
    optionB: "No, discrimination is illegal and wrong",
    optionC: "Only in employment",
    optionD: "Only for severe disabilities",
    correctAnswer: "B",
    explanation: "Discrimination against someone because of their disability is illegal and against Australian values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians support a spirit of egalitarianism?",
    optionA: "No, hierarchy is more important",
    optionB: "Yes, treating people equally regardless of background is important",
    optionC: "Only for certain groups",
    optionD: "Only in public",
    correctAnswer: "B",
    explanation: "A spirit of egalitarianism - treating people equally regardless of their background - is an Australian value.",
    difficulty: "medium",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Do both men and women have the right to participate in community life?",
    optionA: "No, only men",
    optionB: "Yes, men and women have equal rights to participate",
    optionC: "Only unmarried people",
    optionD: "Only in certain communities",
    correctAnswer: "B",
    explanation: "Men and women have equal rights to participate fully in community life in Australia.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Is it acceptable to prevent women from leaving the house?",
    optionA: "Yes, for their safety",
    optionB: "No, everyone has freedom of movement",
    optionC: "Only if the husband decides",
    optionD: "Only in certain cultures",
    correctAnswer: "B",
    explanation: "Preventing women from leaving the house violates their freedom of movement and is against Australian values.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Should Australians value peacefulness?",
    optionA: "No, strength through force is better",
    optionB: "Yes, peacefulness is an important Australian value",
    optionC: "Only in public",
    optionD: "Only when required",
    correctAnswer: "B",
    explanation: "Peacefulness is an important Australian value. Australians resolve disagreements peacefully.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
  {
    categoryId: 4,
    question: "Can people choose to have children or not in Australia?",
    optionA: "No, having children is compulsory",
    optionB: "Yes, people are free to choose",
    optionC: "Only married couples can choose",
    optionD: "Only with government approval",
    correctAnswer: "B",
    explanation: "People in Australia have the freedom to choose whether or not to have children.",
    difficulty: "easy",
    source: "official_guide",
    sourceReference: "Part 4 - Australian values",
    isValuesQuestion: true,
    isActive: true
  },
];

// Study Materials Content - Extracted from Official Guide
export const studyMaterialsContent: Omit<InsertStudyMaterial, 'createdAt'>[] = [
  {
    categoryId: 1,
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
    categoryId: 1,
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
    categoryId: 1,
    partNumber: 1,
    title: "The Australian gold rush",
    section: "Gold Discovery",
    content: `In 1851, a 'gold rush' began when gold was discovered in the colonies of New South Wales and Victoria. People from all around the world came to try to make their fortunes.

Chinese people arriving at this time were the first large group of migrants not from Europe. In 10 years, Australia's population more than doubled.`,
    orderIndex: 3,
    isActive: true
  },
  {
    categoryId: 1,
    partNumber: 1,
    title: "The nation of Australia",
    section: "Federation",
    content: `In 1901, the separate colonies were united into a federation of states called the Commonwealth of Australia. Our national democratic institutions, including our national parliament, government and the High Court were established under the new Australian Constitution.

In 1901, Australia's population was about four million. This number did not include Aboriginal and Torres Strait Islander peoples. They were not included in official estimates until after a Referendum in 1967.`,
    orderIndex: 4,
    isActive: true
  },
  {
    categoryId: 2,
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
    categoryId: 3,
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
    categoryId: 4,
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

// Flashcards based on official content - 20 unique questions
export const officialFlashcards: Omit<InsertFlashcard, 'createdAt'>[] = [
  {
    categoryId: 1,
    front: "Who are Australia's first inhabitants?",
    back: "Aboriginal and Torres Strait Islander peoples, who have the oldest continuous cultures and traditions in the world.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When did the First Fleet arrive in Australia?",
    back: "26 January 1788",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When did Australia become a nation?",
    back: "1 January 1901, when the separate colonies united to form the Commonwealth of Australia",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is Australia's capital city?",
    back: "Canberra",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is Australia's national anthem?",
    back: "Advance Australia Fair",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When is Australia Day celebrated?",
    back: "26 January each year, the anniversary of the arrival of the First Fleet in 1788.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When is Anzac Day commemorated?",
    back: "25 April each year, remembering those who served and died in wars and peacekeeping operations.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is Australia's national flower?",
    back: "The golden wattle",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What are Australia's national colours?",
    back: "Green and gold, the colours of the golden wattle.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the Rule of Law?",
    back: "Everyone must follow the law, including those who make it. No one is above the law.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What does freedom of religion mean?",
    back: "People can practice any religion they choose, or no religion at all.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Is Australia's government secular?",
    back: "Yes, it operates separately from churches or other religious entities.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What does 'a fair go' mean?",
    back: "Equal opportunity - what someone achieves should result from their talents, work and effort, not their background.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What are the three levels of government in Australia?",
    back: "Federal (Commonwealth), State/Territory, and Local government",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Is voting compulsory in Australia?",
    back: "Yes, voting is compulsory for all Australian citizens aged 18 years and over in federal and state elections.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "How many senators are there in total?",
    back: "76 senators: 12 from each of the 6 states plus 2 each from the ACT and NT.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Who is Australia's Head of State?",
    back: "The King of Australia, His Majesty King Charles III.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Are men and women equal in Australia?",
    back: "Yes, Australian law and values support equality between men and women, giving them equal rights and opportunities.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What are Australian values based on?",
    back: "Freedom, respect, fairness and equality of opportunity.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Do Australian laws apply to all people in Australia?",
    back: "Yes, regardless of background or culture, all people in Australia must follow Australian laws.",
    isActive: true
  },
  // Additional Part 1 Flashcards (41 more to reach 50 total)
  {
    categoryId: 1,
    front: "How long have Aboriginal and Torres Strait Islander peoples lived in Australia?",
    back: "Between 65,000 and 40,000 years, making them the world's oldest continuous culture.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Where are Torres Strait Islander people from?",
    back: "Islands between the northern tip of Queensland and Papua New Guinea.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What was the First Fleet?",
    back: "The first 11 convict ships that arrived from Great Britain on 26 January 1788.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Who was the first Governor of New South Wales?",
    back: "Captain Arthur Phillip.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When did the gold rush begin in Australia?",
    back: "1851, when gold was discovered in New South Wales and Victoria.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "When did Australia become a nation?",
    back: "1 January 1901, when the separate colonies united to form the Commonwealth of Australia (Federation).",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Who was Australia's first Prime Minister?",
    back: "Sir Edmund Barton.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "How many states does Australia have?",
    back: "Six states: New South Wales, Victoria, Queensland, South Australia, Western Australia, and Tasmania.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "How many territories does Australia have?",
    back: "Two mainland territories: Australian Capital Territory (ACT) and Northern Territory (NT).",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What are Australia's national colours?",
    back: "Green and gold, the colours of the golden wattle (Australia's national flower).",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the largest state in Australia?",
    back: "Western Australia.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What does the Commonwealth Star on the Australian flag represent?",
    back: "Federation - one point for each of the 6 states and one for the territories.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What do the stars on the Australian flag represent?",
    back: "The Commonwealth Star and the Southern Cross constellation.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of Queensland?",
    back: "Brisbane.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of Victoria?",
    back: "Melbourne.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of New South Wales?",
    back: "Sydney.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of South Australia?",
    back: "Adelaide.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of Western Australia?",
    back: "Perth.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of Tasmania?",
    back: "Hobart.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the capital of the Northern Territory?",
    back: "Darwin.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What happened on 26 January 1788?",
    back: "The First Fleet arrived in Sydney Cove, marking the beginning of European settlement.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the significance of the gold rush?",
    back: "It led to rapid population growth, economic development, and the development of Australian democracy.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the Eureka Stockade?",
    back: "A rebellion by miners in 1854 at Ballarat against unfair mining licenses and taxes.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What are the Aboriginal and Torres Strait Islander flags?",
    back: "Official flags representing Aboriginal and Torres Strait Islander peoples and their cultures.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is 'Terra Nullius'?",
    back: "The false idea that Australia belonged to no one before European settlement, later overturned by the Mabo decision.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What was the Mabo decision?",
    back: "A 1992 High Court decision recognizing native title rights for Aboriginal and Torres Strait Islander peoples.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is Reconciliation?",
    back: "The process of building respectful relationships between Aboriginal and Torres Strait Islander peoples and other Australians.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What does ANZAC stand for?",
    back: "Australian and New Zealand Army Corps.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Where did the ANZAC forces fight in World War I?",
    back: "Gallipoli in Turkey, among other places.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the significance of Gallipoli?",
    back: "It was a major World War I battle where ANZAC forces fought, becoming a key part of Australian national identity.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is a 'digger'?",
    back: "An Australian soldier, particularly from World Wars I and II.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is mateship?",
    back: "A strong Australian tradition of loyalty, equality and friendship, especially in times of adversity.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the 'Spirit of ANZAC'?",
    back: "Courage, mateship, sacrifice, and dedication shown by Australian soldiers.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What percentage of Australia's population lives in cities?",
    back: "About 90% of Australians live in cities and towns.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the population of Australia?",
    back: "Over 25 million people (as of the 2020 guide).",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Is Australia a multicultural country?",
    back: "Yes, people from over 200 countries have migrated to Australia.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What are the official languages in Australia?",
    back: "Australia has no official language, but English is the national language.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the Commonwealth of Australia?",
    back: "The official name for the nation formed when the six colonies united on 1 January 1901.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is Federation?",
    back: "The joining together of the six separate British colonies to form the Commonwealth of Australia in 1901.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "What is the Australian Constitution?",
    back: "The set of rules by which Australia is governed, established in 1901.",
    isActive: true
  },
  {
    categoryId: 1,
    front: "Can the Australian Constitution be changed?",
    back: "Yes, by referendum - a vote where the majority of Australians and a majority of states must approve the change.",
    isActive: true
  },
  // Additional Part 2 Flashcards (46 more to reach 50 total)
  {
    categoryId: 2,
    front: "What does freedom of speech mean in Australia?",
    back: "People can express their opinions openly, within the law, without government interference.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What does freedom of association mean?",
    back: "People can join or form groups such as political parties, unions, and community organizations.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is a parliamentary democracy?",
    back: "A system where the people elect representatives to make laws and decisions on their behalf.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What are democratic rights in Australia?",
    back: "Rights including freedom of speech, association, religion, and the right to vote.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What are democratic responsibilities?",
    back: "Obeying the law, voting in elections, serving on a jury if called, and defending Australia if necessary.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is equality before the law?",
    back: "Everyone is treated equally under the law, regardless of their background, wealth, or status.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the presumption of innocence?",
    back: "Everyone is presumed innocent until proven guilty in a court of law.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is a fair trial?",
    back: "The right to have legal representation, know the charges, present evidence, and have decisions made impartially.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Can you be forced to follow a religion in Australia?",
    back: "No, Australia has freedom of religion - you can follow any religion or no religion at all.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What does secular government mean?",
    back: "The government is separate from religious institutions and doesn't support or interfere with any religion.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is freedom of expression?",
    back: "The right to express your views through discussion, art, writing, and peaceful protest.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Can freedom of speech be limited?",
    back: "Yes, when it incites violence, defames others, or breaks laws against hate speech.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the role of the media in democracy?",
    back: "To inform citizens, investigate issues, and hold government accountable.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is freedom of the press?",
    back: "Media can report on issues and government activities without censorship.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What are human rights?",
    back: "Basic rights and freedoms that belong to every person, protected by law.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is equality of opportunity?",
    back: "Everyone should have the chance to succeed based on their talents and effort, not their background.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is mutual respect?",
    back: "Treating others with dignity and respect, regardless of differences.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is tolerance?",
    back: "Accepting and respecting different opinions, beliefs, and ways of life.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the right to peaceful assembly?",
    back: "People can gather peacefully to protest or express their views.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What are civil liberties?",
    back: "Freedoms and rights protected from government interference, like freedom of speech and religion.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is political freedom in Australia?",
    back: "The right to participate in the political process, vote, and run for office.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the secret ballot?",
    back: "Voting is private - no one can see or know how you voted.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is an independent judiciary?",
    back: "Courts and judges make decisions independently, free from government or political pressure.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the separation of powers?",
    back: "Power is divided between Parliament (makes laws), Executive (implements laws), and Judiciary (interprets laws).",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Why is separation of powers important?",
    back: "It prevents any one branch from having too much power and protects democracy.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is accountable government?",
    back: "Government must explain and justify its actions to the people and Parliament.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the opposition in Parliament?",
    back: "Political parties not in government that scrutinize and provide alternative policies.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is a referendum?",
    back: "A national vote on proposed changes to the Australian Constitution.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is required to change the Constitution?",
    back: "A majority of voters nationally and a majority in at least four of the six states must vote yes.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the Commonwealth?",
    back: "An association of countries, mostly former British territories, that cooperate on shared goals.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Is Australia part of the Commonwealth?",
    back: "Yes, Australia is a member of the Commonwealth of Nations.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the Westminster system?",
    back: "The parliamentary system of government inherited from the United Kingdom.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is responsible government?",
    back: "The government must have the support of the majority in the House of Representatives and be accountable to Parliament.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is a constitutional monarchy?",
    back: "A system where the King is Head of State but power is exercised according to the Constitution and by elected representatives.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "Who represents the King in Australia?",
    back: "The Governor-General at the federal level, and Governors at the state level.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is habeas corpus?",
    back: "The right not to be imprisoned unlawfully - people must be charged or released.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is due process?",
    back: "Legal proceedings must follow established rules and principles to ensure fairness.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the right to privacy?",
    back: "Protection from unwarranted intrusion into personal life and information.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is religious freedom?",
    back: "The right to practice any religion, change religion, or have no religion at all.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is freedom from discrimination?",
    back: "Everyone should be treated fairly regardless of race, religion, gender, age, or disability.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the role of citizens in democracy?",
    back: "To vote, obey laws, participate in community, and stay informed about issues.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is civic duty?",
    back: "Responsibilities of citizens including voting, jury duty, and obeying the law.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is community participation?",
    back: "Taking part in community activities, volunteering, and contributing to society.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the right to own property?",
    back: "People can own land and possessions, protected by law.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is freedom from arbitrary arrest?",
    back: "You cannot be arrested or detained without lawful reason and due process.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is the rule of law principle?",
    back: "Laws apply equally to everyone, including those in government and positions of power.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is representative democracy?",
    back: "People elect representatives to make decisions and laws on their behalf.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is political pluralism?",
    back: "Multiple political parties can compete for power and represent different views.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is an independent electoral commission?",
    back: "An impartial body that runs elections fairly and independently from government.",
    isActive: true
  },
  {
    categoryId: 2,
    front: "What is universal suffrage?",
    back: "All adult citizens have the right to vote, regardless of race, gender, or wealth.",
    isActive: true
  },
  // Additional Part 3 Flashcards (46 more to reach 50 total)
  {
    categoryId: 3,
    front: "What is the role of the Federal Parliament?",
    back: "To make laws for Australia on matters in the Constitution, such as defense, trade, and immigration.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the role of State Parliaments?",
    back: "To make laws on matters like schools, hospitals, roads, and police within their state.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the role of Local Government?",
    back: "To provide services like waste collection, local roads, parks, and community facilities.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "How are local councillors chosen?",
    back: "Elected by people in the local area.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "How many members are in the House of Representatives?",
    back: "150 members, each representing an electorate.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "How are senators elected?",
    back: "By proportional representation - voters number candidates in order of preference.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the term for a senator?",
    back: "Six years (normally half retire every three years).",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the term for a member of the House of Representatives?",
    back: "Three years (or until Parliament is dissolved for an election).",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Governor-General's role?",
    back: "To represent the King in Australia and perform ceremonial duties, sign bills into law, and dissolve Parliament for elections.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Who appoints the Governor-General?",
    back: "The King, on the advice of the Australian Prime Minister.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Executive in government?",
    back: "The Prime Minister, Ministers, and government departments that implement laws and run the country.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Legislature?",
    back: "Parliament, which makes and changes laws.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Judiciary?",
    back: "Courts and judges who interpret and apply the law.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the High Court's role?",
    back: "The highest court that interprets the Constitution and decides disputes between states or between states and the Commonwealth.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Who appoints High Court judges?",
    back: "The Governor-General, on the advice of the government.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a bill?",
    back: "A proposed law that is being considered by Parliament.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "How does a bill become law?",
    back: "It must be passed by both houses of Parliament and receive Royal Assent from the Governor-General.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is Royal Assent?",
    back: "The Governor-General's formal approval that turns a bill into law.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is Question Time?",
    back: "A time when members can ask Ministers questions about government policies and actions.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Cabinet?",
    back: "Senior Ministers chosen by the Prime Minister to make major government decisions.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a Minister?",
    back: "An elected member of Parliament responsible for a government department or area of policy.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Shadow Cabinet?",
    back: "Senior opposition members who scrutinize government Ministers and offer alternative policies.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the role of the Prime Minister?",
    back: "To lead the government, chair Cabinet, represent Australia internationally, and set government policy.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Who chooses the Prime Minister?",
    back: "The leader of the party or coalition with the majority of seats in the House of Representatives.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a political party?",
    back: "A group of people with similar political beliefs who work together to get elected and govern.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a coalition government?",
    back: "When two or more parties join together to form government.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is preferential voting?",
    back: "Voters number candidates in order of preference (1, 2, 3, etc.).",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What age must you be to vote?",
    back: "18 years or older.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Is it compulsory to enroll to vote?",
    back: "Yes, Australian citizens aged 18 and over must enroll to vote.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What happens if you don't vote?",
    back: "You may be fined (unless you have a valid reason).",
    isActive: true
  },
  {
    categoryId: 3,
    front: "When are federal elections held?",
    back: "At least every three years, or when Parliament is dissolved.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is an electorate?",
    back: "A geographic area represented by one member in the House of Representatives.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Australian Electoral Commission (AEC)?",
    back: "The independent body that runs federal elections and referendums.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a double dissolution?",
    back: "When both houses of Parliament are dissolved and all seats are up for election.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a hung parliament?",
    back: "When no party has a majority in the House of Representatives.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a vote of no confidence?",
    back: "A vote showing Parliament no longer supports the government, which must then resign or call an election.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a private member's bill?",
    back: "A bill introduced by a member who is not a Minister.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Senate's role?",
    back: "To review legislation, represent states equally, and act as a house of review.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Why does each state have equal representation in the Senate?",
    back: "To protect the interests of less populous states and ensure all states have an equal voice.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the role of State Governors?",
    back: "To represent the King in their state and perform similar ceremonial duties as the Governor-General.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a State Premier?",
    back: "The leader of the state government, similar to the Prime Minister at federal level.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is jury duty?",
    back: "The civic responsibility to serve on a jury in a court trial if called.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a jury?",
    back: "A group of ordinary citizens who decide if someone is guilty or not guilty in serious criminal trials.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the legal voting age in Australia?",
    back: "18 years old.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What are the main political parties in Australia?",
    back: "The Liberal Party, the Australian Labor Party, the Nationals, and the Greens, among others.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is Parliament House in Canberra?",
    back: "The building where the Federal Parliament meets.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "Can the Senate reject a bill?",
    back: "Yes, the Senate can reject or amend bills passed by the House of Representatives.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is a by-election?",
    back: "An election held to fill a vacant seat in Parliament between general elections.",
    isActive: true
  },
  {
    categoryId: 3,
    front: "What is the Ombudsman?",
    back: "An independent official who investigates complaints about government departments and agencies.",
    isActive: true
  },
  // Additional Part 4 Flashcards (47 more to reach 50 total)
  {
    categoryId: 4,
    front: "What is respect for equal worth and dignity?",
    back: "Treating all people with respect, regardless of their background, beliefs, or circumstances.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is equality of men and women?",
    back: "Men and women have equal rights, opportunities, and responsibilities under Australian law.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Is violence against women acceptable?",
    back: "No, violence against women and children is illegal and never acceptable in Australian society.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is freedom in Australian values?",
    back: "The right to live freely within the law, make choices, and express yourself.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is fairness in Australian values?",
    back: "Everyone should have a 'fair go' - equal opportunity to succeed based on their talents and effort.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What does peacefulness mean?",
    back: "Australians resolve conflicts peacefully through discussion and democratic processes, not violence.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is compassion for those in need?",
    back: "Helping and supporting people who are less fortunate or facing difficulties.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What does mutual respect mean in practice?",
    back: "Accepting and respecting others' rights to different opinions, beliefs, and ways of life.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Must you obey Australian laws?",
    back: "Yes, all people in Australia must obey Australian laws, regardless of their background or beliefs.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you practice your own culture in Australia?",
    back: "Yes, as long as it doesn't break Australian laws or interfere with others' rights.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Is arranged marriage acceptable in Australia?",
    back: "Only if both parties freely consent - forced marriage is illegal.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the status of women in Australia?",
    back: "Women have equal rights with men, including the right to work, education, and participation in all aspects of society.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can parents prevent girls from going to school?",
    back: "No, education is compulsory for all children, regardless of gender.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is domestic violence?",
    back: "Violence or abuse within family or intimate relationships - it is illegal and never acceptable.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you be forced to marry?",
    back: "No, forced marriage is illegal in Australia. Marriage must be entered into freely by both parties.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is female genital mutilation (FGM)?",
    back: "A harmful practice that is illegal in Australia.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you have more than one spouse in Australia?",
    back: "No, polygamy is illegal. You can only be married to one person at a time.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is child abuse?",
    back: "Harming children physically, emotionally, or sexually - it is illegal and must be reported.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you use physical punishment on children?",
    back: "Excessive physical punishment is illegal. Australian law protects children from abuse.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is racism?",
    back: "Discrimination or prejudice based on race or ethnicity - it is illegal and against Australian values.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Is racial vilification allowed?",
    back: "No, it is illegal to publicly incite hatred or violence against people based on their race.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is discrimination?",
    back: "Unfair treatment based on characteristics like race, gender, religion, age, or disability - it is illegal.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can employers discriminate based on gender?",
    back: "No, discrimination in employment based on gender is illegal.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is sexual harassment?",
    back: "Unwelcome sexual behavior that is offensive or intimidating - it is illegal.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you be discriminated against for your religion?",
    back: "No, discrimination based on religion is illegal in Australia.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the national language of Australia?",
    back: "English is the national language and is used in government, education, and business.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Do you need to speak English to become a citizen?",
    back: "Yes, basic English is required for most citizenship applicants.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the importance of English in Australia?",
    back: "English helps you participate fully in Australian society, access services, and communicate effectively.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you speak your own language at home?",
    back: "Yes, you can speak any language at home while also learning and using English in public life.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is social cohesion?",
    back: "People from different backgrounds living together harmoniously and participating in society.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is Australian citizenship?",
    back: "Full membership of the Australian community with rights and responsibilities.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What are citizenship responsibilities?",
    back: "Obeying laws, voting, serving on juries, defending Australia if necessary, and participating in community life.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the pledge of commitment?",
    back: "A promise made when becoming a citizen to be loyal to Australia and uphold its values and laws.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you lose your citizenship?",
    back: "In limited circumstances, such as fraud in obtaining citizenship or certain terrorism offenses.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is a multicultural society?",
    back: "A society where people from many cultures live together and respect each other's differences.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is integration?",
    back: "Becoming part of Australian society while maintaining your cultural identity.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you maintain your cultural identity?",
    back: "Yes, as long as your cultural practices are lawful and respect others' rights.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is community participation?",
    back: "Being active in your community through volunteering, joining groups, or helping neighbors.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is volunteering?",
    back: "Giving your time to help others or support community organizations without payment.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Is volunteering encouraged in Australia?",
    back: "Yes, volunteering is highly valued and helps build strong communities.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the right to privacy?",
    back: "Your personal information and private life are protected by law.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can the government interfere with your family life?",
    back: "Only in limited circumstances, such as protecting children from harm.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the right to work?",
    back: "Everyone has the right to seek employment and work without discrimination.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Are there workplace protections?",
    back: "Yes, laws protect workers' rights, safety, fair pay, and working conditions.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is workplace safety?",
    back: "Employers must provide a safe working environment free from hazards.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "Can you join a trade union?",
    back: "Yes, workers have the right to join unions to represent their interests.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is fair pay?",
    back: "Workers must receive at least the minimum wage set by law for their work.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the Australian Citizenship Pledge?",
    back: "A promise to be loyal to Australia, respect its rights and liberties, and uphold its laws.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What happens at a citizenship ceremony?",
    back: "New citizens make the pledge, receive their certificate, and officially become Australian citizens.",
    isActive: true
  },
  {
    categoryId: 4,
    front: "What is the significance of becoming an Australian citizen?",
    back: "It represents full membership in Australian society with all rights and responsibilities.",
    isActive: true
  }
];

// ─── ADDITIONAL QUESTIONS ─────────────────────────────────────────────────────
// Appended to officialQuestions at module load via the spread below

const extraQuestions: Omit<typeof officialQuestions[0], never>[] = [

  // ── PART 1: AUSTRALIA AND ITS PEOPLE ──────────────────────────────────────

  // State capitals
  {
    categoryId: 1,
    question: "What is the capital city of New South Wales?",
    optionA: "Melbourne", optionB: "Sydney", optionC: "Canberra", optionD: "Brisbane",
    correctAnswer: "B",
    explanation: "Sydney is the capital city of New South Wales and is Australia's largest city.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of Victoria?",
    optionA: "Sydney", optionB: "Adelaide", optionC: "Melbourne", optionD: "Geelong",
    correctAnswer: "C",
    explanation: "Melbourne is the capital city of Victoria and is Australia's second largest city.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of Queensland?",
    optionA: "Cairns", optionB: "Brisbane", optionC: "Gold Coast", optionD: "Townsville",
    correctAnswer: "B",
    explanation: "Brisbane is the capital city of Queensland, located in the south-east of the state.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of South Australia?",
    optionA: "Adelaide", optionB: "Darwin", optionC: "Alice Springs", optionD: "Hobart",
    correctAnswer: "A",
    explanation: "Adelaide is the capital city of South Australia.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of Western Australia?",
    optionA: "Fremantle", optionB: "Broome", optionC: "Perth", optionD: "Albany",
    correctAnswer: "C",
    explanation: "Perth is the capital city of Western Australia and is the most isolated capital city in the world.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of Tasmania?",
    optionA: "Launceston", optionB: "Devonport", optionC: "Burnie", optionD: "Hobart",
    correctAnswer: "D",
    explanation: "Hobart is the capital city of Tasmania, located on the Derwent River.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the capital city of the Northern Territory?",
    optionA: "Alice Springs", optionB: "Katherine", optionC: "Darwin", optionD: "Kakadu",
    correctAnswer: "C",
    explanation: "Darwin is the capital city of the Northern Territory, located on Australia's north coast.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Which is Australia's largest state by area?",
    optionA: "Queensland", optionB: "New South Wales", optionC: "Northern Territory", optionD: "Western Australia",
    correctAnswer: "D",
    explanation: "Western Australia is the largest state, covering about one-third of Australia's total land area.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Which is the most populous state in Australia?",
    optionA: "Victoria", optionB: "New South Wales", optionC: "Queensland", optionD: "Western Australia",
    correctAnswer: "B",
    explanation: "New South Wales is the most populous state in Australia.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Which mainland territory is the seat of the federal government?",
    optionA: "Northern Territory", optionB: "Jervis Bay Territory", optionC: "Australian Capital Territory", optionD: "Norfolk Island",
    correctAnswer: "C",
    explanation: "The Australian Capital Territory (ACT) is where Canberra, the national capital, is located.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - States and Territories", isValuesQuestion: false, isActive: true,
  },

  // Explorers and history
  {
    categoryId: 1,
    question: "Who was the first European explorer to chart the east coast of Australia?",
    optionA: "Abel Tasman", optionB: "James Cook", optionC: "Matthew Flinders", optionD: "Arthur Phillip",
    correctAnswer: "B",
    explanation: "Captain James Cook charted the east coast of Australia in 1770 and claimed it for Britain.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - European exploration", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Which British navigator first circumnavigated and mapped Australia's coastline?",
    optionA: "James Cook", optionB: "Arthur Phillip", optionC: "Matthew Flinders", optionD: "George Bass",
    correctAnswer: "C",
    explanation: "Matthew Flinders was the first to circumnavigate and map the entire Australian coastline (1801–1803).",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - European exploration", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Where did the First Fleet land in 1788?",
    optionA: "Port Phillip Bay", optionB: "Port Jackson (Sydney Cove)", optionC: "Botany Bay", optionD: "Moreton Bay",
    correctAnswer: "B",
    explanation: "The First Fleet initially anchored at Botany Bay but then sailed to Port Jackson (Sydney Cove) to establish the colony.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - First settlement", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What were the people transported on the First Fleet?",
    optionA: "Free settlers", optionB: "Convicts and their guards", optionC: "Gold miners", optionD: "Merchants",
    correctAnswer: "B",
    explanation: "The First Fleet carried about 1,500 people — mainly convicts and the marines and officials who guarded them.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - First settlement", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When did the Australian gold rush of Victoria begin?",
    optionA: "1840", optionB: "1851", optionC: "1861", optionD: "1870",
    correctAnswer: "B",
    explanation: "Gold was discovered in Victoria in 1851, triggering a major gold rush that transformed the colony.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Gold rush", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Who was Australia's first Prime Minister?",
    optionA: "Alfred Deakin", optionB: "Robert Menzies", optionC: "Edmund Barton", optionD: "John Curtin",
    correctAnswer: "C",
    explanation: "Edmund Barton became Australia's first Prime Minister on 1 January 1901 when the Commonwealth was proclaimed.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Federation", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "In what year was the Australian Constitution first enacted?",
    optionA: "1888", optionB: "1901", optionC: "1910", optionD: "1927",
    correctAnswer: "B",
    explanation: "The Australian Constitution came into effect on 1 January 1901 when the Commonwealth of Australia was proclaimed.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Federation", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When did women first gain the right to vote in federal elections in Australia?",
    optionA: "1895", optionB: "1902", optionC: "1913", optionD: "1920",
    correctAnswer: "B",
    explanation: "The Commonwealth Franchise Act 1902 gave most women the right to vote in federal elections, making Australia one of the first countries to do so.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Federation and democracy", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "In what year did Aboriginal and Torres Strait Islander peoples gain the right to vote in federal elections?",
    optionA: "1948", optionB: "1962", optionC: "1967", optionD: "1975",
    correctAnswer: "B",
    explanation: "Aboriginal and Torres Strait Islander peoples gained the right to vote in federal elections in 1962.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What did the 1967 referendum achieve?",
    optionA: "Gave women the vote", optionB: "Ended the White Australia Policy", optionC: "Counted Aboriginal people in the national census", optionD: "Made Australia a republic",
    correctAnswer: "C",
    explanation: "The 1967 referendum changed the Constitution to allow Aboriginal and Torres Strait Islander peoples to be counted in the national census and for the federal government to make laws for them.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What was the 'Stolen Generations'?",
    optionA: "Children sent to Australia as migrants", optionB: "Indigenous children removed from their families by government policies", optionC: "Convicts transported to Australia", optionD: "Children of gold rush workers",
    correctAnswer: "B",
    explanation: "The Stolen Generations refers to Aboriginal and Torres Strait Islander children who were forcibly removed from their families by Australian federal and state governments.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When did Australia formally apologize to the Stolen Generations?",
    optionA: "2001", optionB: "2005", optionC: "2008", optionD: "2010",
    correctAnswer: "C",
    explanation: "On 13 February 2008, Prime Minister Kevin Rudd made a formal apology to the Stolen Generations in Parliament.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is NAIDOC Week?",
    optionA: "A week celebrating new migrants to Australia", optionB: "A national celebration of Aboriginal and Torres Strait Islander cultures", optionC: "A week recognizing Australian defense forces", optionD: "A multicultural food festival",
    correctAnswer: "B",
    explanation: "NAIDOC Week celebrates the history, culture and achievements of Aboriginal and Torres Strait Islander peoples. NAIDOC stands for National Aborigines and Islanders Day Observance Committee.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },

  // Symbols and icons
  {
    categoryId: 1,
    question: "What are the six points on the Commonwealth Star on the Australian flag?",
    optionA: "Six states of Australia", optionB: "Five states, one territory, and the Southern Cross", optionC: "Six states and territories combined", optionD: "The six continents of the world",
    correctAnswer: "C",
    explanation: "The Commonwealth Star has seven points — six representing the six states and one for the territories. The question asks about six points: five for states and one for territories, but the star actually has seven.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 1 - Australian National Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What does the Union Jack in the top left corner of the Australian flag represent?",
    optionA: "Australia's ties with the United States", optionB: "Australia's British heritage", optionC: "The Southern Hemisphere", optionD: "The six states of Australia",
    correctAnswer: "B",
    explanation: "The Union Jack represents Australia's historical ties with Britain.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australian National Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What does the Southern Cross on the Australian flag represent?",
    optionA: "Australia's position in the Southern Hemisphere", optionB: "The five original states", optionC: "Australia's Christian heritage", optionD: "Navigation by early explorers",
    correctAnswer: "A",
    explanation: "The Southern Cross is a constellation visible only from the Southern Hemisphere, representing Australia's location in the southern part of the globe.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australian National Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What are the colors of the Aboriginal flag?",
    optionA: "Blue, red and white", optionB: "Green, gold and black", optionC: "Black, red and yellow", optionD: "Red, yellow and white",
    correctAnswer: "C",
    explanation: "The Aboriginal flag has black on top representing the Aboriginal people, red on the bottom representing the earth and ochre, and a yellow circle in the centre representing the sun.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australian Aboriginal Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What does the yellow circle on the Aboriginal flag represent?",
    optionA: "Gold and prosperity", optionB: "The sun, the giver of life", optionC: "The desert sand", optionD: "The full moon",
    correctAnswer: "B",
    explanation: "The yellow circle in the centre of the Aboriginal flag represents the sun, the giver of life and protector.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Australian Aboriginal Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What are the colors of the Torres Strait Islander flag?",
    optionA: "Blue, green and black with a white star", optionB: "Red, yellow and black with a white star", optionC: "Green, black and blue with a white star", optionD: "Blue, white and green with a yellow star",
    correctAnswer: "C",
    explanation: "The Torres Strait Islander flag has green stripes at top and bottom, a black stripe in the middle, blue panels on left and right, a white five-pointed star in the centre, and a white dhari (headdress).",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Torres Strait Islander Flag", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What two animals appear on the Australian Coat of Arms?",
    optionA: "Koala and kookaburra", optionB: "Kangaroo and emu", optionC: "Wombat and platypus", optionD: "Dingo and wedge-tailed eagle",
    correctAnswer: "B",
    explanation: "The kangaroo and emu appear on the Australian Coat of Arms. They were chosen because neither can move backwards, symbolising a nation moving forward.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australian Coat of Arms", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the first line of Australia's national anthem?",
    optionA: "We are one, but we are many", optionB: "Advance Australia Fair", optionC: "Australians all let us rejoice", optionD: "In joyful strains then let us sing",
    correctAnswer: "C",
    explanation: "The first line of Advance Australia Fair is 'Australians all let us rejoice, for we are young and free'.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - National Anthem", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When was the Australian national anthem 'Advance Australia Fair' officially adopted?",
    optionA: "1901", optionB: "1974", optionC: "1984", optionD: "2001",
    correctAnswer: "C",
    explanation: "Advance Australia Fair was officially adopted as the national anthem in 1984, replacing 'God Save the Queen'.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - National Anthem", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is Australia's national gemstone?",
    optionA: "Diamond", optionB: "Sapphire", optionC: "Opal", optionD: "Emerald",
    correctAnswer: "C",
    explanation: "The opal is Australia's national gemstone. Australia produces around 95% of the world's opals.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - National symbols", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is Australia's national animal emblem?",
    optionA: "Koala", optionB: "Red kangaroo", optionC: "Platypus", optionD: "Wombat",
    correctAnswer: "B",
    explanation: "The red kangaroo is Australia's national animal emblem.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - National symbols", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is Australia's national bird emblem?",
    optionA: "Cockatoo", optionB: "Kookaburra", optionC: "Emu", optionD: "Lyrebird",
    correctAnswer: "C",
    explanation: "The emu is Australia's national bird emblem. It also appears on the Coat of Arms.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - National symbols", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What are the national colours of Australia?",
    optionA: "Blue and white", optionB: "Red, white and blue", optionC: "Green and gold", optionD: "Green, gold and blue",
    correctAnswer: "C",
    explanation: "Green and gold are Australia's national colours.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - National symbols", isValuesQuestion: false, isActive: true,
  },

  // ANZAC and military
  {
    categoryId: 1,
    question: "What does ANZAC stand for?",
    optionA: "Australia and New Zealand Army Corps", optionB: "Australian and New Zealand Allied Command", optionC: "Australia and New Zealand Armoured Corps", optionD: "Australasian and New Zealand Army Corps",
    correctAnswer: "A",
    explanation: "ANZAC stands for Australian and New Zealand Army Corps, the combined forces that served in World War I.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - ANZAC Day", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Where did the ANZACs first land in 1915?",
    optionA: "France", optionB: "Egypt", optionC: "Gallipoli, Turkey", optionD: "Papua New Guinea",
    correctAnswer: "C",
    explanation: "The ANZACs landed at Gallipoli, Turkey on 25 April 1915 during World War I.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - ANZAC Day", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What qualities does the ANZAC spirit represent?",
    optionA: "Military power and conquest", optionB: "Courage, endurance, initiative, discipline and mateship", optionC: "Obedience and loyalty to the Crown", optionD: "Sacrifice and surrender",
    correctAnswer: "B",
    explanation: "The ANZAC spirit represents the qualities of courage, endurance, initiative, discipline, and above all, mateship.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - ANZAC Day", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Who was Australia's wartime Prime Minister during World War II from 1941?",
    optionA: "Robert Menzies", optionB: "Ben Chifley", optionC: "John Curtin", optionD: "Arthur Fadden",
    correctAnswer: "C",
    explanation: "John Curtin served as Australia's Prime Minister from 1941 to 1945, leading the country through most of World War II.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 1 - World War II", isValuesQuestion: false, isActive: true,
  },

  // Immigration and multiculturalism
  {
    categoryId: 1,
    question: "What was the 'White Australia Policy'?",
    optionA: "A policy requiring buildings to be painted white", optionB: "A policy that restricted non-European immigration to Australia", optionC: "A policy giving free land to white settlers", optionD: "A policy requiring migrants to pass English tests",
    correctAnswer: "B",
    explanation: "The White Australia Policy was a set of immigration policies that effectively restricted non-European immigration to Australia. It was gradually dismantled from the 1940s and finally ended in 1973.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Immigration", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When was the White Australia Policy formally ended?",
    optionA: "1949", optionB: "1958", optionC: "1966", optionD: "1973",
    correctAnswer: "D",
    explanation: "The White Australia Policy was formally ended by the Whitlam Government in 1973 with the Racial Discrimination Act.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 1 - Immigration", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "Approximately how many countries have people migrated from to live in Australia?",
    optionA: "More than 50", optionB: "More than 100", optionC: "More than 200", optionD: "More than 300",
    correctAnswer: "C",
    explanation: "People have migrated to Australia from more than 200 countries, making it one of the world's most culturally diverse nations.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Multiculturalism", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What proportion of Australians were born overseas or have a parent born overseas?",
    optionA: "About one quarter", optionB: "About one third", optionC: "About one half", optionD: "About two thirds",
    correctAnswer: "C",
    explanation: "About half of all Australians were born overseas or have at least one parent born overseas.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 1 - Multiculturalism", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "After English, which is the most widely spoken language in Australia?",
    optionA: "Chinese (Mandarin)", optionB: "Italian", optionC: "Arabic", optionD: "Greek",
    correctAnswer: "A",
    explanation: "Mandarin is the most widely spoken language in Australia after English.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 1 - Languages", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is Australia's population approximately?",
    optionA: "Around 15 million", optionB: "Around 20 million", optionC: "Around 26 million", optionD: "Around 35 million",
    correctAnswer: "C",
    explanation: "Australia's population is approximately 26 million people.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australia today", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "When is Reconciliation Week held in Australia?",
    optionA: "26 January to 1 February", optionB: "27 May to 3 June", optionC: "25 April to 1 May", optionD: "1 July to 7 July",
    correctAnswer: "B",
    explanation: "National Reconciliation Week is held from 27 May to 3 June each year, marking the anniversaries of the 1967 referendum and the High Court's Mabo decision.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 1 - Indigenous peoples", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 1,
    question: "What is the significance of 26 January (Australia Day)?",
    optionA: "The day Federation was proclaimed", optionB: "The day the First Fleet arrived at Port Jackson in 1788", optionC: "The day the Constitution was signed", optionD: "The day the gold rush began",
    correctAnswer: "B",
    explanation: "Australia Day on 26 January marks the anniversary of the arrival of the First Fleet at Port Jackson in 1788 and the proclamation of British sovereignty.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 1 - Australia Day", isValuesQuestion: false, isActive: true,
  },

  // ── PART 2: DEMOCRATIC BELIEFS, RIGHTS AND LIBERTIES ─────────────────────

  {
    categoryId: 2,
    question: "Which document established Australia's system of government?",
    optionA: "The Bill of Rights", optionB: "The Magna Carta", optionC: "The Commonwealth of Australia Constitution Act 1900", optionD: "The Declaration of Independence",
    correctAnswer: "C",
    explanation: "The Commonwealth of Australia Constitution Act 1900 is the document that established Australia's system of government when it was enacted by the British Parliament.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Australian Constitution", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What is the Australian Human Rights Commission?",
    optionA: "A court that sentences people for human rights abuses", optionB: "An independent government body that investigates discrimination and human rights complaints", optionC: "A political party focused on human rights", optionD: "A private organisation that lobbies parliament",
    correctAnswer: "B",
    explanation: "The Australian Human Rights Commission is an independent statutory body that investigates and resolves complaints about discrimination and human rights breaches.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Rights and freedoms", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What does the Racial Discrimination Act protect against?",
    optionA: "Discrimination based on age only", optionB: "Racial discrimination in employment, housing, and services", optionC: "Religious discrimination only", optionD: "Discrimination in sport",
    correctAnswer: "B",
    explanation: "The Racial Discrimination Act 1975 makes it unlawful to discriminate against someone because of their race, colour, national or ethnic origin in areas including employment, accommodation, and provision of services.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Anti-discrimination laws", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What does the Sex Discrimination Act protect?",
    optionA: "People from any form of workplace discrimination", optionB: "People from discrimination on the basis of sex, gender identity, or sexual orientation", optionC: "Only women from discrimination", optionD: "Children from discrimination",
    correctAnswer: "B",
    explanation: "The Sex Discrimination Act 1984 protects people from discrimination based on sex, gender identity, sexual orientation, and related attributes.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Anti-discrimination laws", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What is the Fair Work Commission in Australia?",
    optionA: "A court that deals with criminal matters", optionB: "Australia's national workplace relations tribunal", optionC: "A government department that employs workers", optionD: "An organisation that sets tax rates",
    correctAnswer: "B",
    explanation: "The Fair Work Commission is Australia's national workplace relations tribunal that deals with matters including minimum wages, unfair dismissal, and enterprise agreements.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Workers' rights", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What is Australia's minimum wage?",
    optionA: "Set by individual employers", optionB: "Set by the Fair Work Commission each year", optionC: "Set by state governments only", optionD: "There is no minimum wage in Australia",
    correctAnswer: "B",
    explanation: "The Fair Work Commission sets Australia's national minimum wage, which is reviewed annually.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Workers' rights", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "Do workers in Australia have the right to safe working conditions?",
    optionA: "Only in certain industries", optionB: "Only full-time workers", optionC: "Yes, all workers have the right to a safe workplace", optionD: "Only when their employer agrees",
    correctAnswer: "C",
    explanation: "All workers in Australia have the legal right to a safe and healthy workplace under Work Health and Safety laws.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Workers' rights", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What is the principle of 'innocent until proven guilty'?",
    optionA: "Everyone is assumed to be guilty until they prove their innocence", optionB: "People accused of crimes are assumed innocent until proven guilty by a court", optionC: "Police decide who is guilty before a trial", optionD: "Only citizens have this right",
    correctAnswer: "B",
    explanation: "In Australia, everyone accused of a crime is presumed innocent until proven guilty by a court. This is a fundamental principle of the Australian legal system.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Legal rights", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "Can police arrest someone in Australia without a reason?",
    optionA: "Yes, police can arrest anyone at any time", optionB: "No, police must have reasonable grounds to arrest someone", optionC: "Only if the person looks suspicious", optionD: "Yes, but only in emergencies",
    correctAnswer: "B",
    explanation: "Police must have reasonable grounds (such as suspicion of a crime) to arrest someone. Arbitrary arrest is not permitted under Australian law.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Legal rights", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What is the right to freedom of movement in Australia?",
    optionA: "Only citizens can move between states", optionB: "Australians can travel freely within Australia and leave and return", optionC: "Movement is controlled by the government", optionD: "Only permanent residents have this right",
    correctAnswer: "B",
    explanation: "Australians have the freedom to move and live anywhere within Australia, as well as to leave and return to the country.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Rights and freedoms", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What does freedom of the press mean in Australia?",
    optionA: "Newspapers are free to buy", optionB: "The media can report news and comment on government without government censorship", optionC: "The government controls what newspapers print", optionD: "Only government-owned media can report news",
    correctAnswer: "B",
    explanation: "Freedom of the press means that the media can report on events and express opinions about government and other matters without censorship.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Rights and freedoms", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "Can Australians criticise the government?",
    optionA: "No, criticising the government is illegal", optionB: "Yes, but only in writing", optionC: "Yes, freedom of speech includes the right to criticise the government", optionD: "Only if you are a citizen",
    correctAnswer: "C",
    explanation: "Freedom of speech in Australia includes the right to criticise the government and public officials. This is an important part of a democracy.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Freedom of speech", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What are civil liberties in Australia?",
    optionA: "Laws about civil (not criminal) disputes", optionB: "The basic rights and freedoms guaranteed to citizens", optionC: "Rules about behaviour in public places", optionD: "Rights only available to born citizens",
    correctAnswer: "B",
    explanation: "Civil liberties are the basic rights and freedoms that protect individuals from the power of government, such as freedom of speech, religion, and assembly.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Rights and freedoms", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "Is it legal to discriminate against someone in Australia because of their religion?",
    optionA: "Yes, in private businesses", optionB: "No, religious discrimination is unlawful", optionC: "Only if it is a small business", optionD: "It depends on the state",
    correctAnswer: "B",
    explanation: "Religious discrimination is unlawful in Australia. People cannot be discriminated against because of their religion in areas such as employment and services.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 2 - Anti-discrimination", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 2,
    question: "What does separation of church and state mean in Australia?",
    optionA: "Churches must be physically separated from government buildings", optionB: "The government is not controlled by or affiliated with any religion", optionC: "Religious groups cannot vote", optionD: "Church leaders cannot hold government positions",
    correctAnswer: "B",
    explanation: "The separation of church and state means Australia is a secular country — the government is not governed by or affiliated with any religion. The Constitution prohibits the government from establishing a religion.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 2 - Separation of church and state", isValuesQuestion: false, isActive: true,
  },

  // ── PART 3: GOVERNMENT AND THE LAW ────────────────────────────────────────

  {
    categoryId: 3,
    question: "What are the three levels of government in Australia?",
    optionA: "Federal, state/territory, and local", optionB: "National, regional, and municipal", optionC: "Parliament, courts, and police", optionD: "Prime Minister, Premier, and Mayor",
    correctAnswer: "A",
    explanation: "Australia has three levels of government: federal (national), state/territory, and local government.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Three levels of government", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What are the responsibilities of the federal government?",
    optionA: "Roads, rubbish collection, and parks", optionB: "Hospitals, schools, and police", optionC: "Defence, foreign affairs, immigration, and social security", optionD: "Library services and local planning",
    correctAnswer: "C",
    explanation: "The federal government is responsible for national matters such as defence, foreign affairs, immigration, trade, and social security.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Federal government responsibilities", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What are the responsibilities of state and territory governments?",
    optionA: "Defence and foreign policy", optionB: "Hospitals, schools, roads, and police", optionC: "Rubbish collection and local parks", optionD: "Immigration and social security",
    correctAnswer: "B",
    explanation: "State and territory governments are responsible for hospitals, schools, roads, public transport, police, and emergency services.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - State government responsibilities", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What are the responsibilities of local government?",
    optionA: "Defence and foreign affairs", optionB: "Hospitals and schools", optionC: "Rubbish collection, local roads, parks, and libraries", optionD: "Immigration and customs",
    correctAnswer: "C",
    explanation: "Local governments (councils) are responsible for local services such as rubbish collection, local roads, parks, libraries, and local planning.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Local government responsibilities", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the role of the Prime Minister?",
    optionA: "To represent Australia at the United Nations", optionB: "To be the leader of the federal government and head of Cabinet", optionC: "To sign all laws passed by Parliament", optionD: "To represent the King in Australia",
    correctAnswer: "B",
    explanation: "The Prime Minister is the leader of the federal government, heads the Cabinet, and is responsible for the government's overall direction and policy.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Prime Minister", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "How is the Prime Minister chosen in Australia?",
    optionA: "Elected directly by the people in a national vote", optionB: "Appointed by the King", optionC: "The leader of the party with majority support in the House of Representatives", optionD: "Elected by the Senate",
    correctAnswer: "C",
    explanation: "The Prime Minister is the leader of the political party (or coalition) that has the support of the majority of members in the House of Representatives.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Prime Minister", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the Cabinet?",
    optionA: "The filing system used in Parliament House", optionB: "The senior group of ministers who make key government decisions", optionC: "The opposition party's leadership group", optionD: "The public service that runs government departments",
    correctAnswer: "B",
    explanation: "Cabinet is the senior group of ministers, led by the Prime Minister, who make the key decisions of the federal government.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Cabinet", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the role of the Senate in Australia?",
    optionA: "To elect the Prime Minister", optionB: "To review, amend, and pass legislation proposed by the House of Representatives", optionC: "To manage the federal budget only", optionD: "To appoint judges to the High Court",
    correctAnswer: "B",
    explanation: "The Senate is the upper house of federal parliament. It reviews, amends, or passes legislation from the House of Representatives and acts as a 'house of review'.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Senate", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "How many senators does each state have in the Australian Senate?",
    optionA: "8", optionB: "10", optionC: "12", optionD: "6",
    correctAnswer: "C",
    explanation: "Each of the six states elects 12 senators to the Australian Senate, giving 72 state senators in total.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Senate", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "How are laws made in Australia?",
    optionA: "The Prime Minister writes them and they become law immediately", optionB: "Bills are debated and passed by both houses of parliament, then given Royal Assent", optionC: "Laws are made by the High Court", optionD: "The Governor-General writes all laws",
    correctAnswer: "B",
    explanation: "Laws start as bills, which must be debated and passed by both the House of Representatives and the Senate, then signed (Royal Assent) by the Governor-General.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - How laws are made", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is a by-election?",
    optionA: "An election held at the same time as a general election", optionB: "An election held to fill a vacancy in parliament between general elections", optionC: "An election for local council", optionD: "An election to choose a party leader",
    correctAnswer: "B",
    explanation: "A by-election is held when a member of parliament vacates their seat between general elections, requiring a vote to fill that specific seat.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Elections", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is preferential voting?",
    optionA: "A system where only preferred (registered) voters can vote", optionB: "A system where voters rank candidates in order of preference", optionC: "A system where you vote for a party not a person", optionD: "A system where wealthy people get more votes",
    correctAnswer: "B",
    explanation: "Preferential voting requires voters to number candidates in order of preference. If no candidate wins a majority of first preferences, preferences are distributed until one candidate wins a majority.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Voting system", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the Australian Electoral Commission?",
    optionA: "A government department that manages elections and ensures they are conducted fairly", optionB: "A political party that monitors elections", optionC: "A court that resolves election disputes", optionD: "A private company that counts votes",
    correctAnswer: "A",
    explanation: "The Australian Electoral Commission (AEC) is an independent statutory authority that manages federal elections and referendums.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Elections", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the term 'hung parliament' referring to?",
    optionA: "A parliament with too many members", optionB: "A parliament where no single party or coalition has a clear majority", optionC: "A parliament that has been dissolved by the Governor-General", optionD: "A parliament that meets too infrequently",
    correctAnswer: "B",
    explanation: "A hung parliament occurs when no single party or coalition wins enough seats to form a majority government in the lower house.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - Government formation", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the High Court's main role?",
    optionA: "To try criminal cases only", optionB: "To interpret the Constitution and hear appeals from lower courts", optionC: "To advise the Prime Minister on legal matters", optionD: "To pass laws when parliament cannot agree",
    correctAnswer: "B",
    explanation: "The High Court of Australia is the highest court. It interprets the Constitution, hears appeals from lower courts, and is the final court of appeal.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Courts system", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "How many justices sit on the High Court of Australia?",
    optionA: "Five", optionB: "Seven", optionC: "Nine", optionD: "Twelve",
    correctAnswer: "B",
    explanation: "The High Court of Australia consists of seven justices — one Chief Justice and six other justices.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - High Court", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "Who appoints justices to the High Court of Australia?",
    optionA: "The Prime Minister alone", optionB: "The Governor-General on the advice of the federal government", optionC: "Parliament by a vote", optionD: "The Chief Justice of Australia",
    correctAnswer: "B",
    explanation: "High Court justices are appointed by the Governor-General on the advice of the federal government (Cabinet).",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - High Court", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the separation of powers in Australia?",
    optionA: "The division of government into federal and state levels", optionB: "The division of government powers between the legislature, executive, and judiciary", optionC: "The separation of church and state", optionD: "The separation of political parties in parliament",
    correctAnswer: "B",
    explanation: "The separation of powers divides government authority between the legislature (parliament makes laws), the executive (government implements laws), and the judiciary (courts interpret laws).",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Separation of powers", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the Australian federal parliament called?",
    optionA: "The National Assembly", optionB: "The Parliament of Australia", optionC: "The Federal Congress", optionD: "The Commonwealth Chamber",
    correctAnswer: "B",
    explanation: "The federal parliament is officially called the Parliament of Australia and consists of the Senate, the House of Representatives, and the King (represented by the Governor-General).",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Parliament", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the role of the Governor of a state?",
    optionA: "The elected head of the state government", optionB: "The representative of the King in each state", optionC: "The head of the state police force", optionD: "The chief judge of the state",
    correctAnswer: "B",
    explanation: "The Governor is the representative of the King in each state and performs similar functions at the state level to the Governor-General at the federal level.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - State government", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the title of the head of a state government?",
    optionA: "Chief Minister", optionB: "Governor", optionC: "Premier", optionD: "Minister",
    correctAnswer: "C",
    explanation: "The head of a state government is called the Premier. The head of a territory government is called the Chief Minister.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - State government", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the title of the head of a territory government?",
    optionA: "Premier", optionB: "Governor", optionC: "Chief Minister", optionD: "Lord Mayor",
    correctAnswer: "C",
    explanation: "The head of a territory government (like the ACT or NT) is called the Chief Minister.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Territory government", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "How can the Australian Constitution be changed?",
    optionA: "By a vote of parliament alone", optionB: "By a referendum — majority of voters nationally AND majority in at least 4 states", optionC: "By the Prime Minister issuing a decree", optionD: "By the High Court making a ruling",
    correctAnswer: "B",
    explanation: "The Constitution can only be changed by a referendum. A proposed change must be approved by a national majority of voters AND a majority of voters in at least four of the six states.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Referendum", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is a double dissolution of parliament?",
    optionA: "When both houses of parliament are closed for holidays", optionB: "When the Governor-General dissolves both the Senate and the House of Representatives, triggering an election", optionC: "When a state government and federal government disagree", optionD: "When parliament splits into two separate chambers",
    correctAnswer: "B",
    explanation: "A double dissolution occurs when the Governor-General dissolves both the Senate and the entire House of Representatives, triggering a full federal election for all seats.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - Parliament", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "Who is responsible for counting votes in federal elections?",
    optionA: "The Prime Minister's Department", optionB: "State governments", optionC: "The Australian Electoral Commission", optionD: "The High Court",
    correctAnswer: "C",
    explanation: "The Australian Electoral Commission (AEC) is responsible for conducting and counting votes in federal elections.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Elections", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "Which court deals with most federal criminal and civil matters below the High Court?",
    optionA: "The Supreme Court", optionB: "The Federal Court of Australia", optionC: "The District Court", optionD: "The Magistrates Court",
    correctAnswer: "B",
    explanation: "The Federal Court of Australia deals with most federal criminal and civil matters, sitting below the High Court in the court hierarchy.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - Court system", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "Can state laws override federal laws in Australia?",
    optionA: "Yes, states have supreme power", optionB: "No, federal law overrides state law when they conflict", optionC: "It depends on the subject matter", optionD: "Only in areas specifically reserved for states",
    correctAnswer: "B",
    explanation: "Under Section 109 of the Constitution, when a valid federal law is inconsistent with a state law, the federal law prevails and the state law is invalid to the extent of the inconsistency.",
    difficulty: "hard", source: "official_guide", sourceReference: "Part 3 - Federal and state powers", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the name of the building where the federal parliament meets?",
    optionA: "Government House", optionB: "Parliament House", optionC: "The Federal Chamber", optionD: "Kirribilli House",
    correctAnswer: "B",
    explanation: "The federal parliament meets at Parliament House in Canberra, the current building having opened in 1988.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Parliament", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is the role of the opposition in Australia's parliament?",
    optionA: "To obstruct all government legislation", optionB: "To provide an alternative government and hold the government accountable", optionC: "To assist the government in passing laws", optionD: "To manage the budget",
    correctAnswer: "B",
    explanation: "The opposition's role is to scrutinize government legislation and policy, hold the government accountable, and present itself as an alternative government.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Opposition", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "Who is the leader of the federal opposition called?",
    optionA: "Deputy Prime Minister", optionB: "Shadow Prime Minister", optionC: "Leader of the Opposition", optionD: "Senate President",
    correctAnswer: "C",
    explanation: "The leader of the largest non-government party in the House of Representatives is called the Leader of the Opposition.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Opposition", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What does 'responsible government' mean in Australia?",
    optionA: "The government must manage money responsibly", optionB: "The government is responsible to parliament and can be removed by it", optionC: "The government must respond to all citizen complaints", optionD: "Ministers are personally responsible for departmental errors",
    correctAnswer: "B",
    explanation: "Responsible government means the government must maintain the confidence of the lower house (House of Representatives) and can be removed if it loses that confidence.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Responsible government", isValuesQuestion: false, isActive: true,
  },

  // Citizenship responsibilities
  {
    categoryId: 3,
    question: "What are the responsibilities of Australian citizens?",
    optionA: "Only paying taxes", optionB: "Voting, obeying the law, jury service, and defending Australia if required", optionC: "Attending citizenship ceremonies each year", optionD: "Donating to charities",
    correctAnswer: "B",
    explanation: "Australian citizens have responsibilities including voting in elections, obeying the law, serving on juries when called, and defending Australia if required.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 3 - Citizenship responsibilities", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 3,
    question: "What is jury duty in Australia?",
    optionA: "A voluntary service where citizens can help in courts", optionB: "A responsibility where citizens may be called to serve on a jury to decide criminal or civil cases", optionC: "A tax paid to support the court system", optionD: "A service only required of lawyers",
    correctAnswer: "B",
    explanation: "Jury duty is a civic responsibility where eligible citizens may be called to serve on a jury to decide the facts in criminal or civil cases.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 3 - Jury service", isValuesQuestion: false, isActive: true,
  },

  // ── PART 4: AUSTRALIAN VALUES ─────────────────────────────────────────────

  {
    categoryId: 4,
    question: "What is the Australian value of 'mateship'?",
    optionA: "The practice of making friends online", optionB: "A bond of friendship and equality, supporting those in need", optionC: "Loyalty to the British Crown", optionD: "A sporting tradition of playing fair",
    correctAnswer: "B",
    explanation: "Mateship is an Australian value that emphasises friendship, loyalty, and supporting others in times of need, especially between equals.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "What does 'a fair go' mean in Australian culture?",
    optionA: "Everyone should play sport equally", optionB: "Equal opportunity for all people regardless of background", optionC: "Free admission to government services", optionD: "A legal right to appeal court decisions",
    correctAnswer: "B",
    explanation: "'A fair go' means that everyone deserves equal opportunity to succeed, regardless of their background, religion, or where they came from.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Is it acceptable in Australia to discriminate against someone because of their race?",
    optionA: "Yes, in private settings", optionB: "Yes, in employment only", optionC: "No, racial discrimination is against Australian values and the law", optionD: "Only if done respectfully",
    correctAnswer: "C",
    explanation: "Racial discrimination is against Australian values and is also illegal under the Racial Discrimination Act 1975. All people deserve to be treated with equal respect and dignity.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Equality", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Should Australians respect people from different cultural backgrounds?",
    optionA: "Only if those cultures are similar to Australian culture", optionB: "No, Australian culture should be dominant", optionC: "Yes, mutual respect for all people is a core Australian value", optionD: "Only if they have been in Australia for a long time",
    correctAnswer: "C",
    explanation: "Mutual respect for people of all cultural backgrounds is a core Australian value. Australia is a multicultural country and values the contributions of people from all backgrounds.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Multiculturalism", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Is it acceptable to force a family member to marry someone against their will in Australia?",
    optionA: "Yes, if it is a cultural tradition", optionB: "Yes, if parents approve", optionC: "No, forced marriage is illegal and against Australian values", optionD: "Only if the person is under 18",
    correctAnswer: "C",
    explanation: "Forced marriage is illegal in Australia and completely contrary to Australian values. Marriage must be entered into freely and voluntarily by both parties.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Do both men and women have equal rights in Australian workplaces?",
    optionA: "No, men traditionally lead in the workplace", optionB: "Yes, Australian law and values require equal opportunity in employment", optionC: "Only in government jobs", optionD: "Only if both have the same qualifications",
    correctAnswer: "B",
    explanation: "Australian law and values require equal opportunity in the workplace for both men and women. The Sex Discrimination Act protects people from workplace discrimination based on gender.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Gender equality", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Should people in Australia resolve disputes using violence?",
    optionA: "Yes, if words don't work", optionB: "Yes, in self-defence situations", optionC: "No, disputes should be resolved through discussion, mediation, or the legal system", optionD: "Only if both parties agree",
    correctAnswer: "C",
    explanation: "Using violence to resolve disputes is unacceptable in Australia. Disputes should be resolved through peaceful means such as discussion, mediation, or the legal system.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Is it acceptable to prevent your spouse from leaving the home in Australia?",
    optionA: "Yes, if it is for safety reasons", optionB: "Yes, within a marriage this is acceptable", optionC: "No, restricting a person's freedom of movement is illegal", optionD: "Only if the spouse agrees",
    correctAnswer: "C",
    explanation: "Restricting a person's freedom of movement is illegal in Australia and contrary to Australian values. Every individual has the right to freedom of movement.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Should girls have the same access to education as boys in Australia?",
    optionA: "No, different education paths are appropriate", optionB: "Only at university level", optionC: "Yes, equal access to education is a fundamental Australian value", optionD: "Only in government schools",
    correctAnswer: "C",
    explanation: "Equal access to education for all children, regardless of gender, is a fundamental Australian value. Girls and boys have equal rights to education.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Equality", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Is it acceptable to use religion to justify harming others in Australia?",
    optionA: "Yes, if the religion requires it", optionB: "Yes, in extreme circumstances", optionC: "No, religious beliefs cannot justify harming others or breaking Australian law", optionD: "Only if it is a well-established religion",
    correctAnswer: "C",
    explanation: "No religious belief justifies harming others. Australian law applies to everyone, and religious beliefs do not exempt anyone from following the law.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "What is the Australian value of egalitarianism?",
    optionA: "A belief that Australia should have a royal family", optionB: "A belief that all people are equal and deserving of equal treatment", optionC: "A belief that wealth should be equally distributed", optionD: "A belief that all religions are equal",
    correctAnswer: "B",
    explanation: "Egalitarianism is the belief that all people are equal and deserving of equal rights and opportunities, regardless of their background.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Should Australians show compassion for people who are in need?",
    optionA: "Only for Australian citizens", optionB: "No, people should look after themselves", optionC: "Yes, compassion and helping others is an important Australian value", optionD: "Only through official charity organisations",
    correctAnswer: "C",
    explanation: "Showing compassion and helping people in need is an important Australian value, reflected in Australia's strong tradition of community service and volunteering.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Australian values", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "What must a new citizen pledge at the citizenship ceremony?",
    optionA: "Loyalty to their home country", optionB: "Loyalty to Australia, its people, its values, and to obey its laws", optionC: "To vote in every election", optionD: "To speak only English in public",
    correctAnswer: "B",
    explanation: "At the citizenship ceremony, new citizens make a pledge to be loyal to Australia and its people, to respect its democratic values, and to uphold its laws.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Citizenship ceremony", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 4,
    question: "What does it mean to be an Australian citizen?",
    optionA: "Having a passport and living in Australia", optionB: "Full membership of the Australian community with rights and responsibilities", optionC: "Having the right to apply for welfare", optionD: "Owning property in Australia",
    correctAnswer: "B",
    explanation: "Australian citizenship means full membership of the Australian community. Citizens share rights such as voting and a passport, and responsibilities such as obeying the law and jury service.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Citizenship", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 4,
    question: "Is it acceptable in Australia to harass or bully others because of their ethnicity?",
    optionA: "Yes, if it is only verbal", optionB: "Yes, in private settings", optionC: "No, harassment and bullying based on ethnicity are illegal and against Australian values", optionD: "Only if it causes physical harm",
    correctAnswer: "C",
    explanation: "Harassing or bullying people because of their ethnicity is both against Australian values and illegal. All people have the right to be treated with dignity and respect.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Equality and respect", isValuesQuestion: true, isActive: true,
  },
  {
    categoryId: 4,
    question: "Can people in Australia practice their own culture and traditions?",
    optionA: "No, everyone must adopt Australian traditions", optionB: "Only if born in Australia", optionC: "Yes, as long as they respect Australian laws and the rights of others", optionD: "Only in private homes",
    correctAnswer: "C",
    explanation: "Australians are free to maintain their cultural traditions and practices as long as they respect Australian laws and do not infringe on the rights of others.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Multiculturalism", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 4,
    question: "What should you do if someone tries to bribe a public official in Australia?",
    optionA: "Accept it as it is common practice", optionB: "Report it, as bribery is a criminal offence in Australia", optionC: "Ignore it", optionD: "Pay it if it makes things easier",
    correctAnswer: "B",
    explanation: "Bribery of public officials is a serious criminal offence in Australia. The rule of law means everyone, including officials, must obey the law.",
    difficulty: "medium", source: "official_guide", sourceReference: "Part 4 - Rule of law", isValuesQuestion: false, isActive: true,
  },
  {
    categoryId: 4,
    question: "What does the rule of law mean for government officials in Australia?",
    optionA: "Government officials are above the law", optionB: "Laws only apply to ordinary citizens", optionC: "Government officials must also obey the law like everyone else", optionD: "Officials can make exceptions to laws",
    correctAnswer: "C",
    explanation: "The rule of law means that the law applies equally to everyone — including government officials. No one is above the law in Australia.",
    difficulty: "easy", source: "official_guide", sourceReference: "Part 4 - Rule of law", isValuesQuestion: false, isActive: true,
  },
];

// Merge extra questions into the main export
officialQuestions.push(...extraQuestions);
