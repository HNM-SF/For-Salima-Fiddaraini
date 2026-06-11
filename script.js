const text = `Cepatnyaa sudah 21 aja sayangg xixii
Selamat ulang tahun yang ke 21 ini sayangg🌻✨

Sedikit cerita sayang,
Nama kamu indah tau sayang, beneran.
Biasanya kamu kalo dibilangin gini pasti ada rasa nda percayanya si, ato ga gitu ngerasa biasa aja - Aduhh.
Tapi gapapa sayang, karena yang terkadang biasa di mata kamu, bisa jadi yang sempurna di mata orang lain. Xixii

Salima Fiddaraini, nama yang selalu aku sebut dalam doa"ku pas aku sedang berdoa, yakalii ngedoain pas lagi ngedit, kan ga mungkin wkwk.

Oke" serius.
Seriusnya dari sini yaa
Bacanya pelan pelan aja

---

Sayangg,
Aku suka sama kamu
Aku suka sama cantiknya kamu
Aku suka sama segala yang ada dalam diri kamu,
termasuk nama kamu.

Salima fiddaraini,
Di umur kamu yang baru menginjak ke-21 ini sayang, aku mendapatkan suatu hal baru yang hangat bagi aku, semestinya orang lain juga ikut merasakannya, dan jika kamu belum tau, semoga ini menjadi hal yang manis bagi kamu.

Salima fiddaraini yang biasa kamu singkat Sf sayangg, aku menganggap bahwa ini adalah hal yang hangat bagi aku, menurutku (aku gambarkan dalam puisi);

"Setiap hari ada hadirmu
kamu bagai teman yang selalu ada bagi aku,
Setiap hari ada cerita" kamu
kamu bagai sahabat yang memberikan makna bagi aku,
Kerap kali kubayangkan kamu adalah pacarku, ternyata kamu lebih dari kata pacar itu sendiri.
Kamu, adalah masa depan yang aku nanti atas kehangatan² yang kamu beri."

Maka dari itu,

Untukmu Salima fiddaraini,
Sun flower adalah nama yang sama untuk menggambarkan kehangatan yang ada dalam dirimu, untuk orang orang di sekitarmu.

Selamat ber21tahun sayangg🤍
Semoga lebih banyak hal lagi yang membuatmu bahagia di kehidupan ini🌻✨;

const button = document.getElementById("openBtn");
const content = document.getElementById("content");
const typedText = document.getElementById("typed-text");

button.addEventListener("click", () => {

document.querySelector(".hero").style.display = "none";

content.classList.remove("hidden");

let i = 0;

function typing(){

if(i < text.length){

typedText.innerHTML += text.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

});
