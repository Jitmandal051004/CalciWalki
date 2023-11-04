const calcBody = document.querySelector('.calcBody');
const screen = calcBody.querySelector('.screen');
const keyPad =calcBody.querySelector('.keyPad');
const buttons = keyPad.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear"){
            screen.innerText = "";
        }else if(item.id == "backspace"){
            let string = screen.innerText.toString();
            screen.innerText = string.substr(0,string.length-1);
        }else if(screen.innerText != "" && item.id == "equalTo"){
            screen.innerText = eval(screen.innerText);
        }else if(screen.innerText == "" && item.id == "equalTo"){
            screen.innerText = "EMPTY!";
            setTimeout(() => (screen.innerText = ""),2000);
        }else(
            screen.innerText += item.id
        )
    }
})


