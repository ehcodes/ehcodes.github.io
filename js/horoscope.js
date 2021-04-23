function doStuff() {
  let imageReplacing = document.querySelector('.replaceSection')
  let form = document.querySelector('.horoscopeForm')
  let display = document.querySelector('.horoscopeDisplay')
  let horoscopePlacement = document.querySelector('.horoscopeContent')

  console.log('do i still need this?')
  const messages = [
    "You itch to branch out or escape into another scene. A situation at home prickles your sense of independence. The status quo needs to change, and you may not be able to resist all-or-nothing thinking. Temporarily embedding yourself in work is always a safe option. Nevertheless, a project you are involved in lures you into longing for a perfect scenario. In all areas, youre motivated to break free from your past routine and create new resources.",
    "A casual word might land funny and spin you out of control today. Your reaction seems to come from left field, surprising you as much as anyone else. Instead of being caught up in your emotions, spend the day taking care of domestic duties. Theres plenty to do at home, enabling you to avoid any upsetting interactions with others. If you are inclined to exercise, get your muscles moving to let off some steam. Just say no to negativity.",
    "Someone keen to assist you at work may be promising more than they can deliver today. Try to parse their offer and test if it is real or not. You also have heaps of your own errands to run. You motor around your city, almost like a town crier, spreading the good word to any and all who will listen. There is a lot on your mind and it may leave your lips immediately. Thankfully, a dash of caution will save you from any embarrassing admissions. Busy does not equal success.",
    "A flirt foreshadows something more substantial. The question is whether you can trust it. If you are exploring a new hobby or subject of study, you may be infatuated with an activity that promises you the world. However, if something seems to fulfill you now, it might lose its sheen over time. You could also be longing for a personal connection you once held dear, and hoping that this new endeavor will fulfill your sense of nostalgia. Go slow and let love cleanse your tender heart.",
    "Early morning mental fog clears suddenly to reveal a brilliant day ahead. You get back in your saddle and are fully in your power. The energized atmosphere revives you. Pamper yourself and replenish your spirit. However, practical matters do not vanish. In fact, a lovely confluence of errands descends upon you, and because your mood is so elevated, you knock them out one by one, effortlessly. Marianne Williamson wrote, When we are centered in joy, we attain our wisdom.",
    "You never seem to get a break in this era of professional constant contact. An off-hours message encroaches on your personal space and jerks you out of your comfort zone today. Consider spending some time counting your beans and seeing how you might liberate yourself from the current ways you earn an income. Be cautious if a colleague or friend suggests an unrealistic goal. Stick with practical accounting while you reevaluate your assets. Confucius wrote, The cautious seldom err.",
  ]
  let images = [
    '<img src="../imgs/horoscope/bg1.jpg" alt="">',
    '<img src="../imgs/horoscope/bg2.jpg" alt="">',
    '<img src="../imgs/horoscope/bg3.jpg" alt="">'
  ]

  function horoscopeSelected(){
    let submitSignSelect = document.querySelector('.submitButton')
    submitSignSelect.addEventListener('click',()=>{
      let randomMessage = Math.floor(Math.random() * 6)
      let randomImage = Math.floor(Math.random() * 3)
      imageReplacing.innerHTML = `${images[randomImage]}`
      console.log(`${images[randomImage]}`)
      console.log(`${randomImage}`)
      horoscopePlacement.innerHTML=`${messages[randomMessage]}`
      console.log(`${messages[randomMessage]}`)
      form.classList.add('dispNone')
      display.classList.remove('dispNone')
    })
  }
  horoscopeSelected()

  function backToSelection(){
    let backButton = document.querySelector('.goBack')
    backButton.addEventListener('click',()=>{
      imageReplacing.innerHTML = '<img src="../imgs/horoscope/bg4.jpg" alt="">'
      form.classList.remove('dispNone')
      display.classList.add('dispNone')
    })
  }
  backToSelection()
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doStuff);
} else {  // `DOMContentLoaded` has already fired
  doStuff();
}
