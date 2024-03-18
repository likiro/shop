function fetchData(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data.filter((sneaker) => sneaker.isLike))
    .catch((error) => console.error("У тебя ошибка, исправляй", error));
}

function renderSneakers(data) {
  let wrapper = document.querySelector(".sneakers-wrapper");
  wrapper.innerHTML = data
    .map((item) => {
      return `          
            <div class="sneakers-card">
            <button class="sneakers__card-like">
              <img src="../images/like-1.svg" alt="" class="card-like" data-sneaker-id="${
                item.id
              }" src="../images/${item.islike ? "like-2.svg" : "like-1.svg"}"
              data-is-like="${item.islike ? "true " : "false"}"/>
            </button>
            <img
            src="../images${item.imageUrl}"
              alt=""
              class="sneakers__card-img"
            />
            <h4 class="sneakers__card-title">
              ${item.title}
            </h4>
            <div class="sneakers__card-actions">
              <div class="sneakers__action-price">
                <p>Цена</p>
                <b>${item.price}$</b>
              </div>
              <button class="sneakers__actions-cart">
                <img src="../images/plus.svg" alt="" />
              </button>
            </div>
          </div>`;
    })
    .join("");
}

fetchData("https://3f35e21721e6192a.mokky.dev/sis")
.then((filtreData)=> renderSneakers(filtreData))
.catch((error)=> console.error('произошла ошибка',error))
