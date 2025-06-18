function share() {
  const shareData = {
    title: document.title,
    text: "Hello",
    url: location.href
  };
  if (navigator.canShare(shareData)) {
    navigator.share(shareData).then(() => {
      console.log("done");
    }).catch(() => {
      console.log("error");
    });
  } else {
    console.log("Your Browser Does not Support Sharing any Data");
  }
}