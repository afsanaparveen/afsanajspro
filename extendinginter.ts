//Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
// Try creating a new interface and extending it like below
interface Triangle {
    height: number,
    width: number
  }
  
  interface ColoredTriangle extends Triangle {
    color: string
  }
  
  const coloredTriangle: ColoredTriangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredTriangle);