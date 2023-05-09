function removePromotedTweets() {
  const tweetDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]');

  tweetDivs.forEach((tweetDiv) => {
    const promoted = Array.from(tweetDiv.getElementsByTagName('span')).some((span) => {
      return span.textContent === "Promoted";
    });

    if (promoted) {
      tweetDiv.style.display = 'none';
    }
  });
}

function removePromotedWhoToFollow() {
  const whoToFollowDivs = document.querySelectorAll('div[data-testid="UserCell"]');

  whoToFollowDivs.forEach((whoToFollowDiv) => {
    const promoted = Array.from(whoToFollowDiv.getElementsByTagName('span')).some((span) => {
      return span.textContent === "Promoted";
    });

    if (promoted) {
      whoToFollowDiv.style.display = 'none';
    }
  });
}

// Run the functions initially and set intervals to keep checking for new promoted content
removePromotedTweets();
setInterval(removePromotedTweets, 1000);

removePromotedWhoToFollow();
setInterval(removePromotedWhoToFollow, 1000);
