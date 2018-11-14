var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

var images = ["img/Aquarius.jpg","img/Pisces.jpg","img/Aries.jpg","img/Taurus.jpg","img/Gemini.jpg","img/Cancer.jpg","img/Leo.jpg","img/Virgo.jpg","img/Libra.jpg","img/Scorpio.jpg","img/Sagittarius.jpg","img/Capricorn.jpg"];


function start(){
    var name = document.getElementById("name").value;
    var birthMonth = document.getElementById("month").value;
    var birthDay = document.getElementById("day").value;
    var sign = determineSign(birthMonth, birthDay);
    var bDay = determineBirthday(birthMonth, birthDay);
    var NoneName = noName(name);
    var NoneDate = noDate(birthMonth, birthDay);
    if(NoneDate == false){
        //warn
        return false;
    }
    if(NoneName == false){
        //warn
        return false;
    }
    document.getElementById("messages").innerHTML = "Hi " + name + "! " + bDay + "Your sign is: " + signs[sign];
    document.getElementById("messageTwo").innerHTML = messages[sign];
    document.getElementById("image").src = images[sign];

}
function determineBirthday(month, day){
    var isBirthday = "";
    var now = new Date();
    if(now.getMonth() + 1 == month && now.getDate() == day){
        isBirthday = "Happy Birthday!"
    }
    return isBirthday;
}

function noName(name){
    if(!name){
        alert("Please Enter Your Name");
        return false;
    }
    return true;
}
function noDate(month, day){
    if(month == 2 && day > 28){
        alert("Invalid Date");
        return false;
    }
    if(month == 4 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 6 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 9 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 11 && day > 30){
        alert("Invalid Date");
        return false;
    }
}

function determineSign(month, day){
    if(month == 1 && day >= 20 || month == 2 && day <= 19){
        return 0;
    }
    if(month == 2 && day >= 20 || month == 3 && day <= 20){
        return 1;
    }
    if(month == 3 && day >= 21 || month == 4 && day <= 20){
        return 2;
    }
    if(month == 4 &&  day >= 21 || month == 5 && day <= 20){
        return 3;
    }
    if(month == 5 && day >= 21 || month == 6 && day <= 20){
        return 4;
    }
    if(month == 6 && day >= 21 || month == 7 && day <= 22){
        return 5;
    }
    if(month == 7 && day >= 23 || month == 8 && day <= 22){
        return 6;
    }
    if(month == 8 && day >= 23 || month == 9 && day <= 23){
        return 7;
    }
    if(month == 9 && day >= 24 || month == 10 && day <= 23){
        return 8;
    }
    if(month == 10 && day >= 24 || month == 11 && day <=22){
        return 9;
    }
    if(month == 11 && day >= 23 || month == 12 && day <= 21){
        return 10;
    }
    if(month == 12 && day >= 22 || month == 1 && day <= 19){
        return 11;
    }
}

var messages = ["Sometimes, no matter how hard you push or wish, things are not going to go the way you want. Although you won't have your hopes dashed, a bracing dose of reality will remind you that there are many things beyond your control. " +
"Most importantly, do not take this as a sign that you are losing power. Rather, take it as a fact that life would be pretty boring if you always got what you wanted. Seek out the company of people who understand this." , "Give one of your recent projects a final farewell push today -- wave bye-bye as it moves on down the line to the next person. " +
"You've done all you can (you've done very well, as a matter of fact) -- now it's someone else's duty to carry it further. This release will lighten your load and make you feel quite carefree for a few days. Take advantage of this positive energy to reach out to friends and have some laughs. Plan a few lavish adventures together."
,"Scheduling conflicts may seem insurmountable today -- take a break now and things may free up, making a compromise possible. Be prepared to give a little bit more than everyone else -- your willingness to be flexible will be remembered by people who can make things happen down the road. One of your most ambitious goals feels like it's getting tougher today. " +
    "It's time to swallow your pride and ask for the help you know you need."
,"Take advantage of a figurative 'get out of jail free' card that you'll be handed today. You may not recognize it at first, but you'll suddenly see that you've got the connections you need for getting away with pushing a few boundaries. Do not feel guilty that you may have more opportunity than someone else -- this is the chance you've been waiting for and you can make up for some lost time. " +
    "Nothing can stop the solid momentum you've created -- so take chances."
,"There are a lot of details piling up, forming a sticky foundation that's slowing you down way too much. The best way to combat this new sluggishness is to completely ignore it, so go ahead and skip the details for today. Overthinking every little decision isn't going to ensure that you make the right choice, it's just going to delay the decision you were likely going to make all along! " +
    "Trust your gut and act on a few whims -- one of 'em may take you to an amazing place."
,"You like to think you know a good thing when you see it, but it's an indisputable fact that the grass is always greener on the other side of the fence. If you're single, you may spy an especially adorable couple that makes you green with envy -- if you've landed your sweetie, you'll suddenly notice how many cuties are smiling at you. " +
    "Remind yourself that if the situations were different, you wouldn't be as happy. You are where you are for a darn good reason (believe it or not)."
,"Believe a family member when they tell you that holding on is holding you back. They may not understand how difficult it is to let go, but they do understand how important it is right now. If you don't see any reward for moving forward, it's because you don't quite realize how far you've come. " +
    "Get comfortable and have a long chat with someone who knows you inside and out. They have the perspective to see that you have made huge progress, and they're ready to convince you.",
"Broaden your definition of 'normal' today -- push beyond some of your comfort barriers and try some new things. Skip past your favorite radio station and listen to something from the opposite end of the spectrum. Try a cuisine you've never really tried before -- " +
"you're in a very receptive frame of mind and will be able to appreciate the best aspects of everything you experiment with. Not everything will be a new favorite, but you will learn more about what you like.",
"Your optimistic outlook will be growing a lot stronger today -- mostly because your positive thinking has been helping you gain a lot of affection, and your subconscious wants more! By seeing the sunnier side of life, you've been inspiring others to do the same -- " +
"this 'bright side' mentality is contagious and very attractive. Someone who's taken a new role in your life loves the fact that for you, the glass is always half full. They are going to big a much bigger part of your life.",
"Some days you just have to put your blinders on and keep going down the road! Today a bevy of wisecracking folks may try your patience, but in the end, they will win your heart (try not to let them know -- it might give them a big head!). Negative energy is like a bully -- " +
"if you just ignore it, it will get bored and then go away. So don't fret if there's some tension during a serious time -- put your energy into the fun stuff and the unpleasant stuff will blow over quicker than you think.",
"An enriching period of looking back and being reflective will continue throughout today. Gaining perspective on where you've come from and what you've done is a great way to gain confidence -- but be careful not to get too stuck in what used to be. " +
"The choices you've made cannot be undone, so why dwell? Regret is a useless emotion, and you've got exciting things to think about. The good news you've been waiting for is coming today, and it will give you the distraction you may need.",
"One thing you can rely on today more than anything is your energy! As soon as you begin your morning routine, your synapses will spring to life and you'll be ready to meet anything the day has to offer. One excellent use of your energy would be to rally the troops and get some real teamwork going. " +
"Your spirit is likely to be contagious, and you can affect the environment around you more than ever before, whether it's work, home or the dating scene."];