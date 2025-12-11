function print(event){
  console.log("hello");
  console.log(event);
}

export default function Button(){
  return(
    <div>
      <button onClick={print}> Click me </button>
    </div>
  );
}