function scuberGreetingForFeet(feet){
  let offer = '';
  if (feet <= 400){
    offer = 'This one is on me!';
  } else if (feet <= 2000){
    offer = 'That will be twenty bucks.';
  } else if (feet <= 2500){
    offer = 'I will gladly take your thirty bucks.';
  } else {
    offer = "No can do."
  }
  return offer;
}

function ternaryCheckCity(city){
  let mesg = '';
  city === 'NYC' ? (mesg = 'Ok, sounds good.') : (mesg = 'No go.');
  return mesg;
}

function switchOnCharmFromTip(tip){
  let mesg = '';
  switch (tip){
    case 'generous': 
      mesg = 'Thank you so much.';
      break;
    case 'not as generous': 
      mesg = 'Thank you.';
      break;
    default: 
      mesg = "Bye.";
      break;
  }
  return mesg;
}