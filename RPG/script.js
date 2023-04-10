import characterData from './data.js'
import Character from './Character.js'



let monstersArray = ["goblin", "ghoul", "demon","minotaur"]

let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}

}

function attack(){
    if(!isWaiting){
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        if(wizard.dead){
            
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
             
            }
            else{
                endGame()
            }
        }
    }
   
}

function endGame(){
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ? 'No victorious'
        : wizard.dead ? 'Monster wins' 
        : 'Sorceress wins'

        const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1000)
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero)

let monster = getNewMonster()

render()