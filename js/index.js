var name = prompt("Введите ваше имя")
alert("Здравствуйте " +name)
var questionOne = prompt("Сhoose right number Сколько кличек у Батыра? 1-Одна 2-Две 3-Три 4-Четыре")
if(questionOne == 4){
    alert("К сожелению вы выйграли!")
    var questionTwo = prompt("Choose right number Когда родился Батыр? 1-11 ноября 2-31 февраля 3-11 октября 4-10 июня")
    if(questionTwo == 3){
        alert("К сожелению вы проходите дальше!")
        var questionThree = prompt("Choose right number Сколько у Батыра было девушек 1-две 2-ноль 3-одна но она транс 4-пять")
        if(questionThree == 2){
            alert("Вы проходите!Но это не точно")
            var questionFour = prompt("Choose right number В какой стране Батыр не был 1-Казахстан 2-Узбекистан 3-Китай 4-ОАЭ")
            if(questionFour == 3){
                alert("Вы выйграли Батыра на ночь) Удачи вам!!!")
            }
            else{
                alert("Вы почти выйграли)")
            }
        }
         else{
            alert ("Игра для вас окончена)")
        }
    }
    else{
        alert("Вы не прошли до свидания!")
    }
}
else{
    alert("Ураа вы пройграли все бабаки мои!")
}