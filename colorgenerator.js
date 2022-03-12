// Create a class function with the name ColorGenerator
const ColorGenerator = () => {

  // Declare randomNum and give it an initial value of #
  let randomNum = '#';

  // Loop i to iterate six times
  for (let i = 0; i < 6; ++i) {

    // Generate random numbers between 0 and 9
    let ran = Math.floor(Math.random() * 10)

    // For each of the generated number, add the number to randomNum
    randomNum += ran
  }

  // Return randomNum after six integers between 0 and 9 have been added
  return <h1>{randomNum}</h1>
}

export default ColorGenerator