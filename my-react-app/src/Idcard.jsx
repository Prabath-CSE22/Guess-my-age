import profilepic from "./assets/profile.jpeg"

function Idcard() {

    let count = 0;
    const number = document.getElementById("age");
    const topic = document.getElementById("topic");
    const guessAge = (age) =>  {if(age!=23){
                                    console.log(`You failed ${++count} times you stupid 😒😂`);
                                    topic.textContent = `You failed ${count} times you stupid 😒😂`;
                                }else{
                                    console.log(`Great 👌 you geussed in ${count} times`);
                                    topic.textContent = `Great 👌 you geussed in ${count} times`;
                                                                    
                                }
                            }
    return (
       <>
            <div id="card">
                <h1 id="topic">Guess my age</h1>
                <img id="profilepic" src={profilepic}/><br />
                <input type="number" id="age" placeholder="Enter your guess"/><br />
                <button type="submit" id="submit" onClick={()=>guessAge(number.value)}>Guess</button>
            </div>
       </>
    );
}

export default Idcard;
