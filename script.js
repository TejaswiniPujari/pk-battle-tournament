const userRewards = {
    0: `3 days Lamborghini Entrance effect+ Golden \n Crown Mic frame`,
    1: `01% of the Beans spent in the match + 1 week  Lamborghini\nEntrance effect+ Golden Crown Mic frame`,
    2: `02% of the Beans spent in the match + 10 days Lamborghini\nEntrance effect+ Golden Crown Mic frame`,
    3: `03% of the Beans spent in the match + 15 days Lamborghini\nEntrance effect+ Golden Crown Mic frame`
}

const talentRewards = {
    0: `10 Days Horse Carriage Entrance effect + Meteor \n room theme + Marigold Mic frames`,
    1: `5 Days Meteor room theme + Marigold Mic frames`,
    2: `3 Days Meteor room theme + Marigold Mic frames`,
    3: `1 Day Meteor room theme`
}

const userRewardsImg = {
    0: ["./img/rewards/Golden-Crown-Mic-Frame.png", "./img/rewards/Lamborgini-Entrance-Effect.png"],
    1: ["./img/rewards/1.png", "./img/rewards/Golden-Crown-Mic-Frame.png", "./img/rewards/Lamborgini-Entrance-Effect.png"],
    2: ["./img/rewards/2.png", "./img/rewards/Golden-Crown-Mic-Frame.png", "./img/rewards/Lamborgini-Entrance-Effect.png"],
    3: ["./img/rewards/3.png", "./img/rewards/Golden-Crown-Mic-Frame.png", "./img/rewards/Lamborgini-Entrance-Effect.png"],
}

const talentRewardsImg = {
    0: ["./img/rewards/Horse-Carriage.png", "./img/rewards/Meteor-Room-Theme.png", "./img/rewards/Marigold-Mic-Frame.png"],
    1: ["./img/rewards/Meteor-Room-Theme.png", "./img/rewards/Marigold-Mic-Frame.png"],
    2: ["./img/rewards/Meteor-Room-Theme.png", "./img/rewards/Marigold-Mic-Frame.png"],
    3: ["./img/rewards/Meteor-Room-Theme.png"],
}

let slideNumber = 0;
let mode = 'talent';

function onLeftSlider() {
    if (slideNumber > 0) {
        if (mode === 'talent') {
            document.getElementById('reward-description').innerHTML = talentRewards[slideNumber - 1];
            if (slideNumber - 1 == 1 || slideNumber - 1 == 2) {
                document.getElementById('img3').style.display = 'none';
                document.getElementById('img2').style.display = 'block';
                document.getElementById('rewards').classList.add('two-img-slider');
                document.getElementById('rewards').classList.remove('one-img-slider');
            }
            else {
                document.getElementById('img3').style.display = 'block';
                document.getElementById('img2').style.display = 'block';
                document.getElementById('rewards').classList.remove('two-img-slider');
                document.getElementById('rewards').classList.remove('one-img-slider');
            }
            for (let i = 0; i < talentRewardsImg[slideNumber - 1].length; i++) {
                document.getElementById(`img${i + 1}`).src = talentRewardsImg[slideNumber - 1][i];
            }
        }

        else {
            document.getElementById('reward-description').innerHTML = userRewards[slideNumber - 1];
            if (slideNumber - 1 == 0) {
                document.getElementById('img3').style.display = 'none';
                document.getElementById('rewards').classList.add('two-img-slider');
            }
            else {
                document.getElementById('img3').style.display = 'block';
                document.getElementById('rewards').classList.remove('two-img-slider');
            }
            for (let i = 0; i < userRewardsImg[slideNumber - 1].length; i++) {
                document.getElementById(`img${i + 1}`).src = userRewardsImg[slideNumber - 1][i];
            }
        }
        slideNumber = slideNumber - 1;
    }
}

function onRightSlider() {
    if (slideNumber < 3) {
        if (mode === 'talent') {
            document.getElementById('reward-description').innerHTML = talentRewards[slideNumber + 1];
            if (slideNumber + 1 == 1 || slideNumber + 1 == 2) {
                document.getElementById('img3').style.display = 'none';
                document.getElementById('img2').style.display = 'block';
                document.getElementById('rewards').classList.add('two-img-slider');
                document.getElementById('rewards').classList.remove('one-img-slider');
            }
            else if (slideNumber + 1 == 3) {
                document.getElementById('img3').style.display = 'none';
                document.getElementById('img2').style.display = 'none';
                document.getElementById('rewards').classList.add('one-img-slider');
            }
            else {
                document.getElementById('img3').style.display = 'block';
                document.getElementById('img2').style.display = 'block';
                document.getElementById('rewards').classList.remove('two-img-slider');
                document.getElementById('rewards').classList.remove('one-img-slider');
            }
            for (let i = 0; i < talentRewardsImg[slideNumber + 1].length; i++) {
                document.getElementById(`img${i + 1}`).src = talentRewardsImg[slideNumber + 1][i];
            }
        }
        else {
            document.getElementById('reward-description').innerHTML = userRewards[slideNumber + 1];
            document.getElementById('img3').style.display = 'block';
            document.getElementById('rewards').classList.remove('two-img-slider');
            for (let i = 0; i < userRewardsImg[slideNumber + 1].length; i++) {
                document.getElementById(`img${i + 1}`).src = userRewardsImg[slideNumber + 1][i];
            }
        }
        slideNumber = slideNumber + 1;
    }
}

//set mode
function selectUserMode() {
    document.getElementById('talent').src = "./img/Talent-Btn-Unselect.png";
    document.getElementById('user').src = "./img/User-Btn-Selected.png";
    mode = 'user';
    document.getElementById('reward-description').innerHTML = userRewards[0];
    slideNumber = 0;
    document.getElementById('rewards').classList.add('user-rewards-banner');
    document.getElementById('rewards').classList.remove('user-rewards-banner');
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img2').style.display = 'block';
    document.getElementById('rewards').classList.add('two-img-slider');
    document.getElementById('rewards').classList.remove('one-img-slider');
    for (let i = 0; i < userRewardsImg[0].length; i++) {
        document.getElementById(`img${i + 1}`).src = userRewardsImg[0][i];
    }
}

function selectTalentMode() {
    document.getElementById('talent').src = "./img/Talent-Btn-Selected.png";
    document.getElementById('user').src = "./img/User-Btn-Unselect.png";
    mode = 'talent';
    document.getElementById('reward-description').innerHTML = talentRewards[0];
    slideNumber = 0;
    document.getElementById('rewards').classList.remove('user-rewards-banner');
    document.getElementById('rewards').classList.add('user-rewards-banner');
    document.getElementById('rewards').classList.remove('two-img-slider');
    document.getElementById('img3').style.display = 'block';
    for (let i = 0; i < talentRewardsImg[0].length; i++) {
        document.getElementById(`img${i + 1}`).src = talentRewardsImg[0][i];
    }
}

// action on rules btn
function showGuidline() {
    document.getElementById('main-content').style.opacity = 0.2;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden';
}

function hideGuidline() {
    document.getElementById('main-content').style.opacity = 1;
    document.getElementById('body').style.overflow = 'unset';
    document.getElementById('modal').style.display = 'none';
}

