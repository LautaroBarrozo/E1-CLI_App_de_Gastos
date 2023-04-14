import { newPrompt } from './userPrompts.js'
import { get, save } from './functions.js'

const main = async () => {
    const newData = await newPrompt()

    console.log("el nuevo gasto de:", newData, "se ha guardado.");

    const currentExpenses = await get('expenses')
    currentExpenses.push(newData)
    await save('expenses', currentExpenses)

    const totalExpenses = await get('expenses')
    console.log('tus gastos totales son:', totalExpenses);

}

main()