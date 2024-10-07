window.onload = function () {
  const today = new Date(2024, 9, 7); // 年、月（0から始まる）、日を指定
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 月は0から始まるため+1します
  const date = today.getDate();
  const day = today.getDay();

  const formattedDate = `${year}年${month}月${date}日`;

  console.log(`今日の日付は ${formattedDate} です。`);
};
