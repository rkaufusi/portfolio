type projectText = {
    id: number,
    text: string
}
const cryptoHumanNetworks: projectText[] = [
    {id: 1, text: "Developed a crypto search engine that returns various crypto info including number of reddit subscribers and google trends."},
    {id: 2, text: "Implemented CoinGecko API & Reddit API to obtain crypto data."},
    {id: 3, text: "Dynamically view google trends based on the currency name."},
    {id: 4, text: "Built with React.js, ES6 Javascript, and designed with Material UI."}
]

const kanBan: projectText[] = [
    {id: 1, text: "Developed a task management KanBan to track the status of tasks."},
    {id: 2, text: "Built the full stack app using Typescript."},
    {id: 3, text: "Implemented React Beautiful Drag n Drop framework."},
    {id: 4, text: "Integrated AXIOS for CRUD functionality with a PostgreSQL backend."},
    {id: 5, text: "Used React.js, Node.js, Express.js and designed with Material UI."}
]

const sortingVisualizer: projectText[] = [
    {id: 1, text: "Developed a sorting algorithm visualizer to enable a user to better understand common sorting algorithms."},
    {id: 2, text: "Built using ReactJS, ES6 Javascript, and designed with Material UI."},
    {id: 3, text: "User can choose individual algorithms to visualize."},
    {id: 4, text: "Sorting algorithms include Quick sort, Insertion Sort, Bubble Sort, and Selection Sort."}
]
const certifications: projectText[] = [
    {id: 1, text: "Oracle Database SQL Certified Associate"},
    {id: 2, text: "CodeCademy Computer Science Path"},
    {id: 3, text: "ITIL Foundation"},
    {id: 4, text: "CompTIA Project+"},
    {id: 5, text: "CIW User Interface Designer"},
    {id: 6, text: "CIW Site Development Associate"},
    {id: 7, text: "CIW Advanced HTML5 and CSS3 Specialist"}
]
const skills: projectText[] = [
    {id: 1, text: "Javascript"},
    {id: 2, text: "React.js"},
    {id: 3, text: "TypeScript"},
    {id: 4, text: "SQL"},
    {id: 5, text: "Node.js"}
]
export default cryptoHumanNetworks;
export {kanBan, sortingVisualizer, certifications, skills};
