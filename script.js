let pass = "";
const correct = "160825";

/*
  ATENÇÃO:
  Meses no JavaScript começam em 0
  Janeiro = 0
  Agosto = 7
*/
const startDate = new Date(2025, 7, 16, 15, 8, 0);

const musicMotivos = document.getElementById("musicMotivos");
const musicCartinha = document.getElementById("musicCartinha");

function stopAllMusic(){
  musicMotivos.pause();
  musicCartinha.pause();
  musicMotivos.currentTime = 0;
  musicCartinha.currentTime = 0;
}

/* ================= SENHA ================= */
function add(n){
  if(pass.length < 6){
    pass += n;
    document.getElementById("display").innerText = pass.padEnd(6, "_");
  }
}

function del(){
  pass = pass.slice(0,-1);
  document.getElementById("display").innerText = pass.padEnd(6, "_");
}

function check(){
  if(pass === correct){
    document.getElementById("lock").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    startCounter();
    startPetals();
  } else {
    alert("Senha errada 😢");
    pass = "";
    document.getElementById("display").innerText = "______";
  }
}

/* ================= CONTADOR ================= */
function startCounter(){
  setInterval(() => {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    document.getElementById("timeTogether").innerText =
      `${years} anos, ${months} meses, ${days} dias, ${hours}h ${minutes}m ${seconds}s 💙`;
  }, 1000);
}

