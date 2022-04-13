type projectText = {
    id: number,
    text: string
}
const cryptoHumanNetworks: projectText[] = [
    {id: 1, text: "Used CoinGecko API to fetch crypto data using AXIOS"},
    {id: 2, text: "Reddit API used to obtain number of crypto sub reddit subscribers"},
    {id: 3, text: "Dynamically view google trends based on specific crypto"},
    {id: 4, text: "Built with React.js, ES6 Javascript, Material UI"}
]

const kanBan: projectText[] = [
    {id: 1, text: "Created a task management KanBan to track the status of tasks"},
    {id: 2, text: "Build the full stack app using Typescript"},
    {id: 3, text: "Used React Beautiful Dnd framework"},
    {id: 4, text: "AXIOS to retrieve user data from PostGreSQL backend"},
    {id: 5, text: "Used React.js, Node.js, Express and Material UI"}
]

const sortingVisualizer: projectText[] = [
    {id: 1, text: "Built a sorting algorithm visualizer to enable a user to better understand common sorting algorithms"},
    {id: 2, text: "Built using React, ES6 Javascript, and Material UI"},
    {id: 3, text: "User can choose individual algorithms to visualize"},
    {id: 4, text: "Sorting algorithms include Quick sort, Insertion Sort, Bubble Sort, and Selection Sort"}
]
export default cryptoHumanNetworks