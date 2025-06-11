var bookmarkName = document.getElementById("bookmark-name");
var siteUrl = document.getElementById("site-url");
var submitBtn = document.getElementById("submit-btn");
var bookmarksStorage = JSON.parse(localStorage.getItem("bookmarks")) || [];
var dialog = document.getElementById("modal-window");
var bookmarkWarningIcon = document.getElementById("bookmark-warning-icon");
var bookmarkCheckIcon = document.getElementById("bookmark-check-icon");
var siteWarningIcon = document.getElementById("site-warning-icon");
var siteCheckIcon = document.getElementById("site-check-icon");
function clear() {
  bookmarkName.value = "";
  siteUrl.value = "";
}
function isValidURL(url) {
  const pattern =
    /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#@!$&'()*+,;=]*)?$/;
  return pattern.test(url);
}
function leaveBookmarkInput() {
  if (bookmarkName.value.trim().length < 3) {
    bookmarkName.style.borderColor = "#dc3545";
  } else {
    bookmarkName.style.borderColor = "#198754";
  }
}
function leaveSiteInput() {
  if (isValidURL(siteUrl.value.trim())) {
    siteUrl.style.borderColor = "#198754";
  } else {
    siteUrl.style.borderColor = "#dc3545";
  }
}
function handleBookmarkInput() {
  if (bookmarkName.value.trim().length < 3) {
    bookmarkName.classList.remove("neutral", "true");
    bookmarkName.classList.add("false");
    bookmarkWarningIcon.style.display = "block";
    bookmarkCheckIcon.style.display = "none";
  } else {
    bookmarkName.classList.remove("neutral", "false");
    bookmarkName.classList.add("true");
    bookmarkWarningIcon.style.display = "none";
    bookmarkCheckIcon.style.display = "block";
  }
}
function handleSiteInput() {
  if (isValidURL(siteUrl.value.trim())) {
    siteUrl.classList.remove("neutral", "false");
    siteUrl.classList.add("true");
    siteWarningIcon.style.display = "none";
    siteCheckIcon.style.display = "block";
  } else {
    siteUrl.classList.remove("neutral", "true");
    siteUrl.classList.add("false");
    siteWarningIcon.style.display = "block";
    siteCheckIcon.style.display = "none";
  }
}
function closeModal() {
  dialog.close();
}
function addWebsite() {
  if (
    !siteUrl.value.trim().startsWith("http://") &&
    !siteUrl.value.trim().startsWith("https://")
  ) {
    siteUrl.value = "https://" + siteUrl.value;
  }
  if (
    bookmarkName.value.trim().length < 3 ||
    isValidURL(siteUrl.value.trim()) === false
  ) {
    return dialog.showModal();
  }

  var bookmark = {
    websiteName: bookmarkName.value.trim(),
    websiteUrl: siteUrl.value.trim(),
  };
  bookmarksStorage.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksStorage));
  clear();
  displayBookmarks();
}
function displayBookmarks() {
  var tableBody = document.getElementById("table-body");
  var html = "";
  for (var i = 0; i < bookmarksStorage.length; i++) {
    console.log(bookmarksStorage[i].websiteUrl);
    html += `<tr>
    <td>${i + 1}</td>
    <td>${bookmarksStorage[i].websiteName}</td>
    <td>
      <a id="visit-btn" href=${bookmarksStorage[i].websiteUrl}  target="_blank">
      <span><i class="fa-solid fa-eye"></i></span> Visit
      </a>
    </td>
    <td>
    <button onclick="deleteBookmark(${i})" id="del-btn">
    <span><i class="fa-regular fa-trash-can"></i></span> delete
    </button>
    </td>
    </tr>`;
  }
  tableBody.innerHTML = html;
}
function deleteBookmark(index) {
  bookmarksStorage.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksStorage));
  displayBookmarks();
}
displayBookmarks();