/* ================= 100 MOTIVOS ================= */
const motivos = [
 "Porque seu sorriso ilumina meus dias.",
"Porque vejo meu futuro seus olhos castanhos.",
"Porque seu cabelo cacheado é simplesmente perfeito.",
"Porque você é linda de um jeito único.",
"Porque você é extraordinária.",
"Porque você é extremamente inteligente.",
"Porque você tem conversas profundas.",
"Porque você sabe ouvir.",
"Porque você sabe falar a coisa certa.",
"Porque você me entende.",

"Porque você me acalma.",
"Porque você me traz paz.",
"Porque você me faz rir fácil.",
"Porque você me faz sorrir sem esforço.",
"Porque seu abraço é meu refúgio.",
"Porque seu abraço é meu lugar seguro.",
"Porque seu beijo me faz esquecer o mundo.",
"Porque sua voz me tranquiliza.",
"Porque seu toque é aconchegante.",
"Porque seu cheiro me lembra casa.",

"Porque você cuida de mim.",
"Porque você se preocupa comigo.",
"Porque você presta atenção nos detalhes.",
"Porque você se importa de verdade.",
"Porque você é carinhosa.",
"Porque você é gostosa.",
"Porque você é sensível.",
"Porque você é forte.",
"Porque você é determinada.",
"Porque você não desiste fácil.",

"Porque você é sincera.",
"Porque você é verdadeira.",
"Porque você é transparente comigo.",
"Porque você confia em mim.",
"Porque você acredita em mim.",
"Porque você me apoia.",
"Porque você me incentiva.",
"Porque você me motiva.",
"Porque você me faz querer ser melhor.",
"Porque você me faz crescer.",

"Porque você é minha melhor amiga.",
"Porque você é minha companheira.",
"Porque você é minha namorada.",
"Porque você é meu amor.",
"Porque você é minha pessoa favorita.",
"Porque você é minha paz.",
"Porque você é meu lar.",
"Porque você é meu refúgio.",
"Porque você é meu lugar seguro.",
"Porque você é minha escolha.",

"Porque você me escolhe todos os dias.",
"Porque você caminha ao meu lado.",
"Porque você soma na minha vida.",
"Porque você transforma meus dias.",
"Porque você deixa tudo mais leve.",
"Porque você torna dias comuns especiais.",
"Porque você faz tudo valer a pena.",
"Porque você é meu presente.",
"Porque você é meu futuro.",
"Porque você faz parte dos meus planos.",

"Porque você me ensina a amar.",
"Porque você me ensina a cuidar.",
"Porque você me ensina a ter paciência.",
"Porque você me ensina a ser melhor.",
"Porque você me ensina o que é amor de verdade.",
"Porque você me faz sentir amado.",
"Porque você me faz sentir importante.",
"Porque você me faz sentir suficiente.",
"Porque você me faz sentir completo.",
"Porque você me faz sentir feliz.",

"Porque eu amo cada detalhe seu.",
"Porque eu amo seu jeito.",
"Porque eu amo sua essência.",
"Porque eu amo quem você é.",
"Porque eu amo quem sou ao seu lado.",
"Porque eu amo dividir a vida com você.",
"Porque eu amo sonhar com você.",
"Porque eu amo planejar o futuro com você.",
"Porque eu amo estar com você.",
"Porque é você. Sempre você.",

"Porque você faz meus dias terem sentido.",
"Porque você me traz calma em meio ao caos.",
"Porque você sabe ser forte e doce ao mesmo tempo.",
"Porque você me ensina com seu exemplo.",
"Porque você respeita meus sentimentos.",
"Porque você me dá orgulho.",
"Porque você me faz sentir em casa.",
"Porque você é paciente comigo.",
"Porque você é dedicada.",
"Porque você é atenciosa.",
"Porque você sabe amar de verdade.",
"Porque você me dá esperança.",
"Porque você acredita no nosso amor.",
"Porque você cuida do nosso relacionamento.",
"Porque você não mede esforços por quem ama.",
"Porque você faz meu coração bater mais forte.",
"Porque você faz meus dias ter mais cor.",
"Porque você transforma amor em atitude.",
"Porque você faz tudo ficar melhor só por estar aqui.",
"Porque você é a minha princesa e eu te amo, hoje e sempre."
];
/* ================= MODAL ================= */
function openModal(type){
  stopAllMusic();
  let html = "";

  if(type === "motivos"){
    html = `<h3>💙 100 Motivos Para Te Amar 🌸</h3>` +
      motivos.map((m,i)=>`<p>${i+1}. ${m}</p>`).join("");
    musicMotivos.play();
  } else {
    html = `
      <h3>Uma Cartinha Pra Você 💙</h3>
      <p>Oiii meu bem, muito obrigado por todo esse tempo ao meu lado, por me ensinar como é ser amado de verdade, como é um relacionamento saudável, como é se sentir seguro, poder confiar sem medo, poder ser eu mesmo, por me fazer sentir que eu não sou um erro, por você ser tudo o'que eu sempre sonhei. Era impossível que eu não me apaixonasse por você, a pessoa mais linda que conheço, por dentro e por fora, por ter um jeito incrível, ser tão engraçada, desde que ouvi aquela sua risada tão gostosa, soube que era você com quem eu iria me casar, que era você que seria a mãe dos meus filhos. É por você que o meu coração bate, isso faz com que eu seja verdadeiramente e loucamente apaixonado e obcecado por você, e não acho que um dia vou saber como deixar de te amar, eu não quero, nenhum pouco, quero te amar cada vez mais, me apaixonar mais pela a sua alma a cada dia, eu decidi que escolheria você, todos os dias pelo resto da minha existência e mesmo não acreditando muito, espero demais que exista outra vida, porque somente essa ainda não é o suficiente pra o tanto que quero estar contigo.
As vezes eu não sou tão bom com as palavras que você precisa ouvir, embora eu tente muito, mas nunca pense que eu não tenho sentimentos ou duvide da grandeza deles, porque o único momento em que me permito sentir algo é quando estou contigo, quando se trata de você, meu coração deseja, grita, ama, inspira, transpira e sonha contigo, e ele não sabe, nunca soube e nunca vai saber amar pouco quando o assunto é VOCÊ. Eu te amo muito, minha princesa…
</p>
    `;
    musicCartinha.play();
  }

  document.getElementById("modalText").innerHTML = html;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal(){
  stopAllMusic();
  document.getElementById("modal").classList.add("hidden");
}

/* ================= PÉTALAS ================= */
function startPetals(){
  setInterval(()=>{
    const p = document.createElement("div");
    p.className = "petal";
    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 8000);
  }, 300);
}
