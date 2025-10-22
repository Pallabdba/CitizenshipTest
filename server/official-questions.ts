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
  }
];
