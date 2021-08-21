const menuBtn = document.querySelector(".menuNavRight");
const menus = document.querySelectorAll(
  "#menu1, #menu2, #menu3, #menu4, #menu5"
);

const menuIN = () => {
  const menu = document.querySelector(".menuNavLeft");
  if (menu.classList.contains("menuBack")) {
    menu.classList.remove("menuBack");
  } else {
    menu.classList.add("menuBack");
  }
};

menuBtn.addEventListener("click", () => {
  menuIN();
});

menus[0].addEventListener("click", () => {
  const menu = document.getElementById("list1");
  const arrow = document.querySelector(".arrow1");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[1].addEventListener("click", () => {
  const menu = document.getElementById("list2");
  const arrow = document.querySelector(".arrow2");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[2].addEventListener("click", () => {
  const menu = document.getElementById("list3");
  const arrow = document.querySelector(".arrow3");
  console.log(menu);
  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[3].addEventListener("click", () => {
  const menu = document.getElementById("list4");
  const arrow = document.querySelector(".arrow4");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});

menus[4].addEventListener("click", () => {
  const menu = document.getElementById("list5");
  const arrow = document.querySelector(".arrow5");

  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    arrow.classList.add("focusSub");
  } else {
    menu.classList.add("hideMenu");
    arrow.classList.remove("focusSub");
  }
});
/* --challenge display-- */
let challenges;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    challenges = data;
  });

const challengeDisplay = () => {
  for (let i = 0; i < challenges.challenge.length; i++) {
    let a = i + 1;

    const sect = document.getElementById("challengeContainer" + a);

    if (i % 2 == 0) {
      sect.innerHTML = `
  <section class="back1" id="challenge${a}">
  <h2>${challenges.challenge[i].title}</h2>
  <span class="challengeLink"></span>
  <div class="screenshotContainer">
      <img src="./${challenges.challenge[i].folder_name}/screenshot.png" alt="screenshot challenge 12" class="screenshot">
      <ul class="link">
          <li><a href="./${challenges.challenge[i].folder_name}/index.html"><p>Online websit</p></a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/julabina/FRONTEND_MENTOR/tree/master/${challenges.challenge[i].folder_name}"><p>Github repository</p></a></li>
      </ul>
  </div>
</section>
  `;
    } else {
      sect.innerHTML = `
    <section class="back2" id="challenge${i + 1}">
    <h2>${challenges.challenge[i].title}</h2>
    <span class="challengeLink"></span>
    <div class="screenshotContainer">
        <img src="./${
          challenges.challenge[i].folder_name
        }/screenshot.png" alt="screenshot challenge 12" class="screenshot">
        <ul class="link">
            <li><a href="./${
              challenges.challenge[i].folder_name
            }/index.html"><p>Online websit</p></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/julabina/FRONTEND_MENTOR/tree/master/${
              challenges.challenge[i].folder_name
            }"><p>Github repository</p></a></li>
        </ul>
    </div>
</section>
    `;
    }
  }
};

challengeDisplay();
