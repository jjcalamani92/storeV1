import { FC } from "react";

import { Children } from "../../interfaces/site";

interface Props {
  article: Children
}
const code1 = `{ $push: { <field1>: { <modifier1>: <value1>, ... }, ... } }`
const code2 = `db.contributor.find().pretty()
{
  _id: ObjectId("5kjhoiu3iou544mm456"),
  name: "Roshit",
  branch: "CSE",
  joiningYear: 2018,
  language: [
    "C#",
    "Python",
    "Java"
  ],
  personal: {
    age: 24,
    semesterMarks: [
      70,
      73.3,
      76.5,
      78,6
    ]  
  }
},
{
  "_id": ObjectId("5kjhoiu3iou544d564"),
  "name": "Jesus",
  "branch": "CSE",
  "joiningYear": 1992,
  "language": [
    "C#",
    "Typescript",
    "Java"
  ],
  "personal": {
    "age": 30,
    'semesterMarks': [
      60,
      63.3,
      66.5,
      68,6
    ]  
  }
},`
const code3 = `db.contributor.update(
  { name: "Rohit" }, 
  { $push: 
    { language: "C++" }
  }
  )`
const code4 = `db.contributor.find(
  { name: "Jesus" },
).pretty()
{
  "_id": ObjectId("5kjhoiu3iou544d564"),
  "name": "Jesus",
  "branch": "CSE",
  "joiningYear": 1992,
  "language": [
    "C#",
    "Typescript",
    "Java",
    "C++",
  ],
  "personal": {
    "age": 30,
    'semesterMarks': [ 60, 63.3,  66.5, 68,6 ]  
  }
},`
const code5 = `db.contributor.update(
  { name: "Sumit" }, 
  { $push: 
    { language: {
      $each: ["C++", "Ruby", "Go"] }
    }
  }
  )`
const code6 = `db.contributor.find(
    { name: "Jesus" },
  ).pretty()
  {
    "_id": ObjectId("5kjhoiu3iou544d564"),
    "name": "Jesus",
    "branch": "CSE",
    "joiningYear": 1992,
    "language": [
      "C#",
      "Typescript",
      "Java",
      "C",
      "Ruby",
      "Go",
    ],
    "personal": {
      "age": 30,
      'semesterMarks': [ 60, 63.3, 66.5, 68,6 ]  
    }
  },
  `
export const Article: FC<Props> = ({ article }) => {
  // console.log(article);
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img src={article.imageSrc} className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          {article.name}

        </h1>
        <div className="flex mb-6 space-x-2">
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">MongoDB</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">NodeJS</a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/a-/AFdZucpRRCMJtfC078O3JH5ra7gWtmkYx-d3T6XEsKeg=s288-p-rw-no" alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Jesus Calamani</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        `
        MongoDB is an open-source document-oriented database that is designed to store a large scale  of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the mongoDB are not in the form of tables.
        `
        `
        The mongoDB database is developed and managed by MongoDB.Inc under SSPL(Server Side Public License) and initially released in february 2009. It also providers official driver support for all the popular languages like C, C++, C# and .Net, Go, Java, Nodejs, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. So, that you can create an application using any of these languages.`
        <br />
        <p>{`Nowadays there are so many companies that use MongoDB like facebook, nokia, ebay, adobe, google, etc. to store their amount of data.`}</p>
        <br />
        {/* <CopyBlock
          text={code1}
          language={"html"}
          showLineNumbers
          theme={monokai}
          // highlight="-"
          wrapLines={true}
          codeBlock
        /> */}


        <br />
        <p>
          Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to build whole web applications without the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
      </div>
    </article>
  )
}
