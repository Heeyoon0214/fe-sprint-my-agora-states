// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);



// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement('img');
  avatarImg.className = 'discussion__avatar--image'

  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = 'avatar of ' + obj.author;
  avatarWrapper.append(avatarImg);

  const discussionTitle = document.createElement('h2');
  const titleAnchor = document.createElement('a');

  titleAnchor.href = obj.url;
  titleAnchor.textContent = obj.title;
  
  discussionTitle.append(titleAnchor);
  const discussionInfo = document.createElement('div');
  discussionInfo.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleString()}`

  discussionContent.append(discussionTitle, discussionInfo)



  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};


const form = document.querySelector('form.form');
const title = document.querySelector('div.form__input--title > input')
const nameInput = document.querySelector('div.form__input--name > input')
const textbox = document.querySelector('div.form__textbox > textarea')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    id: "unique id",
    createdAt: new Date(),
    title: title.value,

    url: null,
    author: nameInput.value,
    answer: null,
    bodyHTML: textbox.value,
    avatarUrl:
      "https://pbs.twimg.com/media/FTs4sfyaUAAw4VI.png",
  }
  agoraStatesDiscussions.unshift(obj);
  const newdiscussion = convertToDiscussion(obj)
  ul.prepend(newdiscussion );
})

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
