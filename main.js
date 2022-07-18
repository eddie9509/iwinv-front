const page = { page: "4" };
const recent_post = {
  post: [
    {
      post_number: "1",
      post_title: "post_1",
      writer: "writer_1",
      date: "zz",
      image: "image_1",
      comment: "10",
      views: "99",
    },
    {
      post_number: "2",
      post_title: "post_2",
      writer: "writer_2",
      date: "zz",
      image: "image_2",
      comment: "20",
      views: "99",
    },
    {
      post_number: "3",
      post_title: "post_3",
      writer: "writer_3",
      date: "zz",
      image: "image_3",
      comment: "30",
      views: "99",
    },
    {
      post_number: "4",
      post_title: "post_4",
      writer: "writer_4",
      date: "zz",
      image: "image_4",
      comment: "40",
      views: "99",
    },
    {
      post_number: "5",
      post_title: "post_5",
      writer: "writer_5",
      date: "zz",
      image: "image_5",
      comment: "50",
      views: "99",
    },
    {
      post_number: "6",
      post_title: "post_6",
      writer: "writer_6",
      date: "zz",
      image: "image_6",
      comment: "60",
      views: "99",
    },
    {
      post_number: "7",
      post_title: "post_7",
      writer: "writer_7",
      date: "zz",
      image: "image_7",
      comment: "70",
      views: "99",
    },
    {
      post_number: "8",
      post_title: "post_8",
      writer: "writer_8",
      date: "zz",
      image: "image_8",
      comment: "80",
      views: "99",
    },
    {
      post_number: "9",
      post_title: "post_9",
      writer: "writer_9",
      date: "zz",
      image: "image_9",
      comment: "90",
      views: "99",
    },
    {
      post_number: "10",
      post_title: "post_10",
      writer: "writer_10",
      date: "zz",
      image: "image_10",
      comment: "100",
      views: "99",
    },
  ],
};

let i;

// 게시글
for (i = 0; i < 100; i++) {
  if (recent_post.post[i] == undefined) {
    break;
  }
  document.querySelector("#posts_container").insertAdjacentHTML(
    "afterend",
    `
      <div id="post_title_container">
      <div id="post_title_item1">
        <div id="aa">
        ${recent_post.post[i].post_title}
        </div>

        <div id="bb"> ${recent_post.post[i].writer}  ${recent_post.post[i].date} 조회  ${recent_post.post[i].views}</div>
      </div>
      <div id="post_title_item2">${recent_post.post[i].image}</div>
      <div id="post_title_item3">
        <div class="rounded">댓글<br />${recent_post.post[i].comment}</div>
      </div>
    </div>
    `
  );
}

// 페이지
for (i = page.page; i >= 1; i--) {
  document.querySelector(".page").insertAdjacentHTML(
    "afterbegin",
    `
      <div class="flex-item">${i}</div>
      `
  );
}
