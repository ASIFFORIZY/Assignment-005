for (let i = 1; i <= 9; i++) {
  document.getElementById(`addlove${i}`).addEventListener("click", function (event) {
    event.preventDefault();
    const loveCount = document.getElementById("love-count");
    loveCount.innerText = parseInt(loveCount.innerText) + 1;
  });
}

function addCallHistory(serviceName, serviceNumber) {
  const historyContainer = document.querySelector(".call-history");
  const historyItem = document.createElement("div");
  historyItem.className = "bg-gray-100 mt-5 p-3 rounded-xl flex justify-between items-center";

  const leftDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.className = "font-semibold";
  h3.innerText = serviceName;

  const h4 = document.createElement("h4");
  h4.className = "text-gray-500";
  h4.innerText = serviceNumber;

  leftDiv.appendChild(h3);
  leftDiv.appendChild(h4);

  const rightDiv = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = new Date().toLocaleTimeString();
  rightDiv.appendChild(p);

  historyItem.appendChild(leftDiv);
  historyItem.appendChild(rightDiv);

  historyContainer.prepend(historyItem);
}

function setupCallButton(buttonId, serviceName, serviceNumber) {
  document.getElementById(buttonId).addEventListener("click", function (event) {
    event.preventDefault();
    const coinCount = document.getElementById("coinCount");
    let coins = parseInt(coinCount.innerText);

    if (coins >= 20) {
      coinCount.innerText = coins - 20;
      alert(`Calling ${serviceName} ${serviceNumber}`);
      addCallHistory(serviceName, serviceNumber);
    } else {
      alert("Not enough coins! You need at least 20 coins to make a call.");
    }
  });
}

setupCallButton("call1", "National Emergency ", "999");
setupCallButton("call2", "Police Helpline ", "999");
setupCallButton("call3", "Fire Service ", "999");
setupCallButton("call4", "Ambulance Service", "1994-999999");
setupCallButton("call5", "Women & Child Helpline", "109");
setupCallButton("call6", "Anti-Corruption Helpline", "106");
setupCallButton("call7", "Electricity Helpline", "16216");
setupCallButton("call8", "Brac Helpline", "16445");
setupCallButton("call9", "Bangladesh Railway ", "163");

document.getElementById("clearHistory").addEventListener("click", function () {
  document.querySelector(".call-history").innerHTML = "";
});

function setupCopyButton(buttonId, serviceNumber) {
  document.getElementById(buttonId).addEventListener("click", function (event) {
    event.preventDefault();

    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`Number copied: ${serviceNumber}`);
      const copyCount = document.getElementById("copy-count");
      copyCount.innerText = parseInt(copyCount.innerText) + 1;
    });
  });
}

setupCopyButton("addcopy1", "999");
setupCopyButton("addcopy2", "999");
setupCopyButton("addcopy3", "999");
setupCopyButton("addcopy4", "1994-999999");
setupCopyButton("addcopy5", "109");
setupCopyButton("addcopy6", "106");
setupCopyButton("addcopy7", "16216");
setupCopyButton("addcopy8", "16445");
setupCopyButton("addcopy9", "163");

