// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', label: 'Captured\nMemories' },
      { id: 'flowers',  icon: '🌷', label: 'Virtual\nFlowers'   },
      { id: 'song',   icon: '🎵', label: 'our\nsong'       },
      { id: 'letter',   icon: '💌', label: 'Love\nLetter'       },
      { id: 'locks',   icon: '🔒', label: 'Lock\nus'       },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️',    tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️',  tag: 'cute'   },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️',       tag: 'love'   },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always'  },
      { src: '/images/memory6.jpg', label: '❤️',    tag: 'mine'   },
    ],
  },

  

  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      'وددت ان اعانقك لمدة طويلة عناق يكفيني لكل الايام التي تخلو منك ❣️',
      'كل عام وانا احبك لالف عام حلوة سنيني فيك يا عيد عمري ❤️',
      'يقول خالد عبد الرحمن تفداك روحي ان كانت الروح تكفيك وان ماكفتك الروح يفداك عمري ❣️',
      '"يوم حدتني الليالي ومستني الظروف صدو اشباه الرجال وانقذته مره"\nيا اجمل مرأة شفتها في حياتي ❣️',
      'تباهي وغني واضحكي لا يهمك شي لا مالت ظروفك فيك لك من يعدلها بتلقين لك في جوف قلبي براد وفي هنا منزلك والناس تعرف منازلها',
      'لقيتك في مساعي العمر صدفة صدفة تساوي العمر كله ❤️',
      'احبك وصل وبعاد واحبك رضي وعناد ❣️',
      'انتي وعيونك نجمتين وضي ❣️',
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `عزيزتي نوف 
أدري إن الكلام مهما طال ما راح يشرح لك فعلًا قد إيش أحبك، لكن كل اللي أعرفه إن وجودك بحياتي غيّرني بطريقة ما كنت أتخيلها أبدًا.
من يوم عرفتك وأنا أحس إن الدنيا صارت أخف، وإن حتى الأيام السيئة أقدر أتحملها لأنك موجودة فيها.
أنتِ الشيء الوحيد اللي إذا فكرت فيه يهدأ قلبي مهما كنت متعب أو ضايق أو ضايع.
أحبك بطريقة تخوفني أحيانًا، لأنك صرتِ جزء من كل شيء داخلي… من تفكيري، من دعواتي، من خططي، وحتى من لحظات صمتي.
صرت أشوف الحياة أجمل لأنك فيها، وصرت أحس إن عندي سبب حقيقي أبتسم وأقوم وأحاول وأكمل.
والله إنك مو شخص عادي بالنسبة لي، أنتِ راحتي، وأماني، والشعور الحلو اللي كنت أبحث عنه طول عمري بدون ما أعرف.
أحب لما أتكلم معك وأنسى كل شيء حولي، أحب شعور الطمأنينة اللي يجيني منك بدون ما تحاولين حتى.
أحب كيف وجودك يخليني أقوى، وكيف كلمة منك تقدر تغيّر يوم كامل عندي.
يمكن الناس تشوف الحب مجرد كلام، لكن أنا فعلًا حسّيت معنى الحب يوم عرفتك أنتِ. أنتِ الشيء الوحيد اللي أخاف أخسره بصدق، لأن فكرة حياتي بدونك صارت غريبة جدًا علي.
ودي أعطيك كل الأمان والحب والاهتمام اللي تستحقينه، وأخليك كل يوم تحسين قد إيش أنتِ غالية بعيني.
أبيك تعرفين إنك مو مجرد بنت أحبها… أنتِ إنسانة غيرتني، وخلتني أشوف نفسي والحياة بطريقة أحسن.
حتى أسوأ أيامي، مجرد وجودك فيها يخففها علي.
وأسعد لحظاتي دائمًا يكون لك علاقة فيها بطريقة أو بأخرى.
أحيانًا أجلس أفكر كيف إن شخص واحد قدر يغيّر كل هذا بداخلي، وأستوعب إنك فعلًا أجمل شيء صار لي.
ختامًا يا نجمتي العظيمة وأم نجد…
فاضية نكمل الـ ٦٠ سنة الجاية سوا؟
ولا تنسين كمان من وين شريتي الكاب 🤗`,
    signoff: 'with all my love,',
    signature: 'yours always ♡',
  },

  locks: {
    title: 'love lock',
    returnButton: 'RETURN',
    names: ['you', '&', 'me'],
    message: 'locked in, forever 🔒',
  },
}

export default content
