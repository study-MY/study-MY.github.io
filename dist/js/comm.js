$(function () {
  var page = $("#fullpage").fullpage({
    // 1. 네비게이션 보이기
    navigation: true,

    // 2. 네비게이션 위치 지정
    navigationPosition: "right",

    // 3. 각 섹션의 배경색상 지정 (6자의 핵사코드 작성가능)
    // sectionsColor: ["pink", "yellow", "#efefef"],
    navigationTooltips: [
      "Intro",
      "Profile",
      "Project1",
      "Project2",
      "Project3",
      "Project4",
      "CloneCoding",
      "Contact",
    ],
  });
});