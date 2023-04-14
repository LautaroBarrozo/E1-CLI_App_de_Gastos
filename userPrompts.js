import inquirer from 'inquirer'

export const newPrompt = async () => {
    return await inquirer.prompt(prompts);
};

const prompts = [
    {
        type: 'input',
        name: 'gasto',
        message: 'ingresa en que realizaste el gasto:'
    },

    {
        type: 'input',
        name: 'precio',
        message: 'ingresa el precio del gasto:'
    }

]