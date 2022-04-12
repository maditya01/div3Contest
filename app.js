const tbodyEl = document.querySelector("tbody");

async function getLatestContest(val) {
  const response = await fetch("https://codeforces.com/api/contest.list");
  const data = await response.json();
  console.log(data);
  createTable(data, val);
}
getLatestContest("Div. 3");
// console.log(allContestData);

function createTable(data, val) {
  for (let i = 0; i < data.result.length; i++) {
    const id = data.result[i].id;
    const type = data.result[i].type;
    const name = data.result[i].name;
    //codeforces.com/contest/1642
    // name.includes("Codeforces Round #") &&
    // console.log($ct.value);
    if (name.includes(val)) {
      tbodyEl.innerHTML += `
          <tr>
          <td>${id}</td>
           <td>${type}</td>
           <td> <li><a href="https://codeforces.com/contest/${id}">Contest ${id}</a></li></td>
          </tr>`;
    }
  }
}
