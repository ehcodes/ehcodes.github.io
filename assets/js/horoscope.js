//user can click a button
//Horoscope will be generated
//Horoscope displays to the user

//event listener
document.getElementsByTagName('button')[0].onclick = createHoroscope;

//function for genHoro
function createHoroscope(){
  //get value for month
  var month = document.getElementsByTagName('select')[0].value
  //get value for day
  var day = document.getElementsByTagName('select')[1].value
  //Determine Sign

  //Conditional for each sign
  if((month == 12 && day >= 22) || (month == 1 && day <=19)) {
		document.getElementsByTagName('h2')[1].innerHTML ='Capricorn (December 22-January 19)';
		document.getElementsByTagName('p')[0].innerHTML ="Today you might toy with the idea of making either the arts and humanitarianism or the spread of higher consciousness your life's work. Business and money are going well for you, Capricorn, and you might be thinking in terms of a future in which you can write your own career ticket. Although the time isn't right to actually do it, you should formulate an action plan for the future.";
 } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Aquarius (January 20 to February 18)';
   document.getElementsByTagName('p')[0].innerHTML ="Your mind could be focused on exalted spiritual concepts today, Aquarius. You might decide to make an effort to study spiritual or metaphysical materials, or attend a lecture, workshop, or meditation session with people who share this interest. You might also think about traveling to a country associated with a specific spiritual tradition, such as Israel, Egypt, or India. Write down your insights so you can refer to them later.";
 } else if((month == 2 && day >= 19 && day <= 29) || (month == 3 && day <= 20)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Pisces (February 19 to March 20)';
   document.getElementsByTagName('p')[0].innerHTML ="Though you naturally tend to be sensitive to the feelings of others, Pisces, today you might be so in touch with the needs and desires of those around you that you sense what they want even before they know it. Spiritual, emotional, or psychological insights might come to you throughout the day. You could even have some prophetic dreams. Write down whatever seems particularly significant. You'll want to remember it later.";
 } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Aries (March 21-April 19)';
   document.getElementsByTagName('p')[0].innerHTML ="Today you might feel especially idealistic regarding your relationships, Aries. You're likely to see those closest to you in their best light. Romantic partners may seem like characters from a fairy tale. This is a good time to move a love relationship to the next level of commitment, as long as you don't forget your partner's foibles. It's easy to love someone who seems perfect, but more realistic to love their faults as well.";
 } else if((month == 4 && day >= 20  && day <= 30) || (month == 5 && day <= 20)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Taurus (April 20-May 20)';
   document.getElementsByTagName('p')[0].innerHTML ="Today you might feel the need to be of service to others. Your humanitarian instincts are high, Taurus, though you might tend to over-idealize the concept a little. It's wonderful to help those less fortunate, but often the process involves a heavy commitment of time and energy. If you decide to do this, it could transform your life in a profound way. Be prepared for some pretty heavy changes.";
 } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Gemini (May 21-June 20)';
   document.getElementsByTagName('p')[0].innerHTML ="The arts might seem especially appealing today, Gemini. Also, you could fall in love. If you're currently involved, expect circumstances to develop that show the exalted side of your partner that you sometimes forget. If you aren't involved, expect someone wonderful to appear. Remember to get to know the person before getting hooked. However perfect the person appears now, he or she is still human.";
 } else if((month == 6 && day >= 21 <= 30) || (month == 7 && day <= 22)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Cancer (June 21-July 22)';
   document.getElementsByTagName('p')[0].innerHTML ="A number of powerful events could increase the level of love and positive energy in your home, Cancer. Visitors with a spiritual or metaphysical focus could bring some new and exciting information. Good news that you never expected could raise everyone's spirits. A meeting with a humanitarian or spiritual purpose might take place. Whatever it is, expect your home to buzz with great vibes. Enjoy.";
 } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Leo (July 23-August 22)';
   document.getElementsByTagName('p')[0].innerHTML ="Some new people who appear interesting could move into your neighborhood and excite your curiosity, Leo. Spiritual or metaphysical conversations could take place today over the phone or over coffee. The concepts might be deep, exalted, and inspiring, yet bring up more questions than answers. Books on the subject could prove enlightening. You might even want to write down your thoughts or memorialize them in a drawing or painting.";
 } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Virgo (August 23-September 22)';
   document.getElementsByTagName('p')[0].innerHTML ="Experiences you never expected could come your way today, Virgo. A talent that you didn't know you had could come to light. This might involve a combination of arts and technology, such as computer graphics or animation, or it might involve spiritual or humanitarian work. You might also try fundraising for a charity or a social or political cause. Don't hesitate. Go to it.";
 } else if((month == 9 && day >= 24 <= 30) || (month == 10 && day <= 23)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Libra (September 23-October 22)';
   document.getElementsByTagName('p')[0].innerHTML ="You usually tend toward rational and scientific ways of thinking, Libra, but today you might be so intuitive that you're more likely to use your psychic abilities. This can be a mixed blessing. Your rational nature protects you from identifying too much with the world's less fortunate. Today this protection is greatly lessened, so be prepared to emotionally identify with everybody.";
 } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Scorpio (October 23-November 21)';
   document.getElementsByTagName('p')[0].innerHTML ="You're normally intuitive, Scorpio, but today you might feel more psychic than you ever dreamed you could. Information received from the media could have you picking up psychically on the thoughts and feelings of people you've never met. This can be emotionally overpowering, so protect yourself by keeping the white light around you. Channel your thoughts and feelings into art of some kind. It helps.";
 } else if((month == 11 && day >= 23 <= 30) || (month == 12 && day <= 21)) {
   document.getElementsByTagName('h2')[1].innerHTML ='Sagittarius (November 22-December 21)';
   document.getElementsByTagName('p')[0].innerHTML ="Today you could feel especially intuitive and more sensitive than usual to unacceptable social and political conditions, Sagittarius. Ideas for new goals, perhaps humanitarian, might come to you. You should be in an especially idealistic mood, so you might come up with wonderful possibilities that aren't workable now. Write your ideas down and consult with someone who shares your interests. Then decide how to proceed.";
 } else if ((month == 2 && day >= 30) || (month == 4 && day == 31) || (month == 6 && day == 31) ||
    (month == 9 && day == 31) || (month == 11 && day == 31)) {
    document.getElementsByTagName('h2')[1].innerHTML ='Invalid Date';
    document.getElementsByTagName('p')[0].innerHTML ='Please select your birthday.';
}
}
