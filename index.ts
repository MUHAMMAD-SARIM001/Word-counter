import inquirer from "inquirer"
const answers :{
    sentence: string
} = await inquirer.prompt([
    {
    name:"sentence",
    type:"input",
    message:"enter the sentence to count words"
    }
])