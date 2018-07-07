scuberGreetingForFeet(feet){
  switch{
    case feet <= 400:
      'This one is on me!'
      break;
    case feet > 2000:
      'I will gladly take your thirty bucks.'      
      break;
    case feet > 2500:
      'No can do.'
      break;
  }
}

ternaryCheckCity(city){
  city === 'NYC'? 'Ok, sounds good.' : 'No go.'
}